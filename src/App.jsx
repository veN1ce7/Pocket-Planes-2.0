import { useState } from 'react';
import './App.css';
import Airplanes from './components/Airplanes';
import Airports from './components/Airports';
import CarrierData from './components/CarrierData';
import DistanceCalc from './components/DistanceCalc';
import { carriers } from './vars';
import {
  loadCarrierPositions,
  saveCarrierPositions,
} from './utils/carrierPositions';

function App() {
  const [carrierPositions, setCarrierPositions] = useState(() =>
    loadCarrierPositions()
  );

  const saveCarrierPosition = (carrierName, position) => {
    setCarrierPositions((current) => {
      const next = {
        ...current,
        [carrierName]: position,
      };

      saveCarrierPositions(next);
      return next;
    });
  };

  const clearCarrierPosition = (carrierName) => {
    setCarrierPositions((current) => {
      const next = { ...current };
      delete next[carrierName];

      saveCarrierPositions(next);
      return next;
    });
  };

  return (
    <div className='App'>
      <h1 className='text-3xl font-bold p-4 text-center'>
        Pocket Planes Calculator 2.0
      </h1>

      <div className='container px-4 mx-auto'>
        <p className='text-left'>
          Pocket Planes Calculator 2.0 is a modernized and actively maintained
          collection of tools and reference data for Pocket Planes. The project
          is designed to help players plan routes, evaluate aircraft
          capabilities, and make informed decisions while building their airline
          empire.
        </p>

        <p className='text-left'>
          Special thanks to{' '}
          <a
            className='underline'
            href='http://therustysnowman.com/proj/pocketplanes.php'
          >
            The Rusty Snowman
          </a>{' '}
          for creating the original Pocket Planes route calculator and data
          reference, and to{' '}
	  <a
	    className='underline'
	    href='https://github.com/Jmshaver'
   	  > 
	    Jmshaver 
	  </a>{' '}
          for developing the first modern web
          implementation that inspired this project.
        </p>

      </div>

      <h2 className='text-xl font-bold p-4 text-center'>
        Airport Distance Calculator
      </h2>
      <DistanceCalc
        carrierPositions={carrierPositions}
        setCarrierPositions={setCarrierPositions}
      />

      <h2 className='text-xl font-bold p-4 text-center'>Airplane Data</h2>
      <Airplanes />

      <h2 className='text-xl font-bold p-4 text-center'>Aircraft Carrier Data</h2>
      <CarrierData
        carriers={carriers}
        positions={carrierPositions}
        onSavePosition={saveCarrierPosition}
        onClearPosition={clearCarrierPosition}
      />

      <h2 className='text-xl font-bold p-4 text-center'>Airport Data</h2>
      <Airports />
    </div>
  );
}

export default App;
