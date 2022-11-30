import { View, Text, Button, TextInput } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import useReference from "../../hooks/useReference";
import { ModalContext } from "../../components/AppModal";
import AddIngredientsModal from "../../components/AppModal/Modals/AddIngredientModal";
import useList from "../../hooks/useList";
import listToArray from "../../helpers/listToArray";

export default function Recipe() {
  const appModal = useContext(ModalContext);

  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as any;
  const key = params.key;

  const [recipe, setRecipe] = useReference("recipes/" + key);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [directions, setDirections] = useState("");

  const ingredients = useList("recipes/" + key + "/ingredients");

  // console.log(ingredients.data);
  // const ingredientsList = listToArray(ingredients.data || {});
  // console.log(ingredientsList);
  const ingredientsList = Object.keys(ingredients.data || {});
  console.log(ingredientsList);

  useEffect(() => {
    if (recipe) {
      setName(recipe.name);
      setDescription(recipe.description);
      setDirections(recipe.directions);
    }
  }, [recipe]);

  const handleAddIngredient = () => {
    appModal.show(<AddIngredientsModal recipeKey={key} />);
  };

  const handleSave = () => {
    let updatedRecipe = {
      ...recipe,
      name,
      description,
      directions,
    };
    setRecipe!(updatedRecipe);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Recipe</Text>
      <TextInput value={name} onChangeText={setName} placeholder="name" />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="description"
      />
      <TextInput
        value={directions}
        onChangeText={setDirections}
        placeholder="directions"
      />
      <Button title="Add Ingredient" onPress={handleAddIngredient} />

      {ingredientsList.map((ingrendient) => (
        <Text>{ingrendient}</Text>
      ))}

      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
