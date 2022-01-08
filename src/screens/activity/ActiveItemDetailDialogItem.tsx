import React, { FC, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

interface ActiveItemDetailDialogItemProps {
  title: string;
  content: string;
  isFileVisible: boolean;
}

const ActiveItemDetailDialogItem: FC<ActiveItemDetailDialogItemProps> = ({
  title,
  content,
  isFileVisible = true,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.txtTitle}>{title}</Text>
        <Text style={styles.txtContent}>{content}</Text>
      </View>

      {isFileVisible && (
        <View style={styles.fileView}>
          <MaterialIcons
            name="file-copy"
            size={24}
            color={Colors.accentColor_100}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.accentColor_100,
  },
  contentContainer: {
    flexDirection: "column",
    flex: 1,
    marginEnd: 8,
  },
  fileView: {
    width: 32,
  },
  txtTitle: {
    color: Colors.accentColor_100,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  txtContent: {
    color: Colors.accentColor,
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
});
export default ActiveItemDetailDialogItem;
