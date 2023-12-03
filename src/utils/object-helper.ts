export const objectHelperWithNotUndefined = (
  obj: Record<string, any>
): Record<string, any> => {
  const newObj: Record<string, any> = {};

  for (const key in obj) {
    const value = obj[key];

    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      value !== undefined &&
      !(Array.isArray(value) && value.length === 0)
    ) {
      newObj[key] = value;
    }
  }

  return newObj;
};
