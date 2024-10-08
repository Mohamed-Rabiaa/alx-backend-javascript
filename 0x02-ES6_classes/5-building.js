export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
