import { useEffect, useMemo, useState } from 'react';
import './DistanceCalc.css';
import { airports, carriers, planes } from '../vars';
import AirportPicker from './AirportPicker';
import {
  airportArrayToLocation,
  carrierToLocation,
  planeArrayToObject,
} from '../utils/dataAdapters';
import {
  calculateDistance,
  getPlaneRouteStatus,
} from '../utils/routeUtils';
import {
  calculateBaseBux,
  calculateCoins,
} from '../utils/rewardUtils';
import {
  loadCarrierPositions,
  saveCarrierPositions,
} from '../utils/carrierPositions';

function DistanceCalc({ carrierPositions, setCarrierPositions }) {
  const [fromLocationId, setFromLocationId] = useState();
  const [toLocationId, setToLocationId] = useState();

  useEffect(() => {
    saveCarrierPositions(carrierPositions);
  }, [carrierPositions]);

  const airportLocations = useMemo(
    () => airports.map(airportArrayToLocation),
    []
  );

  const carrierLocations = useMemo(
    () =>
      carriers.map((carrier) =>
        carrierToLocation(carrier, carrierPositions[carrier[0]])
      ),
    [carrierPositions]
  );

  const locations = useMemo(
    () => [...airportLocations, ...carrierLocations],
    [airportLocations, carrierLocations]
  );

  const selectableLocationDict = useMemo(
    () =>
      locations
        .filter((location) => !location.isMissingCoordinates)
        .reduce((acc, location) => {
          acc[location.id] = location;
          return acc;
        }, {}),
    [locations]
  );

  const planeData = useMemo(() => planes.map(planeArrayToObject), []);

  const fromLocation = fromLocationId ? selectableLocationDict[fromLocationId] : null;
  const toLocation = toLocationId ? selectableLocationDict[toLocationId] : null;
  const distance = calculateDistance(fromLocation, toLocation);
  const coins = calculateCoins(distance);
  const baseBux = calculateBaseBux(distance);

  const planeRender = (plane) => {
    const { colorClass, upgradeRequired } = getPlaneRouteStatus(
      plane,
      distance,
      fromLocation,
      toLocation
    );

    return (
      <div key={plane.name} className={'grid_cell ' + colorClass}>
        {plane.name + upgradeRequired}
      </div>
    );
  };

  return (
    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-center gap-2'>
        <AirportPicker
          label='Pick Starting Location'
          options={locations}
          value={fromLocationId}
          onChange={setFromLocationId}
        />
        <AirportPicker
          label='Pick Destination Location'
          options={locations}
          value={toLocationId}
          onChange={setToLocationId}
        />
      </div>

      <h3 className='flex flex-wrap justify-center gap-4 p-4 text-center'>
        <span>Distance: {distance ? distance : 'N/A'}</span>
        <span>🪙 Coins: {coins ? coins : 'N/A'}</span>
        <span>💵 Bux: {baseBux ? baseBux : 'N/A'}</span>
      </h3>

      <div className='flex flex-wrap justify-center gap-2'>
        {planeData.map(planeRender)}
      </div>
    </div>
  );
}

export default DistanceCalc;
