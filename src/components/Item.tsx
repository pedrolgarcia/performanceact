import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  data: {
    name: string;
    likes: number;
  };
}

export function Item() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {}
});
