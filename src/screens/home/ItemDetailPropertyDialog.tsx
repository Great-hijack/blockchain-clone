import React, { FC } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import BuySelItem from "../../components/BuySelItem";
import DetailDialogItem from "./DetailDialogItem";
import { RootStackParamList } from "../../navigation";

type tabScreenProp = BottomTabNavigationProp<RootStackParamList, "Home">;

interface ItemDetailDialogPropertyProps {
  id: number;
  children: JSX.Element;
  onActivityClicked: () => void;
}

const ItemDetailPropertyDialog: FC<ItemDetailDialogPropertyProps> = ({
  id,
  children,
  onActivityClicked,
}) => {
  const onActivityHandle = () => {
    onActivityClicked();
  };
  const navigation = useNavigation<tabScreenProp>();

  return (
    <Modal
      isVisible={true}
      animationInTiming={900}
      hasBackdrop={true}
      backdropOpacity={0.4}
      style={styles.container}
    >
      <View style={styles.DetailDialogItemContainer}>
        <DetailDialogItem
          itemKey="Private Key Wallte"
          itemTitle="Bitcoin"
          itemBalance={0.0000064}
          itemSymbol="BTC"
          itemPrice={4444}
          id={id}
          children={children}
          onItemClick={(coinId: string) => {}}
        />
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        <BuySelItem title="Buy" content="Use your Card or Cash">
          <AntDesign name="plus" size={24} color="#FF911C" />
        </BuySelItem>
        <BuySelItem title="Sell" content="Conver Your Crypto to Cash">
          <AntDesign name="minus" size={24} color="#FF911C" />
        </BuySelItem>
        <BuySelItem title="Receive" content="Accept or Share Your BTC Address">
          <MaterialCommunityIcons
            name="arrow-bottom-left"
            size={24}
            color="#FF911C"
          />
        </BuySelItem>
        <BuySelItem title="Send" content="Transfer BTC to Any Wallet">
          <MaterialCommunityIcons
            name="arrow-top-right"
            size={24}
            color="#FF911C"
          />
        </BuySelItem>
        <BuySelItem title="Swap" content="Exchange BTC for Another Crypto">
          <MaterialCommunityIcons
            name="arrow-top-right-bottom-left"
            size={22}
            color="#FF911C"
          />
        </BuySelItem>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            onActivityHandle();
            navigation.navigate("Activity");
          }}
        >
          <BuySelItem title="Activity" content="View All Transactions">
            <MaterialCommunityIcons
              name="clock-time-four"
              size={28}
              color="#FF911C"
            />
          </BuySelItem>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    marginTop: 160,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    zIndex: 10,
    paddingBottom: 20,
  },
  DetailDialogItemContainer: {
    paddingTop: 8,
  },
  scrollViewContainer: {
    paddingTop: 8,
    paddingHorizontal: 20,
  },
});
export default ItemDetailPropertyDialog;
