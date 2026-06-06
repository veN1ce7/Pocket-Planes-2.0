import { AIRPORT_TYPE, CARRIER_TYPE } from './dataAdapters';

export const calculateDistance = (fromLocation, toLocation) => {
  if (!fromLocation || !toLocation) {
    return null;
  }

  const distance = Math.sqrt(
    Math.pow(fromLocation.x - toLocation.x, 2) +
      Math.pow(fromLocation.y - toLocation.y, 2)
  );

  return Math.floor(distance);
};

export const canPlaneLandAtLocation = (plane, location) => {
  if (!plane || !location) {
    return false;
  }

  if (location.type === AIRPORT_TYPE || location.type === CARRIER_TYPE) {
    const requiredAirportClass =
      plane.landingRules?.minAirportClass ?? plane.airportClass;

    return requiredAirportClass <= location.airportClass;
  }

  return false;
};

export const canPlaneFlyRoute = (plane, fromLocation, toLocation) =>
  canPlaneLandAtLocation(plane, fromLocation) &&
  canPlaneLandAtLocation(plane, toLocation);

export const getPlaneRangeStatus = (plane, distance) => {
  if (!distance) {
    return {
      colorClass: 'bg-slate-200 dark:bg-slate-700',
      upgradeRequired: '',
    };
  }

  if (distance <= plane.range) {
    return {
      colorClass: 'bg-green-200 dark:bg-green-700',
      upgradeRequired: '',
    };
  }

  if (distance <= Math.floor(plane.range * 1.05)) {
    return {
      colorClass: 'bg-yellow-200 dark:bg-yellow-700',
      upgradeRequired: ' (+5%)',
    };
  }

  if (distance <= Math.floor(plane.range * 1.1)) {
    return {
      colorClass: 'bg-yellow-200 dark:bg-yellow-700',
      upgradeRequired: ' (+10%)',
    };
  }

  if (distance <= Math.floor(plane.range * 1.15)) {
    return {
      colorClass: 'bg-yellow-200 dark:bg-yellow-700',
      upgradeRequired: ' (+15%)',
    };
  }

  if (distance <= Math.floor(plane.range * 1.2)) {
    return {
      colorClass: 'bg-amber-400 dark:bg-amber-500',
      upgradeRequired: ' (+20% VIP)',
    };
  }

  return {
    colorClass: 'bg-slate-200 dark:bg-slate-700',
    upgradeRequired: '',
  };
};

export const getPlaneRouteStatus = (plane, distance, fromLocation, toLocation) => {
  if (!distance || !fromLocation || !toLocation) {
    return {
      colorClass: 'bg-slate-200 dark:bg-slate-700',
      upgradeRequired: '',
    };
  }

  const rangeStatus = getPlaneRangeStatus(plane, distance);

  if (!canPlaneFlyRoute(plane, fromLocation, toLocation)) {
    return {
      ...rangeStatus,
      colorClass: 'bg-red-200 dark:bg-red-700',
    };
  }

  return rangeStatus;
};
