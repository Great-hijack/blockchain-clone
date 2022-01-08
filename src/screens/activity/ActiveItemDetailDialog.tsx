import React, { FC, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import ActiveItemDetailDialogItem from "./ActiveItemDetailDialogItem";

interface ItemDetailDialogProps {
  onItemClicked: () => void;
}

const ActiveItemDetailDialog: FC<ItemDetailDialogProps> = ({
  onItemClicked,
}) => {
  return (
    <Modal
      isVisible={true}
      animationInTiming={500}
      style={styles.container}
      hasBackdrop={true}
      backdropOpacity={0.1}
    >
      <View style={styles.titleContainer}>
        <View style={styles.closeView}></View>
        <Text style={styles.txtCoinTitle}>Received</Text>
        <TouchableOpacity
          style={styles.closeView}
          activeOpacity={0.7}
          onPress={() => onItemClicked()}
        >
          <MaterialCommunityIcons
            name="close-circle"
            size={24}
            color={Colors.accentColor_100}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.txtBalance}>0.10193023 BTC</Text>

      <View style={styles.completeView}>
        <View style={styles.completeLeftView}>
          <Text style={styles.txtComplete}>Completed</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        <ActiveItemDetailDialogItem
          title="Transaction ID"
          content="2k23k2k2k2k2h232l32l32l322k2k2k2k2"
          isFileVisible={true}
        />
        <ActiveItemDetailDialogItem
          title="Date"
          content="Dec 24, 2021 at 2:12 PM"
          isFileVisible={false}
        />
        <ActiveItemDetailDialogItem
          title="Total"
          content="$5,278.07"
          isFileVisible={false}
        />
        <ActiveItemDetailDialogItem
          title="Network Free"
          content="0.000001923 BTC / $1.01"
          isFileVisible={false}
        />
        <ActiveItemDetailDialogItem
          title="To"
          content="bc1qagOa4crps80dr436ygiziek24idwOlswsy"
          isFileVisible={true}
        />
        <ActiveItemDetailDialogItem
          title="From"
          content="bc1qagOa4crps80dr436ygiziek24idwOlk6ui"
          isFileVisible={true}
        />
      </ScrollView>
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
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 16,
    paddingTop: 8,
    justifyContent: "space-between",
  },
  txtCoinTitle: {
    color: Colors.accentColor,
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
  closeView: {
    width: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  txtBalance: {
    fontSize: 24,
    color: Colors.accentColor,
    fontFamily: "Roboto-Medium",
    paddingHorizontal: 16,
  },
  completeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 24,
  },
  completeLeftView: {
    backgroundColor: "#E5FAEB",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  txtComplete: {
    color: "#00A261",
    fontFamily: "Roboto-Medium",
  },
  scrollViewContainer: {
    marginTop: 24,
  },
});
export default ActiveItemDetailDialog;
