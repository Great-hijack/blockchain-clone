import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import WeekSegmentItem from "../../components/WeekSegmentItem";

import Colors from "../../constants/Colors";

const ItemDetailDialog = () => {
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

      <View style={styles.segmentContainer}>
        <WeekSegmentItem />
      </View>
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
    padding: 8,
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 32,
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
  },
});
export default ItemDetailDialog;
