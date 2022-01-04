import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const LoadingItem = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FFFFFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#102F6E90",
  },
});

export default LoadingItem;
