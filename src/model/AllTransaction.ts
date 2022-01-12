export default class AllTransaction {
  symbol: string;
  sum: number;
  price: number;

  constructor(symbol: string, sum: number, price: number) {
    this.symbol = symbol;
    this.sum = sum;
    this.price = price;
  }
}
