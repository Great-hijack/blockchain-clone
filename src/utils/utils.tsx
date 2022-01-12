export const getLocaleCurrencyString: (value: String | Number) => String = (
  value
) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getCoinHistory = async (coin: string, count: number) => {
  try {
    const coinHistoryJson = await fetch(
      `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${coin}&tsym=USD&limit=${count}`
    )
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        throw err;
      });
    let coinHistoryData = [];
    if (
      coinHistoryJson.hasOwnProperty("Data") &&
      coinHistoryJson.Data.hasOwnProperty("Data")
    ) {
      coinHistoryData = coinHistoryJson.Data["Data"].map(
        (item: { open: any }) => item.open
      );
    }
    return coinHistoryData;
  } catch (e) {
    throw e;
  }
};

export const getCoinData = async (coin: string) => {
  try {
    const coinDataJson = await fetch(
      `https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&relaxedValidation=true&fsyms=${coin}`
    )
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        throw err;
      });
    let coinData: Number[] = [];
    if (
      coinDataJson.hasOwnProperty("RAW") &&
      coinDataJson.RAW.hasOwnProperty(coin) &&
      coinDataJson.RAW[coin].hasOwnProperty("USD")
    ) {
      coinData.push(coinDataJson.RAW[coin]["USD"].PRICE);
      coinData.push(coinDataJson.RAW[coin]["USD"].CHANGEPCT24HOUR);
    }
    return coinData;
  } catch (e) {
    throw e;
  }
};
