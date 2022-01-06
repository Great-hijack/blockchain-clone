import React, { FC } from "react";
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
import { getLocaleCurrencyString } from "../../utils/utils";

interface CoinItemProps {
  itemTitle: string;
  itemBalance: number;
  itemSymbol: string;
  itemPrice: number;
  itemPercent: number;
  itemHour: number;
  color: string;
  id: number;
  onItemClick: (coinId: string) => void;
}

const CoinItem: FC<CoinItemProps> = ({
  itemTitle,
  itemBalance,
  itemSymbol,
  itemPrice,
  itemPercent,
  itemHour,
  color,
  id,
  onItemClick,
}) => {
  const graphData = [50, 10, 40, 95, -4, -24, 85, 91, 35];
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => {
        onItemClick(itemTitle);
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
            itemPrice
          )}`}</Text>
        </View>
      </View>

      <View style={styles.graphContainer}>
        <LineChart
          style={{ height: 50, width: "60%" }}
          data={graphData}
          svg={{ stroke: color, strokeWidth: 2 }}
          contentInset={{ top: 10, bottom: 0 }}
        />
        <Text style={styles.coinDatumBalance}>
          {`$${getLocaleCurrencyString(itemPrice)}`}
        </Text>
        <View style={styles.percentContainer}>
          <Text
            style={{
              color: itemPercent > 0 ? "#4D8F79" : "#CD3131",
              fontSize: 16,
            }}
          >
            {" "}
            {`${itemPercent}%`}{" "}
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
    width: 90,
  },
  percentContainer: {
    flexDirection: "row",
  },
});
export default CoinItem;
