import { useMemo, useState } from 'react';

function AirportPicker({ label, options, value, onChange }) {
  const [query, setQuery] = useState(value || '');
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return options.slice(0, 20);
    }

    return options
      .filter((option) => option.name.toLowerCase().includes(normalizedQuery))
      .slice(0, 20);
  }, [options, query]);

  const selectAirport = (airportName) => {
    setQuery(airportName);
    setIsOpen(false);
    onChange(airportName);
  };

  return (
    <div className='relative w-64'>
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

          if (event.target.value !== value) {
            onChange(undefined);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setIsOpen(false);
          }

          if (event.key === 'Enter' && filteredOptions.length > 0) {
            selectAirport(filteredOptions[0].value);
          }
        }}
      />

      {isOpen && (
        <div className='absolute z-10 mt-1 max-h-64 w-full overflow-y-auto rounded border border-slate-300 bg-white text-left shadow-lg'>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <button
                key={option.value}
                className='block w-full px-3 py-2 text-left text-slate-900 hover:bg-slate-100'
                type='button'
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => selectAirport(option.value)}
              >
                {option.name}
              </button>
            ))
          ) : (
            <div className='px-3 py-2 text-slate-500'>No airports found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default AirportPicker;
