import { useMemo, useState } from 'react';
import { getLocationLabel, CARRIER_TYPE } from '../utils/dataAdapters';

function AirportPicker({ label, options, value, onChange }) {
  const selectedLocation = options.find((option) => option.id === value);
  const [query, setQuery] = useState(
    selectedLocation ? getLocationLabel(selectedLocation) : ''
  );
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return options.slice(0, 30);
    }

    return options
      .filter((option) =>
        getLocationLabel(option).toLowerCase().includes(normalizedQuery)
      )
      .slice(0, 30);
  }, [options, query]);

  const selectLocation = (location) => {
    if (location.isMissingCoordinates) {
      return;
    }

    setQuery(getLocationLabel(location));
    setIsOpen(false);
    onChange(location.id);
  };

  return (
    <div className='relative w-72'>
      <label className='sr-only'>{label}</label>
      <input
        className='w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:outline-none'
        type='search'
        placeholder={label}
        value={query}
        onFocus={() => setIsOpen(true)}
        onChange={(event) => {
          setQuery(event.target.value);
          setIsOpen(true);

          if (event.target.value !== getLocationLabel(selectedLocation)) {
            onChange(undefined);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setIsOpen(false);
          }

          const firstAvailable = filteredOptions.find(
            (option) => !option.isMissingCoordinates
          );

          if (event.key === 'Enter' && firstAvailable) {
            selectLocation(firstAvailable);
          }
        }}
      />

      {isOpen && (
        <div className='absolute z-10 mt-1 max-h-64 w-full overflow-y-auto rounded border border-slate-300 bg-white text-left shadow-lg'>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => {
              const isMissingCarrier =
                option.type === CARRIER_TYPE && option.isMissingCoordinates;

              return (
                <button
                  key={option.id}
                  className={
                    'block w-full px-3 py-2 text-left ' +
                    (isMissingCarrier
                      ? 'cursor-not-allowed bg-red-100 text-red-800'
                      : 'text-slate-900 hover:bg-slate-100')
                  }
                  type='button'
                  disabled={isMissingCarrier}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => selectLocation(option)}
                >
                  {getLocationLabel(option)}
                  {isMissingCarrier && (
                    <span className='block text-xs'>
                      Missing coordinates
                    </span>
                  )}
                </button>
              );
            })
          ) : (
            <div className='px-3 py-2 text-slate-500'>No locations found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default AirportPicker;
