import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import PinCodeItem from "../../components/PincodeItem";

import Colors from "../../constants/Colors";

interface PinCodeProps {
  selectedPinLength: number;
}

const PinCode: FC<PinCodeProps> = ({ selectedPinLength }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtPin}>Enter Your PIN</Text>
      <View style={styles.pinContainer}>
        <PinCodeItem selected={selectedPinLength >= 1 ? true : false} />
        <PinCodeItem selected={selectedPinLength >= 2 ? true : false} />
        <PinCodeItem selected={selectedPinLength >= 3 ? true : false} />
        <PinCodeItem selected={selectedPinLength >= 4 ? true : false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  txtPin: {
    color: Colors.secondaryColor,
    fontSize: 16,
  },
  pinContainer: {
    marginTop: 36,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PinCode;
