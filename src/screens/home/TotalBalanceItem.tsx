import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-svg-charts";

import Colors from "../../constants/Colors";
import { getLocaleCurrencyString } from "../../utils/utils";

const TotalBalanceItem = ({}) => {
  const pieChartData = [
    {
      key: 1,
      value: 50,
      svg: { fill: "#FB8F21" },
    },
    {
      key: 2,
      value: 3,
      svg: { fill: "#3E33C7" },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.txtBalance}>Total Balance</Text>
        <Text style={styles.txtPrice}>
          ${getLocaleCurrencyString("23,240.32")}{" "}
        </Text>
        <View style={styles.percentContainer}>
          <Text style={styles.txtPercent}>
            +${getLocaleCurrencyString("157.15")}(1.84%)
          </Text>
          <Text style={styles.txtHour}>24hrs</Text>
        </View>
      </View>
      <View style={styles.chartContainer}>
        <PieChart
          style={{ height: 150, width: 150 }}
          data={pieChartData}
          outerRadius={"45%"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  dataContainer: {
    flexDirection: "column",
  },
  txtBalance: {
    color: Colors.accentColor_100,
    fontSize: 16,
    fontWeight: "bold",
  },
  txtPrice: {
    fontSize: 20,
    color: Colors.accentColor,
    fontWeight: "bold",
  },
  percentContainer: {
    flexDirection: "row",
  },
  txtPercent: {
    color: "#4D8F79",
    fontSize: 16,
  },
  txtHour: {
    color: Colors.accentColor_100,
    fontSize: 16,
  },
  chartContainer: {
    marginTop: -35,
    marginEnd: -30,
  },
});
export default TotalBalanceItem;
