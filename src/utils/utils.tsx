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
