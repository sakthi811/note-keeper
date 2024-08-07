import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NoteInput = ({ onAddNote, editNote }) => {

    const [title, setTitle] = useState('Test Title');
    const [content, setContent] = useState('Test Content');

    useEffect(() => {
      if(editNote) {
        setTitle(editNote.title);
        setContent(editNote.content);
      }
    }, [editNote]);

    const handleAddNote = () => {
        if(title.trim() && content.trim()) {
            onAddNote(title, content);
            setTitle('');
            setContent('');
        }
    }
    return(
    <View style={styles.inputContainer}>
        <TextInput 
            style={styles.input}
            placeHolder="Title"
            value={title}
            onChangeText={setTitle}
        />
        <TextInput 
            style={[styles.input, styles.contentInput]}
            placeHolder="Content"
            value={content}
            onChangeText={setContent}
            multiline
        />
        <Button 
            title={editNote ? "Update Note" : "Add Note"} 
            onPress={handleAddNote} />
    </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: 16,
      marginTop: 100,
    },
    input: {
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 8,
      padding: 8,
      marginBottom: 8,
      backgroundColor: '#fff',
    },
    contentInput: {
      height: 100,
      textAlignVertical: 'top',
    },
  });

export default NoteInput;