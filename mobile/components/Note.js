import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Note = ({title, content, onEdit, onDelete}) => {
  return (
    <View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{content}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onEdit}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onDelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      margin: 8,
      borderRadius: 8,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5, // For Android shadow
      overflow: 'hidden',
      padding: 16,
      marginTop : 50
    },
    cardContent: {
      padding: 16,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      color: '#666',
      marginTop: 8,
    },
    buttonContainer:{
      flexDirection: 'row',
      marginTop: 8,
    },
    button:{
      marginRight: 8,
      padding: 8,
      backgroundColor: '#f5ba13',
      borderRadius: 4,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    }
  });

export default Note;