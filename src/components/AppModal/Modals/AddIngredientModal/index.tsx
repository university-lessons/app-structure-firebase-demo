import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { ModalContext } from "../..";
import useList from "../../../../hooks/useList";

interface AddIngredientsModalProps {
  recipeKey: string;
}

export default function AddIngredientsModal({
  recipeKey,
}: AddIngredientsModalProps) {
  const appModal = useContext(ModalContext);

  const ingredients = useList("recipes/" + recipeKey + "/ingredients");

  const handleAdd = () => {
    ingredients.create("Ingr:" + Math.random());
  };

  const handleOk = () => {
    appModal.hide();
  };

  return (
    <View>
      <Text>AddIngredientsModal {recipeKey}</Text>

      <Button title="ADD RANDOM INGREDIENT" onPress={handleAdd} />
      <Button title="OK" onPress={handleOk} />
    </View>
  );
}
