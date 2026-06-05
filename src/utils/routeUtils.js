export const buildAirportDict = (airports) =>
  airports.reduce((acc, [city, clazz, xCoord, yCoord]) => {
    acc[city] = { class: clazz, x: xCoord, y: yCoord };
    return acc;
  }, {});

export const calculateDistance = (fromCity, toCity, airportDict) => {
  if (!fromCity || !toCity) {
    return null;
  }

  const fromAirport = airportDict[fromCity];
  const toAirport = airportDict[toCity];

  if (!fromAirport || !toAirport) {
    return null;
  }

  const distance = Math.sqrt(
    Math.pow(fromAirport.x - toAirport.x, 2) +
      Math.pow(fromAirport.y - toAirport.y, 2)
  );

  return Math.floor(distance);
};

export const getPlaneRouteStatus = (plane, distance, fromCity, toCity, airportDict) => {
  const [, , planeClass, , range] = plane;

  if (!distance || !fromCity || !toCity) {
    return {
      colorClass: 'bg-slate-200 dark:bg-slate-700',
      upgradeRequired: '',
    };
  }

  let colorClass = 'bg-slate-200 dark:bg-slate-700';
  let upgradeRequired = '';

  if (distance <= range) {
    colorClass = 'bg-green-200 dark:bg-green-700';
  } else if (distance <= Math.floor(range * 1.05)) {
    colorClass = 'bg-yellow-200 dark:bg-yellow-700';
    upgradeRequired = ' (+5%)';
  } else if (distance <= Math.floor(range * 1.1)) {
    colorClass = 'bg-yellow-200 dark:bg-yellow-700';
    upgradeRequired = ' (+10%)';
  } else if (distance <= Math.floor(range * 1.15)) {
    colorClass = 'bg-yellow-200 dark:bg-yellow-700';
    upgradeRequired = ' (+15%)';
  } else if (distance <= Math.floor(range * 1.2)) {
    colorClass = 'bg-amber-400 dark:bg-amber-500';
    upgradeRequired = ' (+20% VIP)';
  }

  if (
    planeClass > airportDict[fromCity].class ||
    planeClass > airportDict[toCity].class
  ) {
    colorClass = 'bg-red-200 dark:bg-red-700';
  }

  return { colorClass, upgradeRequired };
};
