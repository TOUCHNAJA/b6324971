import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firestore from '../Firestore';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App({ navigation }) {

    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [place, setPlace] = useState('');

    async function Add() {
        let collRef = firestore.collection('activity')


        if (name != "" && time != "" && place != "") {
            collRef.add({
                name: name,
                time: time,
                place: place
            }).then(() => {
                alert("Success");
                navigation.reset({ index: 0, routes: [{ name: 'ToDoScreen' }] });
                console.log(collRef.add);
            })
        }
        else {
            alert("กรุณากรอกข้อมูลให้ครบ");
        }

    }

    return (

        <View style={{
            height: 100,
            padding: 20,
            backgroundColor: '#2A2A2A',
            flex: 1,

        }}>
            <Text style={styles.title}>TODOLIST</Text>
            <TextInput style={styles.input} placeholder="ToDo Name" onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Time" onChangeText={setTime} />
            <TextInput style={styles.input} placeholder="Place" onChangeText={setPlace} />
            <Pressable style={styles.button} onPress={() => Add()}>
                <Text style={styles.textadd}>ADD</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {

        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        height: 50,
        margin: 25,
        backgroundColor: 'white',

    },
    input: {

        height: 35,
        borderColor: 'white',
        borderWidth: 4,
        padding: 10,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 60,
        marginRight: 60,
        borderRadius: 5,
        backgroundColor: '#DCDCDC',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginLeft: 60,
        marginRight: 60,
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 3,
    },
    textadd: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
