import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { theme } from "../styles/theme";

export function Home() {
  const [name, setName] = useState("");

  function handleSearch() {}

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Amigos</Text>
      <TextInput
        placeholder="Nome"
        onChangeText={setName}
        style={styles.input}
      />
      <Button
        title="Buscar"
        onPress={handleSearch}
        color={theme.colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    padding: 25,
    backgroundColor: theme.colors.background
  },
  text: {
    color: theme.colors.text,
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginBottom: 10,
    color: theme.colors.text
  }
});
