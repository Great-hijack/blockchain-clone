import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";

import Colors from "../../constants/Colors";
import Images from "../../constants/Images";

const Login = () => {
  const [loaded] = useFonts({
    "Roboto-Medium": Asset.fromModule(
      require("../../../assets/fonts/Roboto-Medium.ttf")
    ),
  });

  const ref = useRef(null);

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.primaryDarkColor} />
      <View style={styles.topBarContainer}>
        <View style={styles.txtOppositeView}></View>
        <Image source={Images.LogoImg} style={styles.imgLogo} />
        <View style={styles.txtOppositeView}></View>
      </View>

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
        ref={ref}
      >
        <View style={styles.viewContainer}>
          <Text style={styles.animText}>User not exist.</Text>

          <View style={styles.inputViewContainer}>
            <Text style={styles.textTitle}>Please input profile id.</Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
            ></TextInput>
            <TouchableOpacity
              style={styles.signBtn}
              activeOpacity={0.5}
              onPress={() => {}}
            >
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  viewContainer: {
    flexDirection: "column",
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "center",
    paddingHorizontal: "6%",
    marginTop: "30%",
  },
  header: {
    flexDirection: "row",
    marginTop: 6,
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  closePress: {
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  animText: {
    color: "#FFF",
    fontSize: 30,
    fontFamily: "CoinbaseDisplay-Medium",
    textAlignVertical: "center",
  },
  inputViewContainer: {
    marginTop: 25,
    flexDirection: "column",
    width: "100%",
  },
  textTitle: {
    color: "white",
    fontSize: 16,
  },
  textInput: {
    color: "white",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    borderColor: "white",
    marginTop: 20,
    width: "100%",
    height: 40,
    borderWidth: StyleSheet.hairlineWidth,
  },
  signBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 16,
    width: "100%",
    height: 40,
  },
  btnText: {
    color: "#0149FF",
    fontSize: 20,
  },
});
export default Login;
