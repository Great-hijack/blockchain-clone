import { AnyAction } from "redux";

import ActionTypes from "../types";
import AllTransaction from "../../model/AllTransaction";
import TypesTransaction from "../../model/TypesTransaction";
import TransactionHistory from "../../model/TransactionHistory";

export interface AllTransactionState {
  allTransactionData: AllTransaction[];
  typesTransactionData: TypesTransaction[];
  transactionHistoryData: TransactionHistory[];
}

const initialState: AllTransactionState = {
  allTransactionData: [],
  typesTransactionData: [],
  transactionHistoryData: [],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_ALL_TRANSACTION:
      return {
        ...state,
        allTransactionData: action.allTransactionData,
      };

    case ActionTypes.SET_TYPES_TRANSACTION:
      return {
        ...state,
        typesTransactionData: action.typesTransactionData,
      };

    case ActionTypes.SET_TRANSACTION_HISTORY:
      return {
        ...state,
        transactionHistoryData: action.transactionHistoryData,
      };
    default:
      return state;
  }
};
