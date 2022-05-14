import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  StyleSheet
} from "react-native";

import { FriendList } from "../components/FriendList";

import { theme } from "../styles/theme";

export function Home() {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);

  async function handleSearch() {
    const response = await fetch(`http://192.168.0.121:3333/friends?q=${name}`);
    const data = await response.json();

    setFriends(data);
  }

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

      <ScrollView style={styles.list}>
        <FriendList data={friends} />
      </ScrollView>
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
    fontWeight: "bold",
    fontSize: 24
  },
  input: {
    borderWidth: 1,
    padding: 7,
    color: theme.colors.text,
    marginVertical: 10
  },
  list: {
    marginTop: 20
  }
});
