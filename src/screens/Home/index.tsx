import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate("Recipe")} title="Test" />
    </View>
  );
}
