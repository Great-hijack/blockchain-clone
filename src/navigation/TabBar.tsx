import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
  FontAwesome5,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

import Colors from "../constants/Colors";

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const itemColor = isFocused
          ? Colors.primaryColor
          : Colors.accentColor_100;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName;
        let iconType;
        switch (route.name) {
          case "Prices":
            iconName = "chart-area";
            iconType = "FontAwesome5";
            break;
          case "Home":
            iconName = "home-filled";
            iconType = "MaterialIcons";
            break;
          case "BuySell":
            iconName = "cart";
            iconType = "Ionicons";
            break;
          case "Activity":
            iconName = "clock";
            iconType = "MaterialCommunityIcons";
            break;
          default:
            iconName = "home-filled";
            iconType = "MaterialIcons";
        }

        const animatedValue = new Animated.Value(1);

        const handlePressIn = () => {
          Animated.spring(animatedValue, {
            toValue: 0.98,
            useNativeDriver: true,
          }).start();
        };

        const handlePressOut = () => {
          Animated.spring(animatedValue, {
            toValue: 1,
            useNativeDriver: true,
          }).start();
        };

        const animatedStyle = {
          transform: [{ scale: animatedValue }],
        };

        return (
          <Animated.View
            style={[styles.tabBarItem, animatedStyle]}
            key={route.name}
          >
            <TouchableOpacity
              onPress={onPress}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
              <View style={{ alignItems: "center" }}>
                {iconType == "AntDesign" && (
                  <AntDesign
                    name={iconName as any}
                    color={itemColor}
                    size={22}
                  />
                )}
                {iconType == "MaterialCommunityIcons" && (
                  <MaterialCommunityIcons
                    name={iconName as any}
                    color={itemColor}
                    size={22}
                  />
                )}
                {iconType == "MaterialIcons" && (
                  <MaterialIcons
                    name={iconName as any}
                    color={itemColor}
                    size={22}
                  />
                )}
                {iconType == "FontAwesome5" && (
                  <FontAwesome5
                    name={iconName as any}
                    color={itemColor}
                    size={22}
                  />
                )}
                {iconType == "Entypo" && (
                  <Entypo name={iconName as any} color={itemColor} size={22} />
                )}
                {iconType == "Fontisto" && (
                  <Entypo name={iconName as any} color={itemColor} size={22} />
                )}
                {iconType == "Ionicons" && (
                  <Ionicons
                    name={iconName as any}
                    color={itemColor}
                    size={22}
                  />
                )}
                {iconType == "MaterialCommunityIcons" && (
                  <MaterialCommunityIcons
                    name={iconName as any}
                    color={itemColor}
                    size={22}
                  />
                )}
                <Text
                  style={[{ color: itemColor }, styles.tabBarText]}
                  selectable
                >
                  {route.name}
                </Text>
                <View style={isFocused && styles.selectedBar}></View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    height: 85,
    borderTopWidth: 1,
    justifyContent: "space-evenly",
    backgroundColor: Colors.secondaryColor,
  },
  tabBarItem: {
    width: 60,
    marginTop: 10,
  },
  tabBarText: {
    fontSize: 11,
    fontWeight: "normal",
  },
  actionsButton: {
    width: 42,
    height: 42,
    backgroundColor: "#0053f8",
    borderRadius: 21,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedBar: {
    height: 2,
    backgroundColor: Colors.primaryColor,
    width: "100%",
    marginTop: 2,
  },
});

export default TabBar;
