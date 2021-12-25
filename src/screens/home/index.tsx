import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import SegmentedControlTab from "react-native-segmented-control-tab";

import Colors from "../../constants/Colors";
import CoinItem from "./CoinItem";
import TotalBalanceItem from "./TotalBalanceItem";

const Home = () => {
  const [segmentIndex, setSegmentIndex] = useState(0);
  const handleSegmentIndex = (index: any) => {
    setSegmentIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.primaryDarkColor} />
      <View style={styles.topBarContainer}>
        <FontAwesome name="navicon" size={24} style={styles.navIcon} />
        <Text style={styles.topBarTitle}>Home</Text>
        <View style={styles.topBarRight}></View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.segmentContainer}>
          <SegmentedControlTab
            values={["Portfolio", "Prices"]}
            selectedIndex={segmentIndex}
            onTabPress={handleSegmentIndex}
            activeTabStyle={{ backgroundColor: "white" }}
            activeTabTextStyle={{ color: Colors.primaryColor }}
            tabTextStyle={{ color: Colors.accentColor }}
            tabsContainerStyle={{ height: 36 }}
            tabStyle={{
              backgroundColor: "#EEEBEE",
              borderColor: "#EEEBEE",
              borderWidth: 2,
            }}
          />
        </View>

        <View>
          <TotalBalanceItem />
        </View>

        <View style={styles.coinItemContainer}>
          <CoinItem
            itemTitle="BitCoin"
            itemBalance={0.000064}
            itemSymbol="BTC"
            itemPrice={4444}
            itemPercent={23}
            itemHour={24}
            color="#FB8F21"
            id={1}
          />
          <CoinItem
            itemTitle="Ethereum"
            itemBalance={1.000064}
            itemSymbol="ETH"
            itemPrice={898}
            itemPercent={0.23}
            itemHour={24}
            color="blue"
            id={1027}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Text style={styles.txtCrypto}>Buy Crypto</Text>
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
  scrollContainer: {
    backgroundColor: Colors.secondaryColor,
    paddingTop: 24,
    paddingBottom: 100,
  },
  segmentContainer: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  navIcon: {
    color: Colors.secondaryColor,
  },
  topBarTitle: {
    color: Colors.secondaryColor,
    fontSize: 24,
  },
  topBarRight: {
    width: 24,
    height: 24,
  },
  coinItemContainer: {
    paddingBottom: 40,
  },
  buttonContainer: {
    backgroundColor: Colors.secondaryColor,
    paddingVertical: 8,
  },
  txtCrypto: {
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 16,
    borderRadius: 8,
    textAlign: "center",
    paddingVertical: 12,
    color: Colors.secondaryColor,
    fontSize: 16,
  },
});
export default Home;
