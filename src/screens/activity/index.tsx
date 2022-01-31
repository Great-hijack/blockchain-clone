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
import moment from "moment";

import Colors from "../../constants/Colors";
import ActivityItem from "./ActivityItem";
import ActiveItemDetailDialog from "./ActiveItemDetailDialog";
import * as transactionActions from "../../store/actions/transactions";
import transactions, {
  AllTransactionState,
} from "../../store/reducers/transactions";
import { UserState } from "../../store/reducers/user";
import { getCoinData, getLocaleCurrencyString } from "../../utils/utils";

interface RootState {
  transactions: AllTransactionState;
  user: UserState;
}

const Activity = () => {
  const allTransactionData = useSelector(
    (state: RootState) => state.transactions.allTransactionData
  );
  const transactionHistoryData = useSelector(
    (state: RootState) => state.transactions.transactionHistoryData
  );
  const user = useSelector((state: RootState) => state.user.userData);
  const [scrollRefreshing, setscrollRefreshing] = useState(false);
  const [isDialogVisible, setDialogVisible] = useState({
    isVisible: false,
    isSent: false,
    symbol: "BTC",
    transactionId: "",
    date: 0,
    balance: 0,
    total: 0,
    tos: "",
    froms: "",
  });
  const [balanceData, setBalanceData] = useState({
    totalBalance: 0,
    changedBalance: 0,
    changedPercent: 0,
  });
  const dispatch = useDispatch();

  const loadData = useCallback(async () => {
    try {
      dispatch(transactionActions.fetchAllTransactionData(user.profileId));
      dispatch(transactionActions.fetchTransactionHistoryData(user.profileId));
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
          const date = moment.unix(item.date).format("MMM DD,YYYY");
          return (
            <ActivityItem
              key={index}
              title={receiveSent}
              content={date}
              balance={item.balance.toString()}
              symbol={item.symbol}
              usdPrice={(item.balance * item.price).toFixed(2).toString()}
              onItemClick={() => {
                setDialogVisible({
                  ...isDialogVisible,
                  ...{
                    isVisible: true,
                    isSent: item.issent,
                    symbol: item.symbol,
                    transactionId: item.transactionid,
                    date: item.date,
                    balance: item.balance,
                    total: item.balance * item.price,
                    tos: item.tos,
                    froms: item.froms,
                  },
                });
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

      {isDialogVisible.isVisible && (
        <ActiveItemDetailDialog
          isSent={isDialogVisible.isSent}
          transactionId={isDialogVisible.transactionId}
          symbol={isDialogVisible.symbol}
          date={isDialogVisible.date}
          balance={isDialogVisible.balance}
          total={isDialogVisible.total}
          froms={isDialogVisible.froms}
          tos={isDialogVisible.tos}
          onItemClicked={() => {
            setDialogVisible({
              ...isDialogVisible,
              ...{ isVisible: false },
            });
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
