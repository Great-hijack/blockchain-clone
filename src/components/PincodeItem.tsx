import React, { FC } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";

interface PinCodeItemProps {
  selected: boolean;
}

const PinCodeItem: FC<PinCodeItemProps> = ({ selected }) => {
  return (
    <View style={styles.contain}>
      <View
        style={[
          styles.container,
          {
            width: selected ? 26 : 20,
            height: selected ? 26 : 20,
            backgroundColor: selected ? "white" : "#25447F",
          },
        ]}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    width: 28,
    height: 28,
    marginHorizontal: 14,
  },
  container: {
    borderRadius: 50,
  },
});
export default PinCodeItem;
