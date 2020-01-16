import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

const NoteInput = ({ onSetNotes }) => {
  const [enteredNote, setEnteredNote] = useState("");

  const noteInputHandler = (text) => {
    setEnteredNote(text);
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.inputContent}
        placeholder="enter your note"
        onChangeText={noteInputHandler}
        value={enteredNote}
      />

      <Button title="Add" onPress={onSetNotes.bind(this, enteredNote)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContent: {
    borderWidth: 2,
    borderColor: "#de444e",
    padding: 5,
    borderRadius: 2,
    width: "100%"
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default NoteInput;
