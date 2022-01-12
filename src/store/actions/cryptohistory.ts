import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { CryptoHistoryState } from "../reducers/cryptohistory";

type Props = {
  coins: String[];
};

export const fetchCryptoHistoryData = ({ coins }: Props) => {
  return async (dispatch: ThunkDispatch<CryptoHistoryState, void, Action>) => {
    try {
    } catch (err) {}
  };
};
