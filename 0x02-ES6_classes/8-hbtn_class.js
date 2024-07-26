export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](arg) {
    if (arg === 'number') {
      return this._size;
    }
    if (arg === 'string') {
      return this._location;
    }
    return NaN;
  }
}
