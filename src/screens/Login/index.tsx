import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleLogin = () => {
    login(username, password).catch((error) => {
      Alert.alert("Error", "Login failed!");
    });
  };

  return (
    <View style={styles.container}>
      <Text>Login with Username and Password</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="username"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="password"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
