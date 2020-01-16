import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button, Modal } from "react-native";

const NoteInput = ({ onSetNotes, visibility, onCancel }) => {
  const [enteredNote, setEnteredNote] = useState("");

  const noteInputHandler = (text) => {
    setEnteredNote(text);
  };

  const addButtonHandler = () => {
    onSetNotes(enteredNote);
    setEnteredNote("");
  };

  const cancelButtonHandler = () => {
    onCancel(false);
  };

  return (
    <Modal animationType="fade" visible={visibility}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.inputContent}
          placeholder="enter your note"
          onChangeText={noteInputHandler}
          value={enteredNote}
        />

        <View style={styles.buttonsWrapper}>
          <View style={styles.button}>
            <Button title="Add" onPress={addButtonHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelButtonHandler} color="red" />
          </View>
        </View>
      </View>
    </Modal>
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
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    padding: "2%"
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    height: "10%"
  },
  button: {
    width: "40%",
    padding: "2%"
  }
});

export default NoteInput;
