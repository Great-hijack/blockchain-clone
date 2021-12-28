import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
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
import { SvgXml } from "react-native-svg";

import Colors from "../constants/Colors";
import Images from "../constants/Images";

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const itemColor = isFocused
          ? Colors.primaryColor
          : Colors.accentColor_100;
        const isPlus = route.name == "Plus";

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

        const priceXml = (color: string) => `
<svg width="24px" height="24px" viewBox="0 0 255 255" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
<desc>Created with Lunacy</desc>
<g id="Group" transform="translate(4 4)">
  <path d="M0 0L197 0L197 197L0 197L0 0Z" id="Rectangle" fill=${color} stroke="none" />
  <path d="M63 0L0 112" transform="translate(115 25)" id="Line" fill="none" stroke="#FFFFFF" stroke-width="8" />
  <path d="M52 30L0 0" transform="translate(68 106)" id="Line-2" fill="none" stroke="#FFFFFF" stroke-width="8" />
  <path d="M34 0L0 54" transform="translate(39 105)" id="Line-3" fill="none" stroke="#FFFFFF" stroke-width="8" />
</g>
</svg>
`;

        let iconName;
        let iconType;
        switch (route.name) {
          case "Prices":
            iconName = "prices";
            iconType = "SVG";
            break;
          case "Home":
            iconName = "home-filled";
            iconType = "MaterialIcons";
            break;
          case "Buy & Sell":
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
              {isPlus ? (
                <View style={styles.actionsButton}>
                  <Image
                    source={Images.PlusImg}
                    style={{ width: 48, height: 48 }}
                  />
                </View>
              ) : (
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
                    <Entypo
                      name={iconName as any}
                      color={itemColor}
                      size={22}
                    />
                  )}
                  {iconType == "Fontisto" && (
                    <Entypo
                      name={iconName as any}
                      color={itemColor}
                      size={22}
                    />
                  )}
                  {iconType == "Ionicons" && (
                    <Ionicons
                      name={iconName as any}
                      color={itemColor}
                      size={22}
                    />
                  )}
                  {iconType == "SVG" && (
                    <SvgXml xml={priceXml(itemColor)} width={22} height={22} />
                  )}

                  <Text
                    style={[{ color: itemColor }, styles.tabBarText]}
                    selectable
                  >
                    {route.name}
                  </Text>
                </View>
              )}
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
    height: 70,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.accentColor_100,
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
    width: 48,
    height: 48,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -8,
  },
});

export default TabBar;
