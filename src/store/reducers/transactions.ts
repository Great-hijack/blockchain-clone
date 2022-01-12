import { AnyAction } from "redux";

import ActionTypes from "../types";
import AllTransaction from "../../model/AllTransaction";

export interface AllTransactionState {
  allTransactionData: AllTransaction[];
}

const initialState: AllTransactionState = {
  allTransactionData: [],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_ALL_TRANSACTION:
      return {
        ...state,
        allTransactionData: action.allTransactionData,
      };
    default:
      return state;
  }
};
