import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useWorkout} from '../context/WorkoutContext';

function AddWorkoutScreen() {
  const {addWorkout} = useWorkout();

  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = async () => {
    if (
      !name.trim() ||
      !duration.trim() ||
      !calories.trim()
    ) {
      Alert.alert(
        'Missing Data',
        'Please fill in all fields.',
      );
      return;
    }

    try {
      await addWorkout({
        name: name.trim(),
        duration: duration.trim(),
        calories: calories.trim(),
      });

      Alert.alert(
        'Success',
        'Workout added successfully!',
      );

      setName('');
      setDuration('');
      setCalories('');
    } catch (error) {
      Alert.alert(
        'Error',
        'Could not add workout.',
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : undefined
      }>

      <Text style={styles.title}>
        Add New Workout
      </Text>

      <Text style={styles.subtitle}>
        Create your own workout and track it with FitFlow.
      </Text>

      <Text style={styles.label}>
        Workout Name
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Morning Run"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>
        Duration
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. 30 min"
        value={duration}
        onChangeText={setDuration}
      />

      <Text style={styles.label}>
        Calories
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. 250 kcal"
        value={calories}
        onChangeText={setCalories}
      />

      <Pressable
        style={styles.button}
        onPress={handleSubmit}>

        <Text style={styles.buttonText}>
          Add Workout
        </Text>

      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    padding: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#202124',
    marginTop: 30,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#777777',
    lineHeight: 22,
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0DFF0',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default AddWorkoutScreen;

