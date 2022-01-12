import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AllTransactionState } from "../reducers/transactions";
import AllTransaction from "../../model/AllTransaction";
import ActionTypes from "../types";
import { API } from "../../api/urls";

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

      if (allTransactionDataJson) {
      }
      const allTransactionData: AllTransaction[] = allTransactionDataJson
        ? allTransactionDataJson.msg.data.map(
            (item: { symbol: string; sum: number }) =>
              new AllTransaction(item.symbol, item.sum)
          )
        : [];

      dispatch({
        type: ActionTypes.SET_ALL_TRANSACTION,
        allTransactionData: allTransactionData,
      });
      return { success: 1 };
    } catch (err) {
      console.log("-----error-------", err);
      throw err;
    }
  };
};
