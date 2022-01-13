import { AnyAction } from "redux";

import ActionTypes from "../types";
import AllTransaction from "../../model/AllTransaction";
import TypesTransaction from "../../model/TypesTransaction";

export interface AllTransactionState {
  allTransactionData: AllTransaction[];
  typesTransactionData: TypesTransaction[];
}

const initialState: AllTransactionState = {
  allTransactionData: [],
  typesTransactionData: [],
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
    default:
      return state;
  }
};
