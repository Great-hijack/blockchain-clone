import React, { FC, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import LoadingItem from "./LoadingItem";

const LoadingSpinner = () => {
  const refreshing = useRef(true);
  return (
    <Spinner
      visible={refreshing.current}
      textContent={""}
      size={"large"}
      textStyle={styles.spinnerTextStyle}
      color={"#FF0000"}
      overlayColor={"transparent"}
      customIndicator={<LoadingItem />}
    />
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#00000000",
  },
});
export default LoadingSpinner;
