import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import Button from "../components/Button";

import { withNavigation } from "react-navigation";

let Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title text="Home" />
      <Button text="Rules" onPress={() => navigation.navigate("Rules")} />
      <Button text="Game" onPress={() => navigation.navigate("Settings")} />
    </View>
  );
};

export default withNavigation(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
