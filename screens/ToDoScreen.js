import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// You can import from local files

// or any pure javascript modules available in npm
import ToDoCard from '../components/ToDoCard';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firestore from '../Firestore';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App({navigation}) {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    async function CheckLogin() {
      let collRef = firestore.collection('activity');

      // console.log(collRef);

      collRef.get().then((querySnap) => {
        const tempDoc = querySnap.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setActivity(tempDoc);
        console.log(tempDoc);
      });
    }

    CheckLogin();
  }, []);

  async function RemoveProduct(id) {
    let collRef = firestore
      .collection('activity')
      .doc(id)

    // console.log(collRef);
    await collRef.delete();
    alert('ลบแล้ว');
    navigation.reset({ index: 0, routes: [{ name: 'ToDoScreen' }] });
  }
  return (
    <ScrollView style={{backgroundColor:'red'}}>
      <View >
        {activity.map((item) => (
          <TouchableOpacity 
            key={item.id}
            onPress={() => RemoveProduct(item.id)}>
            <ToDoCard name={item.name} time={item.time} place={item.place} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
