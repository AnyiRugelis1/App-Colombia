import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

const DecorateTextField = ({ placeholder, value, setValue }) => {
  return (
    <TextInput
      style={styles.decorate_texfield.inputs}
      placeholder={placeholder}
      placeholderTextColor={"#C4C4C4"}
      value={value}
      onChangeText={(text) => {
        setValue(text);
      }}
    />
  );
};

export default DecorateTextField;
