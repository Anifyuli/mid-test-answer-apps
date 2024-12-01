import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SecondPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the second page</Text>
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
