import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row space-x-4 items-center justify-center">
      <TextInput
        className="flex-1 text-white font-semibold text-base mt-0.5 font-pregular"
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#7b7b8b"}
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
        {...props}
      />
      <TouchableOpacity>
        <Image
          source={icons.search}
          className="w-5 h-5"
          resizeMethod="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
