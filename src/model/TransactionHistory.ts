export default class TransactionHistory {
  symbol: string;
  issent: boolean;
  balance: number;
  transactionid: string;
  date: number;
  tos: string;
  froms: string;
  types: string;
  price: number;

  constructor(
    symbol: string,
    issent: boolean,
    balance: number,
    transactionid: string,
    date: number,
    tos: string,
    types: string,
    froms: string,
    price: number
  ) {
    this.symbol = symbol;
    this.issent = issent;
    this.balance = balance;
    this.transactionid = transactionid;
    this.date = date;
    this.tos = tos;
    this.froms = froms;
    this.types = types;
    this.price = price;
  }
}
