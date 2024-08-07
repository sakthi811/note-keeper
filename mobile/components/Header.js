import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Keeper</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer : {
        backgroundColor: '#f5ba13',
        marginHorizontal: -16,
        paddingVertical: 16,
        paddingHorizontal: 32,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    headerText: {
        color: '#fff',
        fontFamily: 'McLaren_400Regular',
        fontWeight: '200',
        fontSize: 24,
      },
})