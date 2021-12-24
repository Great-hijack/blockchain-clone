import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Activity from "../screens/activity";
import Swap from "../screens/swap";
import Home from "../screens/home";
import Send from "../screens/send";
import Request from "../screens/request";
import TabBar from "./TabBar";

const TabBarNavigator = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabBarNavigator.Navigator
      initialRouteName="Home"
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <TabBarNavigator.Screen name="Activity" component={Activity} />
      <TabBarNavigator.Screen name="Swap" component={Swap} />
      <TabBarNavigator.Screen name="Home" component={Home} />
      <TabBarNavigator.Screen name="Send" component={Send} />
      <TabBarNavigator.Screen name="Request" component={Request} />
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
