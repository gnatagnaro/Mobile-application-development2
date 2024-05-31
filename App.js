import 'react-native-gesture-handler';
import React, { createContext, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./src/navigation/tab";
import Login from "./src/screens/Login";

export const AccountContext = createContext({
  account: null,
  setAccount: () => {}
});

export default function App() {
  const [account, setAccount] = useState(null);

  return (
    <NavigationContainer>
      <AccountContext.Provider value={{ account, setAccount }}>
        {account ? <TabBar /> : <Login />}
        <StatusBar />
      </AccountContext.Provider>
    </NavigationContainer>
  );
}
