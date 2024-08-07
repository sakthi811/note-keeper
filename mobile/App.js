import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, Alert} from 'react-native';
import Header from "./components/Header";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Note from "./components/Note";
import NoteInput from "./components/NoteInput";

export default function App() {

  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  useEffect(() => {
    //AsyncStorage.clear();
    loadNotes();
  },[]);

  useEffect(() => {
    saveNotes();
  },[notes]);

  const loadNotes = async () => {
    try {
      const notesData = await AsyncStorage.getItem('notes');
      if(notesData) {
        setNotes(JSON.parse(notesData));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveNotes = async () => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify('notes'));
    } catch (error) {
      console.error(error);
    }
  };

  const addNote = (title, content) => {
    if(editNote) {
      setNotes(prevNotes => {
        if(!Array.isArray(prevNotes)) return [];
        return prevNotes.map(note => 
          note.id === editNote.id ? {...note, title, content} : note
        )
        });
      setEditNote(null);
    } else {
      setNotes(prevNotes => {
        if (!Array.isArray(prevNotes)) return [];
        return [
          ...prevNotes,
          { id: Date.now().toString(), title, content }
        ];
      } );
    }
  };

  const editNoteHandler = (id) => {
    const noteToEdit = notes.find(note => note.id === id);
    if(noteToEdit) {
      setEditNote(noteToEdit);
    }
  };

  const deleteNote = (id) => {
    Alert.alert(
      'Delete Note',
      'Are you sure you want to delete this note?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            setNotes(prevNotes => {
              if(!Array.isArray(prevNotes)) return [];
              return prevNotes.filter(note => note.id !== id)
            });
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    <Header />
      <NoteInput style={styles.noteInputField} onAddNote={addNote} onEditNode={editNote} />
      {notes.length === 0 ? (
          <Text style={StyleSheet.noNotesText}>No Notes yet!</Text>
      ) : ( 
      <FlatList 
      data={notes}
      renderItem={({ item }) => (
        <Note 
          title={item.title} 
          content={item.content}
          onEdit={() => editNoteHandler(item.id)}
          onDelete={()=> deleteNote(item.id)}
        />
        
      )}
      keyExtractor={item => item.id} 
      numColumns={2}
      contentContainerStyle={styles.notesContainer}
      />)}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8'
  },
  notesContainer: {
    paddingVertical: 16,
  },
  noNotesText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});
