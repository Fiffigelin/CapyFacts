import { StyleSheet, Button, View } from "react-native";

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Button title="A fav" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
