const STORAGE_KEY = 'pocketPlanesCarrierPositions';

export const loadCarrierPositions = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw);

    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return {};
    }

    return Object.entries(parsed).reduce((acc, [carrierName, position]) => {
      const x = Number(position?.x);
      const y = Number(position?.y);

      if (Number.isFinite(x) && Number.isFinite(y)) {
        acc[carrierName] = { x, y };
      }

      return acc;
    }, {});
  } catch {
    return {};
  }
};

export const saveCarrierPositions = (positions) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
};
