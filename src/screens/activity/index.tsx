import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import * as transactionActions from "../../store/actions/transactions";
import transactions, {
  AllTransactionState,
} from "../../store/reducers/transactions";
import { getCoinData, getLocaleCurrencyString } from "../../utils/utils";

interface RootState {
  transactions: AllTransactionState;
}

const Activity = () => {
  const allTransactionData = useSelector(
    (state: RootState) => state.transactions.allTransactionData
  );
  const transactionHistoryData = useSelector(
    (state: RootState) => state.transactions.transactionHistoryData
  );
  const [scrollRefreshing, setscrollRefreshing] = useState(false);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [balanceData, setBalanceData] = useState({
    totalBalance: 0,
    changedBalance: 0,
    changedPercent: 0,
  });
  const dispatch = useDispatch();

  const loadData = useCallback(async () => {
    try {
      dispatch(transactionActions.fetchAllTransactionData("1"));
      dispatch(transactionActions.fetchTransactionHistoryData("1"));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  const loadCoinData = useCallback(async () => {
    try {
      const totalBalance = allTransactionData.reduce(
        (preVal, currentVal) => preVal + currentVal.price * currentVal.sum,
        0
      );

      setBalanceData({
        ...balanceData,
        ...{
          totalBalance: totalBalance,
        },
      });
    } catch (e) {}
  }, []);

  useEffect(() => {
    loadData().then((res) => {});
    loadCoinData();
  }, [loadData, dispatch]);
  console.log("---------------activity--------", transactionHistoryData);
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
            <Text style={styles.txtPrice}>
              $
              {getLocaleCurrencyString(
                Math.abs(balanceData.totalBalance).toFixed(2)
              )}{" "}
              USD
            </Text>
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
        {transactionHistoryData.map((item, index) => {
          const receiveSent = item.issent
            ? `Sent ${item.symbol}`
            : `Received ${item.symbol}`;
          const iconName = item.issent
            ? "arrow-top-right"
            : "arrow-bottom-left";
          return (
            <ActivityItem
              title={receiveSent}
              content="Dec 24, 2021"
              balance={item.balance.toString()}
              symbol={item.symbol}
              usdPrice={(item.balance * item.price).toFixed(2).toString()}
              onItemClick={() => {
                setDialogVisible(true);
              }}
            >
              <MaterialCommunityIcons
                name={iconName}
                size={22}
                color="#FF911C"
              />
            </ActivityItem>
          );
        })}

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
