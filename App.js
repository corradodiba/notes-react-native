import React, { useState } from "react";
import { View, StyleSheet, ScrollView, FlatList, Button } from "react-native";

import NoteItem from "./components/NoteItem";
import NoteInput from "./components/NoteInput";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [isAddNote, setIsAddNote] = useState(false);

  const setNoteHandler = (noteText) => {
    setNotes((currentNotes) => [...currentNotes, noteText]);
  };

  const onDeleteNoteHandler = (noteIndex) => {
    setNotes((currentNotes) => {
      return currentNotes.filter((_, index) => index !== noteIndex);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Add new note" onPress={() => setIsAddNote(true)} />
      <NoteInput visibility={isAddNote} onSetNotes={setNoteHandler} />
      {/* <ScrollView style={styles.listWrapper}>
        {notes.map((note, index) => (
          <View key={`${index}-${note}`} style={styles.listItem}>
            <Text>{note}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        keyExtractor={(note, index) => `${note}-${index}`}
        data={notes}
        renderItem={(noteItem) => (
          <NoteItem
            title={noteItem.item}
            indexItem={noteItem.index}
            onDeleteItem={onDeleteNoteHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
