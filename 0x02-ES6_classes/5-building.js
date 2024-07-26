export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() { // eslint-disable-line class-methods-use-this
    throw Error('Class extending Building must override evacuationWarningMessage');
  }
}
