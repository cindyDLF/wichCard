import React from "react";
import { Text } from "react-native";

let Game = ({ navigation }) => {
  console.log(navigation.getParam("nbCard"));

  console.log(navigation.getParam("nbUnkown"));

  console.log(navigation.getParam("players"));

  return <Text>Game</Text>;
};

export default Game;
