import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const width = Math.round(Dimensions.get("window").width);

const Button = ({ text, onPress, goTo }) => (
  <TouchableOpacity
    style={[styles.button, goTo ? styles.enableBtn : styles.disableBtn]}
    onPress={onPress}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    width: width - 70,
    marginTop: 40
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  enableBtn: {
    backgroundColor: "#1BA8F0"
  },
  disableBtn: {
    backgroundColor: "#C3C3C3"
  }
});
