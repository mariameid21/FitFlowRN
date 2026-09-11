import React from 'react';
import {Text} from 'react-native';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import AddWorkoutScreen from './screens/AddWorkoutScreen';
import WorkoutsScreen from './screens/WorkoutsScreen';

import {
  WorkoutProvider,
} from './context/WorkoutContext';

const Tab =
  createBottomTabNavigator();

function App() {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,

            tabBarActiveTintColor:
              '#6C5CE7',

            tabBarInactiveTintColor:
              '#999999',

            tabBarStyle: {
              height: 65,
              paddingBottom: 8,
              paddingTop: 8,
            },
          }}>

          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => (
                <Text>🏠</Text>
              ),
            }}
          />

          <Tab.Screen
            name="Add"
            component={AddWorkoutScreen}
            options={{
              tabBarLabel: 'Add Workout',
              tabBarIcon: () => (
                <Text>➕</Text>
              ),
            }}
          />

          <Tab.Screen
            name="Workouts"
            component={WorkoutsScreen}
            options={{
              tabBarLabel: 'Workouts',
              tabBarIcon: () => (
                <Text>🏋️</Text>
              ),
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </WorkoutProvider>
  );
}

export default App;

