import { AnyAction } from "redux";

import ActionTypes from "../types";

export interface CryptoHistoryState {
  graphData: Array<Number[]>;
}

const initialState: CryptoHistoryState = {
  graphData: [],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_CRTYPTO_HISTORY:
      return {
        graphData: action.graphData,
      };
  }
  return state;
};
