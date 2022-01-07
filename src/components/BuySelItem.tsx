import React, { JSXElementConstructor, FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";

interface BuySelItemProps {
  title: string;
  content: string;
  children: JSX.Element;
}

const BuySelItem: FC<BuySelItemProps> = ({ title, content, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.iconContainer}>{children}</View>

        <View style={styles.titleContainer}>
          <Text style={styles.txtTitle}>{title}</Text>
          <Text style={styles.txtContent}>{content}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: 32,
    height: 32,
    backgroundColor: "#FFEEDC",
  },
  titleContainer: {
    flexDirection: "column",
    paddingStart: 8,
  },
  txtTitle: {
    fontSize: 19,
    color: Colors.accentColor,
    fontFamily: "Roboto-Medium",
  },
  txtContent: {
    fontSize: 16,
    color: Colors.accentColor_100,
    fontFamily: "Roboto-Medium",
  },
});

export default BuySelItem;
