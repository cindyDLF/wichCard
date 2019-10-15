import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";

//import lib
import CardFlip from "react-native-card-flip";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Card = ({ cardContent }) => {
  const [card, setCard] = useState();

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.card}>{cardContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width - 280,
    height: width - 260,
    borderWidth: 1,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderColor: "#D3D3D3",
    backgroundColor: "#fff",
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Card;
