import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { Chart, Line, Area, Tooltip } from "react-native-responsive-linechart";

import WeekSegmentItem from "../../components/WeekSegmentItem";

import Colors from "../../constants/Colors";
import DetailDialogItem from "./DetailDialogItem";

const ItemDetailDialog = () => {
  const graphData = [50, 10, 40, 95, -4, -24, 85, 91, 35];

  return (
    <Modal isVisible={true} animationInTiming={500} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.txtCoinTitle}>Current BTC Price</Text>
        <Text style={styles.txtPriceTitle}>$51,020.47</Text>
        <View style={styles.percentContainer}>
          <Text style={styles.txtPercent}>7.29%</Text>
          <Text style={styles.txtWeek}>1 week</Text>
        </View>
      </View>

      <Chart
        style={{ height: 160, width: "100%", marginTop: 10 }}
        data={[
          { x: 0, y: 12 },
          { x: 1, y: 7 },
          { x: 2, y: 6 },
          { x: 3, y: 3 },
          { x: 4, y: 5 },
          { x: 5, y: 8 },
          { x: 6, y: 12 },
          { x: 7, y: 14 },
          { x: 8, y: 12 },
          { x: 9, y: 13.5 },
          { x: 10, y: 18 },
          { x: 11, y: 19 },
          { x: 12, y: 14 },
          { x: 13, y: 12 },
          { x: 14, y: 19 },
        ]}
        padding={{ left: 0, bottom: 20, right: 0, top: 0 }}
        xDomain={{ min: 0, max: 14 }}
        yDomain={{ min: 0, max: 20 }}
      >
        <Line
          theme={{ stroke: { color: "#159262", width: 1 } }}
          tooltipComponent={
            <Tooltip theme={{ formatter: ({ y }) => y.toFixed(2) }} />
          }
        />
        <Area
          theme={{
            gradient: {
              from: { color: "#159262", opacity: 0.6 },
              to: { color: "#159262", opacity: 0.05 },
            },
          }}
        />
      </Chart>

      <View style={styles.segmentContainer}>
        <WeekSegmentItem />
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        <DetailDialogItem
          itemKey="Private Key Wallte"
          itemTitle="Bitcoin"
          itemBalance={0.0000064}
          itemSymbol="BTC"
          itemPrice={4444}
          id={1}
          onItemClick={(coinId: string) => {}}
        />

        <DetailDialogItem
          itemKey="Trading Account"
          itemTitle="Bitcoin"
          itemBalance={0.0000064}
          itemSymbol="BTC"
          itemPrice={4444}
          id={1}
          onItemClick={(coinId: string) => {}}
        />
      </ScrollView>

      <TouchableOpacity style={styles.btnContainer} activeOpacity={0.8}>
        <Text style={styles.txtBtn}>Buy Bitcoin</Text>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    marginTop: 32,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 32,
    paddingTop: 8,
  },
  txtCoinTitle: {
    color: Colors.accentColor_100,
    fontSize: 16,
  },
  txtPriceTitle: {
    color: Colors.accentColor,
    fontSize: 28,
    fontFamily: "Roboto-Medium",
  },
  percentContainer: {
    flexDirection: "row",
  },
  txtPercent: {
    color: "#4D8F79",
    fontFamily: "Roboto-Medium",
    fontSize: 14,
  },
  txtWeek: {
    color: Colors.accentColor_100,
    fontFamily: "Roboto-Medium",
    fontSize: 14,
  },
  segmentContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 8,
  },
  btnContainer: {
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 8,
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  scrollViewContainer: {
    paddingTop: 8,
  },
  txtBtn: {
    color: "white",
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
});
export default ItemDetailDialog;
