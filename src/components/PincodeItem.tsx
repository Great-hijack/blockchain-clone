import React, { FC } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";

interface PinCodeItemProps {
  selected: boolean;
}

const PinCodeItem: FC<PinCodeItemProps> = ({ selected }) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: selected ? 26 : 24,
          marginHorizontal: selected ? 14 : 16,
          height: selected ? 26 : 24,
          backgroundColor: selected ? "white" : Colors.accentColor,
        },
      ]}
    ></View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
  },
});
export default PinCodeItem;
