import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";

interface WeekItemProps {
  title: string;
  isSelected?: boolean;
  onClicked: (title: string) => void;
}

const WeekItem: FC<WeekItemProps> = ({
  title,
  isSelected = false,
  onClicked,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.itemContainer,
        isSelected ? styles.itemSelectedContainer : {},
      ]}
      onPress={() => {
        onClicked(title);
      }}
    >
      <Text
        style={isSelected ? styles.itemSelectedTxtTitle : styles.itemTxtTitle}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

interface WeekProps {
  onClicked: (title: string) => void;
}

const WeekSegmentItem: FC<WeekProps> = ({ onClicked }) => {
  const [segment, setSegment] = useState(0);

  const onSegment = (title: string) => {
    switch (title) {
      case "Day":
        setSegment(0);
        onClicked("Day");
        break;
      case "Week":
        setSegment(1);
        onClicked("Week");
        break;
      case "Month":
        setSegment(2);
        onClicked("Month");
        break;
      case "Year":
        setSegment(3);
        onClicked("Year");
        break;
      case "All":
        setSegment(4);
        onClicked("All");
        break;
      default:
        setSegment(0);
        onClicked("Day");
        break;
    }
  };

  return (
    <View style={styles.container}>
      <WeekItem
        title={"Day"}
        onClicked={(title: string) => {
          onSegment(title);
        }}
        isSelected={segment === 0}
      />
      <View
        style={segment === 0 || segment === 1 ? {} : styles.borderContainer}
      ></View>
      <WeekItem
        title={"Week"}
        isSelected={segment === 1}
        onClicked={(title: string) => {
          onSegment(title);
        }}
      />
      <View
        style={segment === 1 || segment === 2 ? {} : styles.borderContainer}
      ></View>
      <WeekItem
        title={"Month"}
        isSelected={segment === 2}
        onClicked={(title: string) => {
          onSegment(title);
        }}
      />
      <View
        style={segment === 2 || segment === 3 ? {} : styles.borderContainer}
      ></View>
      <WeekItem
        title={"Year"}
        isSelected={segment === 3}
        onClicked={(title: string) => {
          onSegment(title);
        }}
      />
      <View
        style={segment === 3 || segment === 4 ? {} : styles.borderContainer}
      ></View>
      <WeekItem
        title={"All"}
        isSelected={segment === 4}
        onClicked={(title: string) => {
          onSegment(title);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    width: "20%",
    alignItems: "center",
  },
  itemSelectedContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "red",
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 1.0,
    shadowRadius: 3,
  },

  itemTxtTitle: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: Colors.accentColor_100,
  },
  itemSelectedTxtTitle: {
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    color: Colors.accentColor,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#EEEBEE",
    borderRadius: 8,
    padding: 2,
    width: "100%",
    justifyContent: "space-around",
  },
  borderContainer: {
    height: "80%",
    alignSelf: "center",
    width: StyleSheet.hairlineWidth,
    backgroundColor: "grey",
  },
});
export default WeekSegmentItem;
