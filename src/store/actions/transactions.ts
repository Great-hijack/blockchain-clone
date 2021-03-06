import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AllTransactionState } from "../reducers/transactions";
import ActionTypes from "../types";
import { API } from "../../api/urls";
import { getCoinData } from "../../utils/utils";
import AllTransaction from "../../model/AllTransaction";
import TypesTransaction from "../../model/TypesTransaction";
import TransactionHistory from "../../model/TransactionHistory";

export const fetchAllTransactionData = (profileId: string) => {
  return async (dispatch: ThunkDispatch<AllTransactionState, void, Action>) => {
    try {
      const allTransactionDataJson = await fetch(
        `${API.BASE_URL}/api/v1/transactions/symbols_group`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Origin": "*",
          },
          body: JSON.stringify({ profileid: profileId }),
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          console.log("-----timeout-----", err);
        });

      let allTransactionArray = [];
      if (
        allTransactionDataJson.hasOwnProperty("msg") &&
        allTransactionDataJson.msg["data"]
      ) {
        allTransactionArray = allTransactionDataJson["msg"].data;
      }

      let allTransactionData: AllTransaction[] = [];
      for (let i = 0; i < allTransactionArray.length; i++) {
        const symbol = allTransactionArray[i].coinsymbol;
        const price = await getCoinData(symbol);
        const sum = allTransactionArray[i].sum;
        allTransactionData.push(
          new AllTransaction(symbol, sum, Number(price[0]))
        );
      }

      dispatch({
        type: ActionTypes.SET_ALL_TRANSACTION,
        allTransactionData: allTransactionData,
      });
    } catch (err) {
      console.log("-----error-------", err);
      throw err;
    }
  };
};

export const fetchTypeTransactionData = (profileId: string, symbol: string) => {
  return async (dispatch: ThunkDispatch<AllTransactionState, void, Action>) => {
    try {
      const typesTransactionDataJson = await fetch(
        `${API.BASE_URL}/api/v1/transactions/types`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Origin": "*",
          },
          body: JSON.stringify({ profileid: profileId, coinsymbol: symbol }),
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          console.log("-----timeout-----", err);
        });

      let typesTransactionArray = [];
      if (
        typesTransactionDataJson.hasOwnProperty("msg") &&
        typesTransactionDataJson.msg["typesData"]
      ) {
        typesTransactionArray = typesTransactionDataJson["msg"].typesData;
      }

      let typesTransactionData: TypesTransaction[] = [];
      for (let i = 0; i < typesTransactionArray.length; i++) {
        const symbol = typesTransactionArray[i].coinsymbol;
        const price = await getCoinData(symbol);
        const sum = typesTransactionArray[i].sum;
        const types = typesTransactionArray[i].types;
        typesTransactionData.push(
          new TypesTransaction(symbol, types, sum, Number(price[0]))
        );
      }
      dispatch({
        type: ActionTypes.SET_TYPES_TRANSACTION,
        typesTransactionData: typesTransactionData,
      });
    } catch (err) {
      console.log("-----error-------", err);
      throw err;
    }
  };
};

export const fetchTransactionHistoryData = (profileId: string) => {
  return async (dispatch: ThunkDispatch<AllTransactionState, void, Action>) => {
    try {
      const transactionHistoryDataJson = await fetch(
        `${API.BASE_URL}/api/v1/transactions/all`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Origin": "*",
          },
          body: JSON.stringify({ profileid: profileId }),
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          console.log("-----timeout-----", err);
        });

      let transactionHistoryArray = [];
      if (
        transactionHistoryDataJson.hasOwnProperty("msg") &&
        transactionHistoryDataJson.msg["symbolTransactions"]
      ) {
        transactionHistoryArray =
          transactionHistoryDataJson["msg"].symbolTransactions;
      }

      let transactionHistoryData: TransactionHistory[] = [];
      for (let i = 0; i < transactionHistoryArray.length; i++) {
        const symbol = transactionHistoryArray[i].coinsymbol;
        const price = await getCoinData(symbol);
        const issent = transactionHistoryArray[i].issent;
        const balance = transactionHistoryArray[i].balance;
        const transactionid = transactionHistoryArray[i].transactionid;
        const date = transactionHistoryArray[i].exchangetime;
        const tos = transactionHistoryArray[i].tos;
        const froms = transactionHistoryArray[i].froms;
        const types = transactionHistoryArray[i].types;
        transactionHistoryData.push(
          new TransactionHistory(
            symbol,
            issent,
            balance,
            transactionid,
            date,
            tos,
            froms,
            types,
            Number(price[0])
          )
        );
      }
      dispatch({
        type: ActionTypes.SET_TRANSACTION_HISTORY,
        transactionHistoryData: transactionHistoryData,
      });
    } catch (err) {
      console.log("-----error-------", err);
      throw err;
    }
  };
};
