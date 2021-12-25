import React, { FC } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

interface DigitalItemProps {
  number: string;
  onNumberClick: (digit: string) => void;
}

const DigitalItem: FC<DigitalItemProps> = ({ number, onNumberClick }) => {
  return (
    <TouchableOpacity
      onPressIn={() => {}}
      onPressOut={() => {}}
      activeOpacity={0.8}
      onPress={() => {
        onNumberClick(number);
      }}
      style={styles.touchStyle}
    >
      <Text style={styles.txtDigit}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchStyle: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  txtDigit: {
    color: Colors.secondaryColor,
    fontSize: 40,
    textAlign: "center",
  },
});
export default DigitalItem;
