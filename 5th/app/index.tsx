import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const FirstPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the first page</Text>
      <Link style={styles.link} href={"/secondPage"}>
        Go to second page
      </Link>
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    fontSize: 20,
    backgroundColor: "chocolate",
    padding: 10,
    borderRadius: 10,
    color: "whitesmoke",
  },
});
