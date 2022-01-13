import React, { FC, useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { LineChart } from "react-native-svg-charts";

import Colors from "../../constants/Colors";
import {
  getCoinData,
  getCoinHistory,
  getLocaleCurrencyString,
} from "../../utils/utils";

interface CoinItemProps {
  itemTitle: string;
  itemBalance: number;
  itemSymbol: string;
  itemPrice: number;
  itemHour: number;
  color: string | undefined;
  id: number;
  onItemClick: (symbol: string) => void;
}

const CoinItem: FC<CoinItemProps> = ({
  itemTitle,
  itemBalance,
  itemSymbol,
  itemPrice,
  itemHour,
  color = "red",
  id,
  onItemClick,
}) => {
  const [graph, setGraph] = useState([]);
  const [coinData, setCoinData] = useState<Number[]>([0, 0, 0]);
  const loadData = useCallback(async () => {
    try {
      const response = await getCoinHistory(itemSymbol, 30);
      const coinDataResponse = await getCoinData(itemSymbol);
      setGraph(response);
      setCoinData(coinDataResponse);
    } catch (e) {}
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => {
        onItemClick(itemSymbol);
      }}
    >
      <View style={styles.coinDataContainer}>
        <Image
          style={styles.coinImg}
          source={{
            uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id.toString()}.png`,
          }}
        />

        <View style={styles.coinDatumContainer}>
          <Text style={styles.coinDatumTitle}>{itemTitle}</Text>
          <Text
            style={styles.coinDatumBalance}
          >{`${itemBalance} ${itemSymbol}`}</Text>
          <Text style={styles.coinDatumPrice}>{`$${getLocaleCurrencyString(
            itemPrice.toFixed(2)
          )}`}</Text>
        </View>
      </View>

      <View style={styles.graphContainer}>
        <LineChart
          style={{ height: 50, width: "80%" }}
          data={graph}
          svg={{ stroke: color, strokeWidth: 2 }}
          contentInset={{ top: 10, bottom: 0 }}
        />
        <Text style={styles.coinDatumBalance}>
          {`$${getLocaleCurrencyString(coinData[0])}`}
        </Text>
        <View style={styles.percentContainer}>
          <Text
            style={{
              color: coinData[1] > 0 ? "#4D8F79" : "#CD3131",
              fontSize: 16,
            }}
          >
            {" "}
            {`${coinData[1].toFixed(2)}%`}{" "}
          </Text>
          <Text style={styles.coinDatumPrice}>{`${itemHour} hrs`} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.accentColor_100,
    alignItems: "center",
  },
  coinDataContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  coinImg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "transparent",
    marginEnd: 12,
  },
  coinDatumContainer: {
    flexDirection: "column",
  },
  coinDatumTitle: {
    fontSize: 19,
    color: Colors.accentColor,
    fontFamily: "Roboto-Medium",
  },
  coinDatumBalance: {
    marginTop: 4,
    color: Colors.accentColor,
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
  coinDatumPrice: {
    color: Colors.accentColor_100,
    fontSize: 16,
  },
  graphContainer: {
    flexDirection: "column",
    width: 100,
  },
  percentContainer: {
    flexDirection: "row",
  },
});
export default CoinItem;
