import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Picker
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const width = Math.round(Dimensions.get("window").width);

const MultipleSelect = ({ itemsSelect, label, setValue }) => (
  <RNPickerSelect
    style={pickerSelectStyles}
    placeholder={{ label, value: null }}
    onValueChange={value => setValue(value)}
    items={itemsSelect}
  />
);

export default MultipleSelect;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    width: 70,
    textAlign: "center"
  }
});
