import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-svg-charts";

import Colors from "../../constants/Colors";

const TotalBalanceItem = ({}) => {
  const pieChartData = [
    {
      key: 1,
      value: 50,
      svg: { fill: "#3E33C7" },
    },
    {
      key: 2,
      value: 10,
      svg: { fill: "#FB8F21" },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={{ color: Colors.accentColor_100, fontSize: 16 }}>
          TotalBalnceItem
        </Text>
        <Text style={styles.txtPrice}>$5,254.32</Text>
        <View style={styles.percentContainer}>
          <Text style={styles.txtPercent}>+$95.15(1.84%)</Text>
          <Text style={styles.txtHour}>24hrs</Text>
        </View>
      </View>
      <View style={styles.chartContainer}>
        <PieChart
          style={{ height: 150, width: 150 }}
          data={pieChartData}
          outerRadius={"40%"}
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
  txtPrice: {
    fontSize: 20,
    color: Colors.accentColor,
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
  },
});
export default TotalBalanceItem;
