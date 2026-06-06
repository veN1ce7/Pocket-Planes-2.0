import { useState } from 'react';

function CarrierPositionManager({ carriers, positions, onSavePosition, onClearPosition }) {
  const [drafts, setDrafts] = useState(() =>
    carriers.reduce((acc, [name]) => {
      acc[name] = {
        x: positions[name]?.x ?? '',
        y: positions[name]?.y ?? '',
      };
      return acc;
    }, {})
  );

  const updateDraft = (carrierName, field, value) => {
    setDrafts((current) => ({
      ...current,
      [carrierName]: {
        ...current[carrierName],
        [field]: value,
      },
    }));
  };

  const save = (carrierName) => {
    const x = Number(drafts[carrierName]?.x);
    const y = Number(drafts[carrierName]?.y);

    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      return;
    }

    onSavePosition(carrierName, { x, y });
  };

  const clear = (carrierName) => {
    setDrafts((current) => ({
      ...current,
      [carrierName]: {
        x: '',
        y: '',
      },
    }));

    onClearPosition(carrierName);
  };

  return (
    <div className='mx-auto my-4 max-w-4xl rounded border border-slate-300 p-4 text-left'>
      <h3 className='mb-1 text-lg font-bold'>Aircraft carrier positions</h3>
      <p className='mb-4 text-sm text-slate-600'>
        Enter carrier X/Y coordinates from the game. Positioned carriers will appear in route pickers.
      </p>

      <div className='space-y-3'>
        {carriers.map(([name, airportClass]) => {
          const isPositioned =
            Number.isFinite(positions[name]?.x) && Number.isFinite(positions[name]?.y);

          return (
            <div
              key={name}
              className='grid gap-2 rounded border border-slate-200 p-3 md:grid-cols-7 md:items-center'
            >
              <div className='font-semibold md:col-span-2'>
                {name}{' '}
                <span className='text-sm font-normal text-slate-600'>
                  Carrier C{airportClass}
                </span>
              </div>

              <input
                className='rounded border border-slate-300 px-3 py-2 text-slate-900'
                inputMode='numeric'
                placeholder='X'
                value={drafts[name]?.x ?? ''}
                onChange={(event) => updateDraft(name, 'x', event.target.value)}
              />

              <input
                className='rounded border border-slate-300 px-3 py-2 text-slate-900'
                inputMode='numeric'
                placeholder='Y'
                value={drafts[name]?.y ?? ''}
                onChange={(event) => updateDraft(name, 'y', event.target.value)}
              />

              <button
                className='rounded bg-slate-800 px-4 py-2 font-semibold text-white hover:bg-slate-700'
                type='button'
                onClick={() => save(name)}
              >
                Save
              </button>

              <button
                className='rounded border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100'
                type='button'
                onClick={() => clear(name)}
              >
                Clear
              </button>

              <div className='text-sm text-slate-600'>
                {isPositioned ? `(${positions[name].x}, ${positions[name].y})` : 'Not positioned'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CarrierPositionManager;
