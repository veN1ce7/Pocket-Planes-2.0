import { useState } from 'react';

function CarrierData({ carriers, positions, onSavePosition, onClearPosition }) {
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

    if (Number.isFinite(x) && Number.isFinite(y)) {
      onSavePosition(carrierName, { x, y });
    }
  };

  const clear = (carrierName) => {
    setDrafts((current) => ({
      ...current,
      [carrierName]: { x: '', y: '' },
    }));

    onClearPosition(carrierName);
  };

  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap justify-center gap-2'>
        {carriers.map(([name, airportClass]) => {
          const isPositioned =
            Number.isFinite(positions[name]?.x) &&
            Number.isFinite(positions[name]?.y);

          return (
            <div
              key={name}
              className={
                'grid_cell ' +
                (isPositioned
                  ? 'bg-slate-200 dark:bg-slate-700'
                  : 'bg-red-200 dark:bg-red-700')
              }
            >
              <div className='font-bold'>{name}</div>
              <div>C{airportClass}</div>

              <div className='mt-1 flex justify-center gap-1'>
                <input
                  className='w-20 rounded border border-slate-300 px-1 text-center text-slate-900'
                  inputMode='numeric'
                  placeholder='X'
                  value={drafts[name]?.x ?? ''}
                  onChange={(event) => updateDraft(name, 'x', event.target.value)}
                />
                <input
                  className='w-20 rounded border border-slate-300 px-1 text-center text-slate-900'
                  inputMode='numeric'
                  placeholder='Y'
                  value={drafts[name]?.y ?? ''}
                  onChange={(event) => updateDraft(name, 'y', event.target.value)}
                />
              </div>

              <div className='mt-1 flex justify-center gap-1'>
                <button
                  className='rounded bg-slate-800 px-2 py-1 text-xs text-white'
                  type='button'
                  onClick={() => save(name)}
                >
                  Save
                </button>
                <button
                  className='rounded bg-slate-500 px-2 py-1 text-xs text-white'
                  type='button'
                  onClick={() => clear(name)}
                >
                  Clear
                </button>
              </div>

              <div className='mt-1 text-xs'>
                {isPositioned
                  ? `(${positions[name].x}, ${positions[name].y})`
                  : 'Missing coordinates'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CarrierData;
