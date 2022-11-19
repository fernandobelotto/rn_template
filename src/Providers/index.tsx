import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import AppRoutes from "../Routes";
import store from "../store";

const AppProviders = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <AppRoutes />
      </NavigationContainer>
    </Provider>
  );
};

export default AppProviders;
