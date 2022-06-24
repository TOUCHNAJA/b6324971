import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddScreen from './screens/AddScreen';
import ToDoScreen from './screens/ToDoScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ToDoScreen" component={ToDoScreen} options={{
            tabBarLabel: 'ToDo',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="checkmark" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="AddScreen"
          component={AddScreen}
          options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


