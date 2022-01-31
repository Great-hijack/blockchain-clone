import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AllTransactionState } from "../reducers/transactions";
import ActionTypes from "../types";
import User from "../../model/User";

export const saveProfileId = (profileId: string) => {
  return async (dispatch: ThunkDispatch<AllTransactionState, void, Action>) => {
    try {
      const userData: User = { profileId: profileId, pinCode: "" };

      dispatch({
        type: ActionTypes.SET_USER_INFO,
        userData: userData,
      });
    } catch (err) {
      console.log("-----error-------", err);
      throw err;
    }
  };
};
