import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import CoinItem from "./CoinItem";
import TotalBalanceItem from "./TotalBalanceItem";
import ItemDetailDialog from "./ItemDetailDialog";
import * as transactionActions from "../../store/actions/transactions";
import transactions, {
  AllTransactionState,
} from "../../store/reducers/transactions";
import { getCoinData, getCoinHistory } from "../../utils/utils";
import cmpData from "../../constants/CoinMarketCapData";

interface RootState {
  transactions: AllTransactionState;
}

const Home = () => {
  const allTransactionData = useSelector(
    (state: RootState) => state.transactions.allTransactionData
  );
  const [showItemDialog, setShowItemDialog] = useState({
    isVisible: false,
    id: 0,
  });
  const [balanceData, setBalanceData] = useState({
    totalBalance: 0,
    changedBalance: 0,
    changedPercent: 0,
  });
  const dispatch = useDispatch();

  const loadData = useCallback(async () => {
    try {
      dispatch(transactionActions.fetchAllTransactionData("1"));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  const loadCoinData = useCallback(async () => {
    try {
      let allChangedPrice = 0;
      const totalBalance = allTransactionData.reduce(
        (preVal, currentVal) => preVal + currentVal.price * currentVal.sum,
        0
      );
      for (let i = 0; i < allTransactionData.length; i++) {
        const coinDataResponse = await getCoinData(
          allTransactionData[i].symbol
        );
        const changedPrice =
          Number(coinDataResponse[2]) * allTransactionData[i].sum;
        allChangedPrice = allChangedPrice + changedPrice;
      }
      const changedPercent =
        (totalBalance * 100) / (totalBalance - allChangedPrice) - 100;

      setBalanceData({
        ...balanceData,
        ...{
          totalBalance: totalBalance,
          changedBalance: allChangedPrice,
          changedPercent: changedPercent,
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
        <Text style={styles.topBarTitle}>Home</Text>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={20}
            color={Colors.accentColor_100}
          />
          <View style={{ marginHorizontal: 12 }}></View>
          <MaterialIcons
            name="person"
            size={24}
            color={Colors.accentColor_100}
          />
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.totalItemContainer}>
          <TotalBalanceItem
            totalBalance={balanceData.totalBalance}
            changedBalance={balanceData.changedBalance}
            changedPercent={balanceData.changedPercent}
          />
        </View>

        <View style={styles.coinItemContainer}>
          {allTransactionData.map((item, index) => {
            const itemCmpData = cmpData.data.find(
              (cmpCoin) => item.symbol === cmpCoin.symbol
            );
            return (
              <CoinItem
                key={index}
                itemTitle={itemCmpData ? itemCmpData.name : "Undefined"}
                itemBalance={item.sum}
                itemSymbol={item.symbol}
                itemPrice={item.sum * item.price}
                itemHour={24}
                color={itemCmpData ? itemCmpData.color : "red"}
                id={itemCmpData ? itemCmpData.id : 1}
                onItemClick={(coinId: string) => {
                  setShowItemDialog({
                    ...showItemDialog,
                    ...{
                      isVisible: true,
                      id: itemCmpData ? itemCmpData.id : 1,
                    },
                  });
                }}
              />
            );
          })}
        </View>
      </ScrollView>

      {showItemDialog.isVisible && (
        <ItemDetailDialog
          id={showItemDialog.id}
          onItemClicked={() => {
            setShowItemDialog({
              ...showItemDialog,
              ...{ isVisible: !showItemDialog.isVisible },
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

  topBarTitle: {
    color: Colors.accentColor,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto-Medium",
  },
  topBarRight: {
    width: 24,
    height: 24,
  },
  totalItemContainer: {
    marginTop: -10,
  },
  coinItemContainer: {
    paddingBottom: 40,
    marginTop: -30,
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
