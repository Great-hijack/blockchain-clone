export const getLocaleCurrencyString: (value: String | Number) => String = (
  value
) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const API_PARAMS = {
  "1H": {
    url: "histominute",
    limit: 60,
    timeDiff: 60 * 60,
  },
  Day: {
    url: "histominute",
    limit: 24 * 60,
    timeDiff: 24 * 60 * 60,
  },
  Week: {
    url: "histohour",
    limit: 24 * 7,
    timeDiff: 7 * 24 * 60 * 60,
  },
  Month: {
    url: "histohour",
    limit: 24 * 30,
    timeDiff: 30 * 24 * 60 * 60,
  },
  Year: {
    url: "histoday",
    limit: 365,
    timeDiff: 365 * 24 * 60 * 60,
  },
  All: {
    url: "histoday",
    limit: 2000,
    timeDiff: 2000 * 24 * 60 * 60,
  },
};

export const getCoinHistory = async (
  coin: string,
  count: number,
  range: string = "Day"
) => {
  try {
    const coinHistoryJson = await fetch(
      `https://min-api.cryptocompare.com/data/v2/${API_PARAMS[range].url}?fsym=${coin}&tsym=USD&limit=${count}`
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
      coinData.push(coinDataJson.RAW[coin]["USD"].CHANGE24HOUR);
    }
    return coinData;
  } catch (e) {
    throw e;
  }
};
