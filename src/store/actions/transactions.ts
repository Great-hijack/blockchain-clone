import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AllTransactionState } from "../reducers/transactions";
import AllTransaction from "../../model/AllTransaction";
import ActionTypes from "../types";
import { API } from "../../api/urls";
import { getCoinData } from "../../utils/utils";

export const fetchAllTransactionData = (userId: string) => {
  return async (dispatch: ThunkDispatch<AllTransactionState, void, Action>) => {
    try {
      const allTransactionDataJson = await fetch(
        `${API.BASE_URL}/api/v1/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Origin": "*",
          },
          body: JSON.stringify({ userid: userId }),
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
        const symbol = allTransactionArray[i].symbol;
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
