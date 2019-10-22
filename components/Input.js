import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  TextInput
} from "react-native";

const width = Math.round(Dimensions.get("window").width);

const Input = ({ setValue, width, disable = true }) => {
  return (
    <TextInput
      style={[
        disable ? InputStyles.enable : InputStyles.disable,
        { width },
        InputStyles.input
      ]}
      onChangeText={text => setValue(text)}
      editable={disable}
      selectTextOnFocus={disable}
    />
  );
};

export default Input;

const InputStyles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: "#fff"
  },
  disable: {
    borderColor: "#C3C3C3"
  },
  enable: {
    borderColor: "gray"
  }
});
