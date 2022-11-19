import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppLayout from "../../components/Layout";

type Props = {
  navigation: any;
};

const AppHomeScreen = (props: Props) => {
  return (
    <AppLayout>
      <Text style={{ fontSize: 26, textAlign: "center" }}>Home Screen</Text>
      <Button
        title="Go to Detail Screen"
        onPress={() => props.navigation.navigate("AppDetailScreen")}
      />
    </AppLayout>
  );
};

export default AppHomeScreen;

const styles = StyleSheet.create({});
