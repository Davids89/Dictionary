/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

class Dictionary extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>

                <TextInput/>

                <Text style = { styles.englishLabel}>
                    Traducción aquí
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    englishLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },

    // For the Text meaning
    englishWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    }
});

AppRegistry.registerComponent('Dictionary', () => Dictionary);
