import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { IMAGES } from "../constant";
import Searchbar from "../components/Searchbar";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={IMAGES.bg} className="absolute w-full z-0" />
      <ScrollView className="flex-5 px-5" showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}>
        <Image source={IMAGES.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        <View className="flex-1 mt-5">
        <Searchbar />

        </View>
      </ScrollView>

    </View>
  );
}
