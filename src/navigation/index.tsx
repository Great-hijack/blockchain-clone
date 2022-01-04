import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";

import Activity from "../screens/activity";
import Home from "../screens/home";
import Request from "../screens/request";
import TabBar from "./TabBar";
import Prices from "../screens/prices";
import BuySell from "../screens/buy_sell";

const TabBarNavigator = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabBarNavigator.Navigator
      initialRouteName="Home"
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <TabBarNavigator.Screen name="Home" component={Home} />
      <TabBarNavigator.Screen name="Prices" component={Prices} />
      <TabBarNavigator.Screen name="Plus" component={Request} />
      <TabBarNavigator.Screen name="Buy & Sell" component={BuySell} />
      <TabBarNavigator.Screen name="Activity" component={Activity} />
    </TabBarNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </>
  );
};
export default AppNavigator;
