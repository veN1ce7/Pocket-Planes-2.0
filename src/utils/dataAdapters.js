export const AIRPORT_TYPE = 'airport';
export const CARRIER_TYPE = 'carrier';

export const planeArrayToObject = (plane) => {
  const [name, level, airportClass, capacity, range, speed, weight, landingRules] = plane;

  return {
    name,
    level,
    airportClass,
    capacity,
    range,
    speed,
    weight,
    landingRules: landingRules || {},
  };
};

export const airportArrayToLocation = (airport) => {
  const [name, airportClass, x, y] = airport;

  return {
    id: `airport:${name}`,
    name,
    type: AIRPORT_TYPE,
    airportClass,
    x,
    y,
  };
};

export const carrierToLocation = (carrier, position) => {
  const [name, airportClass] = carrier;

  if (!position || !Number.isFinite(position.x) || !Number.isFinite(position.y)) {
    return null;
  }

  return {
    id: `carrier:${name}`,
    name,
    type: CARRIER_TYPE,
    airportClass,
    x: position.x,
    y: position.y,
  };
};

export const getLocationLabel = (location) => {
  if (!location) {
    return '';
  }

  if (location.type === CARRIER_TYPE) {
    return `${location.name} [Carrier C${location.airportClass}]`;
  }

  return `${location.name} [C${location.airportClass}]`;
};
