import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";

export default function Button(props: any) {
  const { titles = ["Button 1", "Button 2"] } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Button styling: soal no 3</Text>
      <View style={styles.buttonContainer}>
        {titles.map((title: any, index: any) => (
          <Pressable
            key={index}
            style={[
              styles.button,
              index % 2 === 0 ? styles.blueButton : styles.greenButton,
            ]}
            onPress={() => null}
          >
            <Text style={styles.textButton}>{title}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginVertical: 10,
  },
  blueButton: {
    backgroundColor: "blue",
  },
  greenButton: {
    backgroundColor: "green",
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
