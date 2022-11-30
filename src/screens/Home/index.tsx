import { View, Text, Button, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useList from "../../hooks/useList";
import listToArray from "../../helpers/listToArray";
import RecipeShape from "../../types/RecipeShape";

export default function Home() {
  const navigation = useNavigation();
  const recipes = useList("recipes");
  const recipesList = listToArray(recipes.data || {});

  console.log(recipesList);

  const handleCreateRecipe = async () => {
    const newRecipe: RecipeShape = {
      name: "",
      description: "",
      directions: "",
    };

    const createdKey = await recipes.create(newRecipe);

    navigation.navigate("Recipe", { key: createdKey });
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={handleCreateRecipe} title="Create Recipe" />
      <FlatList
        data={recipesList}
        renderItem={(item) => <Text>{JSON.stringify(item)}</Text>}
      />
    </View>
  );
}
