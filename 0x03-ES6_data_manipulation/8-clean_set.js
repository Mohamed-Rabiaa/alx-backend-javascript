export default function startString(set, startString) {
  if (!set || !(set instanceof Set) || startString === '' || typeof startString !== 'string') {
    return '';
  }
  const result = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }
  return result.join('-');
}
