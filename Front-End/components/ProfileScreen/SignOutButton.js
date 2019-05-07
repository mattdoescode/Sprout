import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#00d35a",
    margin: 30,
    marginTop: 60,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white"
  }
});

export default ({ signOutFunction }) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={signOutFunction}>
    <Text style={styles.buttonText}>SIGN OUT</Text>
  </TouchableOpacity>
);
