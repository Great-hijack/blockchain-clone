import { AnyAction } from "redux";
import User from "../../model/User";

import ActionTypes from "../types";

export interface UserState {
  userData: User;
}

const initialState: UserState = {
  userData: { profileId: "", pinCode: "" },
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_USER_INFO:
      return {
        userData: action.userData,
      };
  }
  return state;
};
