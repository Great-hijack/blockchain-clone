import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";

import Colors from "../../constants/Colors";
import Images from "../../constants/Images";
import AppNavigator from "../../navigation";
import DigiitalCode from "./DigitalCode";
import PinCode from "./PinCode";

const Pin = () => {
  const [loaded] = useFonts({
    "Roboto-Medium": Asset.fromModule(
      require("../../../assets/fonts/Roboto-Medium.ttf")
    ),
  });
  const pinLength = useRef(0);
  const [selectedPinLength, setSelectedPinLength] = useState(0);
  const [isCorrectPass, setIsCorrectPass] = useState(false);
  const animation = useRef();
  let password = "";

  const handlePinLength = (digit: string) => {
    if (digit === "back") {
      if (pinLength.current <= 0) {
        pinLength.current = 0;
      } else {
        pinLength.current = pinLength.current - 1;
      }
    } else {
      if (pinLength.current >= 4) {
        pinLength.current = 4;
      } else {
        pinLength.current = pinLength.current + 1;
      }
    }
    handlePass(digit);
    if (pinLength.current === 4) {
      setTimeout(() => {
        setIsCorrectPass(true);
      }, 2000);
    }
    setSelectedPinLength(pinLength.current);
  };

  const handlePass = (digit: string) => {
    if (digit === "back") {
      password = password.slice(0, -1);
    } else {
      password += digit;
    }
  };

  {
    if (isCorrectPass) {
      return <AppNavigator />;
    }
  }

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.primaryDarkColor} />
      <View style={styles.topBarContainer}>
        <Text style={styles.txtLogout}>Log Out</Text>
        <Image source={Images.LogoImg} style={styles.imgLogo} />
        <View style={styles.txtOppositeView}></View>
      </View>

      <View style={styles.scrollViewContainer}>
        <View style={styles.pinCodeContainer}>
          <PinCode selectedPinLength={selectedPinLength} />
        </View>

        <View style={styles.digitalContainer}>
          <DigiitalCode
            onNumberClick={(digit: string) => {
              handlePinLength(digit);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDarkColor,
    justifyContent: "flex-start",
  },
  topBarContainer: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: Colors.primaryDarkColor,
    alignItems: "center",
  },
  txtLogout: {
    color: Colors.secondaryColor,
    fontSize: 16,
  },
  imgLogo: {
    width: 48,
    height: 48,
  },
  txtOppositeView: {
    width: 48,
    height: 24,
  },
  scrollViewContainer: {
    width: "100%",
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "column",
  },
  pinCodeContainer: {
    justifyContent: "center",
    marginTop: 56,
  },
  digitalContainer: {
    justifyContent: "center",
    marginBottom: 20,
    alignItems: "center",
  },
});
export default Pin;
