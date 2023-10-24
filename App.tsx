import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/screens/Home/Home";
import Routes from "./src/routes";
import AppContext from "./src/context";
import { useState } from "react";

export default function App() {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <>
      <AppContext.Provider value={{clicked, setClicked}}>
        <Routes />
      </AppContext.Provider>
    </>
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
