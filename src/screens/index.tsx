import React from "react";

import { useSelector } from "react-redux";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";

import { UserState } from "../store/reducers/user";
import Login from "./auth";
import Pin from "./pin";

interface RootState {
  user: UserState;
}

const Index = () => {
  const [loaded] = useFonts({
    "Roboto-Medium": Asset.fromModule(
      require("../../assets/fonts/Roboto-Medium.ttf")
    ),
  });

  const userData = useSelector((state: RootState) => state.user.userData);

  if (!loaded) {
    return null;
  }
  return <>{userData.profileId === "" || undefined ? <Login /> : <Pin />}</>;
};

export default Index;
