import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import useReference from "../../hooks/useReference";

export default function Recipe() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as any;
  const key = params.key;

  const [recipe, setRecipe] = useReference("recipes/" + key);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [directions, setDirections] = useState("");

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
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
