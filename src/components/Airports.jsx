import React from 'react';
import './Airports.css';
import { airports } from '../vars';

const airportClassName = {
  1: 'grid_grey',
  2: 'grid_blue',
  3: 'grid_red',
};

function Airports() {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-center gap-2'>
        {airports.map(([city, clazz, xCoord, yCoord]) => (
          <div
            key={city}
            className={`grid_cell ${airportClassName[clazz] || 'grid_grey'}`}
          >
            {city}
            <br />
            ({xCoord},{yCoord})
          </div>
        ))}
      </div>
    </div>
  );
}

export default Airports;
