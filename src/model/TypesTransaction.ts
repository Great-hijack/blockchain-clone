export default class TypesTransaction {
  symbol: string;
  types: string;
  sum: number;
  price: number;

  constructor(symbol: string, types: string, sum: number, price: number) {
    this.symbol = symbol;
    this.types = types;
    this.sum = sum;
    this.price = price;
  }
}
