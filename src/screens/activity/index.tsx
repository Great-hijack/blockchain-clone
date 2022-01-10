import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  RefreshControl,
} from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import ActivityItem from "./ActivityItem";
import ActiveItemDetailDialog from "./ActiveItemDetailDialog";

const Activity = () => {
  const [scrollRefreshing, setscrollRefreshing] = useState(false);
  const [isDialogVisible, setDialogVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.secondaryColor}
        barStyle="dark-content"
      />

      <View style={styles.topBarContainer}>
        <Text style={styles.topBarTitle}>Activity</Text>
      </View>

      <View style={styles.allWalleteView}>
        <View style={styles.allWalleteRightView}>
          <View style={styles.rightImageView}>
            <FontAwesome5 name="wallet" size={16} color={Colors.primaryColor} />
          </View>

          <View style={styles.rightContentView}>
            <Text style={styles.txtTitle}>All Wallets</Text>
            <Text style={styles.txtPrice}>$23,240.83 USD</Text>
          </View>
        </View>

        <View>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={Colors.accentColor_100}
          />
        </View>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl
            tintColor="rgb(233, 233, 243)"
            refreshing={scrollRefreshing}
          />
        }
      >
        <ActivityItem
          title="Received BTC"
          content="Dec 24, 2021"
          balance="0.10192344"
          symbol="BTC"
          usdPrice="5,234.01"
          onItemClick={() => {
            setDialogVisible(true);
          }}
        >
          <MaterialCommunityIcons
            name="arrow-bottom-left"
            size={22}
            color="#FF911C"
          />
        </ActivityItem>
        <ActivityItem
          title="Received BTC"
          content="Dec 23, 2021"
          balance="0.12192344"
          symbol="BTC"
          usdPrice="5,524.01"
          onItemClick={() => {
            setDialogVisible(true);
          }}
        >
          <MaterialCommunityIcons
            name="arrow-bottom-left"
            size={22}
            color="#FF911C"
          />
        </ActivityItem>
        <ActivityItem
          title="Received BTC"
          content="Dec 22, 2021"
          balance="0.0001923"
          symbol="BTC"
          usdPrice="234.01"
          onItemClick={() => {
            setDialogVisible(true);
          }}
        >
          <MaterialCommunityIcons
            name="arrow-bottom-left"
            size={22}
            color="#FF911C"
          />
        </ActivityItem>
        <ActivityItem
          title="Received BTC"
          content="Dec 21, 2021"
          balance="0.00014344"
          symbol="BTC"
          usdPrice="124.01"
          onItemClick={() => {
            setDialogVisible(true);
          }}
        >
          <MaterialCommunityIcons
            name="arrow-bottom-left"
            size={22}
            color="#FF911C"
          />
        </ActivityItem>
        <ActivityItem
          title="Received BTC"
          content="Dec 20, 2021"
          balance="0.0082344"
          symbol="BTC"
          usdPrice="4,234.01"
          onItemClick={() => {
            setDialogVisible(true);
          }}
        >
          <MaterialCommunityIcons
            name="arrow-bottom-left"
            size={22}
            color="#FF911C"
          />
        </ActivityItem>

        <ActivityItem
          title="Sent BTC"
          content="Dec 19, 2021"
          balance="0.0082344"
          symbol="BTC"
          usdPrice="4,234.01"
          onItemClick={() => {
            setDialogVisible(true);
          }}
        >
          <MaterialCommunityIcons
            name="arrow-top-right"
            size={22}
            color="#FF911C"
          />
        </ActivityItem>

        <ActivityItem
          title="Received BTC"
          content="Dec 18, 2021"
          balance="0.0082344"
          symbol="BTC"
          usdPrice="4,234.01"
          onItemClick={() => {
            setDialogVisible(true);
          }}
        >
          <MaterialCommunityIcons
            name="arrow-bottom-left"
            size={22}
            color="#FF911C"
          />
        </ActivityItem>
        <View style={{ height: 20 }}></View>
      </ScrollView>

      {isDialogVisible && (
        <ActiveItemDetailDialog
          onItemClicked={() => {
            setDialogVisible(false);
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryColor,
    justifyContent: "flex-start",
  },
  topBarContainer: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: Colors.secondaryColor,
    alignItems: "center",
    marginTop: 16,
  },
  topBarTitle: {
    color: Colors.accentColor,
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Roboto-Medium",
  },
  allWalleteView: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 12,
    justifyContent: "space-between",
  },
  allWalleteRightView: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightImageView: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: "#ECF4FE",
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 8,
  },
  rightContentView: {
    flexDirection: "column",
  },
  txtTitle: {
    fontSize: 19,
    color: Colors.accentColor,
    fontFamily: "Roboto-Medium",
  },
  txtPrice: {
    marginTop: 4,
    color: Colors.accentColor_100,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  scrollContainer: {
    backgroundColor: Colors.secondaryColor,
    paddingTop: 24,
    paddingBottom: 100,
  },
});
export default Activity;
