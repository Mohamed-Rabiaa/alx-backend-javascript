export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    const currencyName = this.currency.name;
    const currencyCode = this.currency.code;

    return `${this.amount} ${currencyName} (${currencyCode})`;
  }

  static convertPrice(amount, convertionRate) {
    return amount * convertionRate;
  }
}
