import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import {
  AntDesign,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

import BuySelItem from "../../components/BuySelItem";
import Colors from "../../constants/Colors";
import DetailDialogItem from "./DetailDialogItem";

interface ItemDetailDialogPropertyProps {
  isVisible: boolean;
  id: number;
}

const ItemDetailPropertyDialog: FC<ItemDetailDialogPropertyProps> = ({
  isVisible = false,
  id,
}) => {
  return (
    <Modal
      isVisible={isVisible}
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

        <TouchableOpacity activeOpacity={0.7}>
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
