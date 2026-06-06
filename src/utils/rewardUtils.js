export const calculateCoins = (distance) => {
  if (!distance) {
    return null;
  }

  return Math.floor(distance / 4) + 50;
};

export const calculateBaseBux = (distance) => {
  if (!distance) {
    return null;
  }

  return Math.max(1, Math.floor(distance / 800));
};
