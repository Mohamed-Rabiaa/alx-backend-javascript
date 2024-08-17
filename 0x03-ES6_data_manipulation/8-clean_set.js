export default function startString(set, startString) {
  if (!set || !(set instanceof Set) || startString === '' || typeof startString !== 'string') {
    return '';
  }
  const result = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subStr = value.slice(startString.length);

      if (subStr && subStr !== value) {
        result.push(subStr);
      }
    }
  }
  return result.join('-');
}
