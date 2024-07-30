export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const value = weakMap.get(endpoint);
    weakMap.set(endpoint, value + 1);
  } else {
    weakMap.set(endpoint, 1);
  }

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
