import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  );
}
function FavScreen() {
  return (
    <View style={styles.container}>
      <Text>FAV</Text>
    </View>
  );
}

type RootTabScreens = {
  Home: undefined;
  Favorites: undefined;
};
const Tabs = createBottomTabNavigator<RootTabScreens>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tabs.Navigator>
          <Tabs.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: (props) => (
                <MaterialIcons
                  name="home"
                  size={props.size}
                  color={props.color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="Favorites"
            component={FavScreen}
            options={{
              tabBarIcon: (props) => (
                <MaterialIcons
                  name="favorite-outline"
                  size={props.size}
                  color={props.color}
                />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
