import { useMemo, useState } from 'react';
import './DistanceCalc.css';
import { airports, planes } from '../vars';
import AirportPicker from './AirportPicker';
import {
  buildAirportDict,
  calculateDistance,
  getPlaneRouteStatus,
} from '../utils/routeUtils';

function DistanceCalc() {
  const [fromCity, setFromCity] = useState();
  const [toCity, setToCity] = useState();

  const airportDict = useMemo(() => buildAirportDict(airports), []);

  const options = useMemo(
    () =>
      airports.map((airport) => ({
        name: airport[0],
        value: airport[0],
      })),
    []
  );

  const distance = calculateDistance(fromCity, toCity, airportDict);

  const planeRender = (plane) => {
    const { colorClass, upgradeRequired } = getPlaneRouteStatus(
      plane,
      distance,
      fromCity,
      toCity,
      airportDict
    );

    return (
      <div key={plane[0]} className={'grid_cell ' + colorClass}>
        {plane[0] + upgradeRequired}
      </div>
    );
  };

  return (
    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-center gap-2'>
        <AirportPicker
          label='Pick Starting City'
          options={options}
          value={fromCity}
          onChange={setFromCity}
        />
        <AirportPicker
          label='Pick Destination City'
          options={options}
          value={toCity}
          onChange={setToCity}
        />
      </div>

      <h3 className='p-4 text-center'>
        Distance: {distance ? distance : 'N/A'}
      </h3>

      <div className='flex flex-wrap justify-center gap-2'>
        {planes.map(planeRender)}
      </div>
    </div>
  );
}

export default DistanceCalc;
