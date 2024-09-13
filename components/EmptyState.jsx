import { StyleSheet, Image, View, Text } from "react-native";
import { router } from "expo-router";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="flex justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[200px]"
        resizeMode="contain"
      />
      <Text className="text-xl text-white text-center font-psemibold mt-2">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

      <CustomButton
        title="Create Video"
        handlePress={() => router.push("/create")}
        containerStyles={"w-full my-5"}
      />
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({});
