import React from 'react';
import SelectSearch from 'react-select-search';
import './DistanceCalc.css';
import { useState } from 'react';
import { airports, planes } from '../vars';

function DistanceCalc() {
  const [fromCity, setFromCity] = useState();
  const [toCity, setToCity] = useState();

  // name, level, class, capacity, range, speed, weight

  const airportDict = airports.reduce((acc, [city, clazz, xCoord, yCoord]) => {
    acc[city] = { class: clazz, x: xCoord, y: yCoord };
    return acc;
  }, {});

  const airplaneDict = planes.reduce(
    (acc, [pname, level, clazz, capacity, range, speed, weight]) => {
      acc[pname] = {
        class: clazz,
        level: level,
        capacity: capacity,
        range: range,
        speed: speed,
        weight: weight,
      };
      return acc;
    },
    {}
  );

  let options = airports.map((airport) => {
    return { name: airport[0], value: airport[0] };
  });

  const CalcDist = (iFrom, iTo) => {
    if (!iFrom || !iTo) {
      return null;
    }

    var dist = Math.sqrt(
      Math.pow(airportDict[iFrom]['x'] - airportDict[iTo]['x'], 2) +
        Math.pow(airportDict[iFrom]['y'] - airportDict[iTo]['y'], 2)
    );
    return Math.floor(dist);
  };

  const planeRender = (plane) => {
    let color = 'bg-slate-200 dark:bg-slate-700';
    let distance = CalcDist(fromCity, toCity);
    let upgradeRequired = '';
    if (distance) {
      if (distance < plane[4]) {
        color = 'bg-green-200 dark:bg-green-700';
      } else if (distance <= Math.floor(plane[4] * 1.05)) {
        color = 'bg-yellow-200 dark:bg-yellow-700';
        upgradeRequired = ' (+5%)';
      } else if (distance <= Math.floor(plane[4] * 1.1)) {
        color = 'bg-yellow-200 dark:bg-yellow-700';
        upgradeRequired = ' (+10%)';
      } else if (distance <= Math.floor(plane[4] * 1.15)) {
        color = 'bg-yellow-200 dark:bg-yellow-700';
        upgradeRequired = ' (+15%)';
      } else if (distance <= Math.floor(plane[4] * 1.2)) {
        color = 'bg-amber-400 dark:bg-amber-500';
        upgradeRequired = ' (+20% VIP)';
      }
      if (
        plane[2] > airportDict[fromCity]['class'] ||
        plane[2] > airportDict[toCity]['class']
      ) {
        color = 'bg-red-200 dark:bg-red-700';
      }
    }

    return (
      <div key={plane[0]} className={'grid_cell ' + color}>
        {plane[0] + upgradeRequired}
      </div>
    );
  };

  return (
    <div class='container mx-auto'>
      <div className='flex justify-center'>
        <SelectSearch
          options={options}
          placeholder='Pick Starting City'
          search={true}
          value={fromCity}
          onChange={setFromCity}
        />
        <SelectSearch
          options={options}
          placeholder='Pick Destination City'
          search={true}
          value={toCity}
          onChange={setToCity}
        />
      </div>

      <h3 className='p-4 text-center'>
        Distance:{' '}
        {CalcDist(fromCity, toCity) ? CalcDist(fromCity, toCity) : 'N/A'}
      </h3>
      <div class='flex flex-wrap justify-center gap-2'>
        {planes.map(planeRender)}
      </div>
    </div>
  );
}

export default DistanceCalc;
