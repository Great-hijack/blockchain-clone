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

interface DetailDialogItemProps {
  itemKey: string;
  itemTitle: string;
  itemBalance: number;
  itemSymbol: string;
  itemPrice: number;
  id: number;
  onItemClick: (coinId: string) => void;
}

const DetailDialogItem: FC<DetailDialogItemProps> = ({
  itemKey,
  itemTitle,
  itemBalance,
  itemSymbol,
  itemPrice,
  id,
  onItemClick,
}) => {
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
          <Text style={styles.coinDatumTitle}>{itemKey}</Text>
          <Text style={styles.coinDatumBalance}>{itemTitle}</Text>
        </View>
      </View>

      <View style={styles.graphContainer}>
        <Text style={styles.coinDatumTitle}>
          {`$${getLocaleCurrencyString(itemPrice)}`}
        </Text>
        <Text
          style={styles.coinDatumBalance}
        >{`${itemBalance} ${itemSymbol}`}</Text>
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
    alignItems: "center",
  },
  coinDataContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
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
    color: Colors.accentColor_100,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  coinDatumPrice: {
    color: Colors.accentColor_100,
    fontSize: 16,
  },
  graphContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
});
export default DetailDialogItem;
