export default function hasValuesFromArray(set, array) {
  let boolean = false;
  for (const element of array) {
    if (set.has(element)) {
      boolean = true;
    } else {
      boolean = false;
      break;
    }
  }
  return boolean;
}
