import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import firebaseConfig from "./src/config/firebaseConfig";
import useFirebase from "./src/hooks/useFirebase";
import Router from "./src/Router";
import Login from "./src/screens/Login";

export default function App() {
  const firebaseApp = useFirebase(firebaseConfig);

  if (firebaseApp == null) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Router />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
