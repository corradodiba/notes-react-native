import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const NoteItem = ({ title, onDeleteItem, indexItem }) => {
  return (
    <TouchableHighlight
      underlayColor="#a40f0f"
      onPress={onDeleteItem.bind(this, indexItem)}
    >
      <View style={styles.listWrapper}>
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: "#dedede",
    padding: "4%"
  }
});

export default NoteItem;
