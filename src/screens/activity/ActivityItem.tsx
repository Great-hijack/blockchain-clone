import React, { JSXElementConstructor, FC } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

interface ActivityItemProps {
  title: string;
  content: string;
  balance: string;
  symbol: string;
  usdPrice: string;
  children: JSX.Element;
  onItemClick: () => void;
}

const ActivityItem: FC<ActivityItemProps> = ({
  title,
  content,
  balance,
  symbol,
  usdPrice,
  children,
  onItemClick,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => {
        onItemClick();
      }}
    >
      <View style={styles.leftContainer}>
        <View style={styles.iconContainer}>{children}</View>

        <View style={styles.titleContainer}>
          <Text style={styles.txtTitle}>{title}</Text>
          <Text style={styles.txtContent}>{content}</Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.txtTitle}>
          {balance} {symbol}
        </Text>
        <Text style={styles.txtContent}>${usdPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.accentColor_100,
    paddingHorizontal: 16,
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
  rightContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

export default ActivityItem;
