import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [num, setNumber] = useState(0);

    const handleNumber = () => {
        const newNumber = Math.floor(Math.random() * 100);
        setNumber(newNumber);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.containerText}>{num}</Text>
            <TouchableOpacity onPress={handleNumber} style={styles.buttons}>
                <Text style={styles.buttonsText}>Generate a number</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff7979',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    containerText: {
        fontSize: 30,
        color: '#f1f2f6',
        fontWeight: 'bold'
    },
    buttons: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#7ed6df',
        borderRadius: 5
    },
    buttonsText: {
        color: '#f1f2f6',
        fontSize: 18
    }
});

export default App;
