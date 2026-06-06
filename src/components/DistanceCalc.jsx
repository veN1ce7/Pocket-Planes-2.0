import { useEffect, useMemo, useState } from 'react';
import './DistanceCalc.css';
import { airports, carriers, planes } from '../vars';
import AirportPicker from './AirportPicker';
import CarrierPositionManager from './CarrierPositionManager';
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
  loadCarrierPositions,
  saveCarrierPositions,
} from '../utils/carrierPositions';

function DistanceCalc() {
  const [fromLocationId, setFromLocationId] = useState();
  const [toLocationId, setToLocationId] = useState();
  const [carrierPositions, setCarrierPositions] = useState(() =>
    loadCarrierPositions()
  );

  useEffect(() => {
    saveCarrierPositions(carrierPositions);
  }, [carrierPositions]);

  const airportLocations = useMemo(
    () => airports.map(airportArrayToLocation),
    []
  );

  const carrierLocations = useMemo(
    () =>
      carriers
        .map((carrier) => carrierToLocation(carrier, carrierPositions[carrier[0]]))
        .filter(Boolean),
    [carrierPositions]
  );

  const locations = useMemo(
    () => [...airportLocations, ...carrierLocations],
    [airportLocations, carrierLocations]
  );

  const planeData = useMemo(() => planes.map(planeArrayToObject), []);

  const locationDict = useMemo(
    () =>
      locations.reduce((acc, location) => {
        acc[location.id] = location;
        return acc;
      }, {}),
    [locations]
  );

  const fromLocation = fromLocationId ? locationDict[fromLocationId] : null;
  const toLocation = toLocationId ? locationDict[toLocationId] : null;
  const distance = calculateDistance(fromLocation, toLocation);

  const saveCarrierPosition = (carrierName, position) => {
    setCarrierPositions((current) => ({
      ...current,
      [carrierName]: position,
    }));
  };

  const clearCarrierPosition = (carrierName) => {
    setCarrierPositions((current) => {
      const next = { ...current };
      delete next[carrierName];
      return next;
    });

    if (fromLocationId === `carrier:${carrierName}`) {
      setFromLocationId(undefined);
    }

    if (toLocationId === `carrier:${carrierName}`) {
      setToLocationId(undefined);
    }
  };

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
      <CarrierPositionManager
        carriers={carriers}
        positions={carrierPositions}
        onSavePosition={saveCarrierPosition}
        onClearPosition={clearCarrierPosition}
      />

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

      <h3 className='p-4 text-center'>
        Distance: {distance ? distance : 'N/A'}
      </h3>

      <div className='flex flex-wrap justify-center gap-2'>
        {planeData.map(planeRender)}
      </div>
    </div>
  );
}

export default DistanceCalc;
