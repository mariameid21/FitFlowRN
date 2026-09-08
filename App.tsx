import React, {useState} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import AddWorkoutScreen from './screens/AddWorkoutScreen';
import WorkoutsScreen from './screens/WorkoutsScreen';

export type Workout = {
  id: string;
  name: string;
  duration: string;
  calories: string;
  category: string;
};

const initialWorkouts: Workout[] = [
  {
    id: '1',
    name: 'Full Body Blast',
    duration: '30 min',
    calories: '250 kcal',
    category: 'Strength',
  },
  {
    id: '2',
    name: 'Upper Body',
    duration: '25 min',
    calories: '180 kcal',
    category: 'Strength',
  },
  {
    id: '3',
    name: 'HIIT Cardio',
    duration: '20 min',
    calories: '220 kcal',
    category: 'Cardio',
  },
  {
    id: '4',
    name: 'Morning Run',
    duration: '35 min',
    calories: '300 kcal',
    category: 'Cardio',
  },
  {
    id: '5',
    name: 'Yoga Flow',
    duration: '25 min',
    calories: '120 kcal',
    category: 'Flexibility',
  },
  {
    id: '6',
    name: 'Stretch & Relax',
    duration: '15 min',
    calories: '80 kcal',
    category: 'Flexibility',
  },
];

const Tab = createBottomTabNavigator();

function App() {
  const [workouts, setWorkouts] = useState<Workout[]>(initialWorkouts);

  const addWorkout = (workout: {
    name: string;
    duration: string;
    calories: string;
  }) => {
    const newWorkout: Workout = {
      id: Date.now().toString(),
      name: workout.name,
      duration: workout.duration,
      calories: workout.calories,
      category: 'Strength',
    };

    setWorkouts(previousWorkouts => [
      ...previousWorkouts,
      newWorkout,
    ]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#6C5CE7',
          tabBarInactiveTintColor: '#999999',
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
            tabBarIcon: () => <Text>🏠</Text>,
          }}
        />

        <Tab.Screen
          name="Add"
          options={{
            tabBarLabel: 'Add Workout',
            tabBarIcon: () => <Text>➕</Text>,
          }}>
          {props => (
            <AddWorkoutScreen
              {...props}
              onAddWorkout={addWorkout}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Workouts"
          options={{
            tabBarLabel: 'Workouts',
            tabBarIcon: () => <Text>🏋️</Text>,
          }}>
          {props => (
            <WorkoutsScreen
              {...props}
              workouts={workouts}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

