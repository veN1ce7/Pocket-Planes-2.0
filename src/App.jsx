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
        Pocket Planes Calculator
      </h1>

      <div className='container px-4 mx-auto'>
        <p className='text-left'>
          This is a collection of tools and data for Pocket Planes. These tools
          are designed to assist you in making informed decisions while building
          your airline empire.
        </p>
        <p className='text-left'>
          Credit goes to{' '}
          <a
            className='underline'
            href='http://therustysnowman.com/proj/pocketplanes.php'
          >
            the rusty snowman
          </a>{' '}
          for creating the original tool. My aim was to enhance its
          responsiveness and appearance on mobile devices.
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
