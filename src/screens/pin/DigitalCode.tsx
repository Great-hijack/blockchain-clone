import React, { FC } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import DigitalItem from "../../components/DigitalItem";

import Colors from "../../constants/Colors";
import Images from "../../constants/Images";

interface DigitalCodeProps {
  onNumberClick: (digit: string) => void;
}

const DigiitalCode: FC<DigitalCodeProps> = ({ onNumberClick }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "6%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <DigitalItem
          number="1"
          onNumberClick={(digit: string) => onNumberClick(digit)}
        />
        <DigitalItem
          number="2"
          onNumberClick={(digit: string) => onNumberClick(digit)}
        />
        <DigitalItem
          number="3"
          onNumberClick={(digit: string) => onNumberClick(digit)}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <DigitalItem
          number="4"
          onNumberClick={(digit: string) => onNumberClick(digit)}
        />
        <DigitalItem
          number="5"
          onNumberClick={(digit: string) => onNumberClick(digit)}
        />
        <DigitalItem
          number="6"
          onNumberClick={(digit: string) => onNumberClick(digit)}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <DigitalItem
          number="7"
          onNumberClick={(digit: string) => onNumberClick(digit)}
        />
        <DigitalItem
          number="8"
          onNumberClick={(digit: string) => onNumberClick(digit)}
        />
        <DigitalItem
          number="9"
          onNumberClick={(digit: string) => onNumberClick(digit)}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View style={{ width: 64, height: 64 }}></View>
        <DigitalItem
          number="0"
          onNumberClick={(digit: string) => onNumberClick(digit)}
        />
        <TouchableOpacity
          onPressIn={() => {}}
          onPressOut={() => {}}
          activeOpacity={0.8}
          onPress={() => {
            onNumberClick("back");
          }}
          style={styles.touchStyle}
        >
          <Ionicons name="backspace-outline" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDarkColor,
    justifyContent: "flex-start",
  },
  touchStyle: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default DigiitalCode;
