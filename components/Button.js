import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const width = Math.round(Dimensions.get("window").width);

const Button = ({ text, onPress, goTo, widthButton, padding, marginTop }) => (
  <TouchableOpacity
    style={[
      styles.button,
      width ? { width: widthButton } : { width: width - 70 },
      padding ? { padding } : { padding: 20 },
      marginTop ? { marginTop } : null,

      goTo ? styles.enableBtn : styles.disableBtn
    ]}
    onPress={onPress}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    //marginTop: 40
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
