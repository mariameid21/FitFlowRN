import React, {
  useEffect,
  useState,
} from 'react';

import {
  View,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';

import WorkoutCard from '../components/WorkoutCard';
import {useWorkout} from '../context/WorkoutContext';

function WorkoutsScreen() {
  const {
    workouts,
    apiWorkouts,
    updateWorkout,
    deleteWorkout,
  } = useWorkout();

  const [sections, setSections] = useState<
    {
      title: string;
      data: typeof workouts;
    }[]
  >([]);

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [editingName, setEditingName] =
    useState('');

  useEffect(() => {
    const categories = [
      'Strength',
      'Cardio',
      'Flexibility',
    ];

    const groupedSections = categories
      .map(category => ({
        title: category,
        data: workouts.filter(
          workout =>
            workout.category === category,
        ),
      }))
      .filter(
        section => section.data.length > 0,
      );

    setSections(groupedSections);
  }, [workouts]);

  const handleEdit = (
    id: string,
    currentName: string,
  ) => {
    setEditingId(id);
    setEditingName(currentName);
  };

  const handleUpdate = async (id: string) => {
    if (!editingName.trim()) {
      Alert.alert(
        'Missing Data',
        'Please enter a workout name.',
      );
      return;
    }

    try {
      await updateWorkout(
        id,
        editingName.trim(),
      );

      setEditingId(null);
      setEditingName('');

      Alert.alert(
        'Success',
        'Workout updated successfully!',
      );
    } catch (error) {
      Alert.alert(
        'Error',
        'Could not update workout.',
      );
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteWorkout(id);

      Alert.alert(
        'Success',
        'Workout deleted successfully!',
      );
    } catch (error) {
      Alert.alert(
        'Error',
        'Could not delete workout.',
      );
    }
  };

  const renderWorkout = ({
    item,
  }: {
    item: typeof workouts[number];
  }) => (
    <WorkoutCard
      name={item.name}
      category={item.category}
      duration={item.duration}
      calories={item.calories}
      showButtons={false}>

      <Text style={styles.quickInfo}>
        Quick workout
      </Text>

    </WorkoutCard>
  );

  const renderSectionItem = ({
    item,
  }: {
    item: typeof workouts[number];
  }) => {
    const isEditing =
      editingId === item.id;

    return (
      <WorkoutCard
        name={item.name}
        category={item.category}
        duration={item.duration}
        calories={item.calories}
        onEdit={() =>
          handleEdit(
            item.id,
            item.name,
          )
        }
        onDelete={() =>
          handleDelete(item.id)
        }>

        {isEditing && (
          <View style={styles.editBox}>
            <TextInput
              style={styles.editInput}
              value={editingName}
              onChangeText={setEditingName}
              placeholder="Enter new workout name"
            />

            <Pressable
              style={styles.saveButton}
              onPress={() =>
                handleUpdate(item.id)
              }>

              <Text style={styles.saveText}>
                Save Changes
              </Text>

            </Pressable>
          </View>
        )}

      </WorkoutCard>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        My Workouts
      </Text>

      <Text style={styles.subtitle}>
        Choose a workout and keep improving every day.
      </Text>

      <Text style={styles.apiText}>
        API workouts loaded: {apiWorkouts.length}
      </Text>

      <Text style={styles.listTitle}>
        Quick Workout List
      </Text>

      <FlatList
        data={workouts}
        renderItem={renderWorkout}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          styles.horizontalList
        }
      />

      <Text style={styles.listTitle}>
        Workout Categories
      </Text>

      <SectionList
        sections={sections}
        renderItem={renderSectionItem}
        keyExtractor={item =>
          `section-${item.id}`
        }
        renderSectionHeader={({
          section,
        }) => (
          <View style={styles.sectionHeader}>
            <Text
              style={
                styles.sectionHeaderText
              }>
              {section.title}
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          styles.sectionList
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No workouts available.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#202124',
  },

  subtitle: {
    fontSize: 14,
    color: '#777777',
    marginTop: 6,
    marginBottom: 5,
  },

  apiText: {
    fontSize: 12,
    color: '#6C5CE7',
    marginBottom: 10,
  },

  listTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#202124',
    marginTop: 10,
    marginBottom: 8,
  },

  horizontalList: {
    paddingBottom: 5,
  },

  quickInfo: {
    fontSize: 12,
    color: '#777777',
    marginTop: 10,
  },

  sectionList: {
    paddingBottom: 20,
  },

  sectionHeader: {
    backgroundColor: '#EDEBFF',
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 5,
  },

  sectionHeaderText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#6C5CE7',
  },

  editBox: {
    marginTop: 15,
  },

  editInput: {
    backgroundColor: '#F7F8FC',
    borderWidth: 1,
    borderColor: '#E0DFF0',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },

  saveButton: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  saveText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  emptyText: {
    textAlign: 'center',
    color: '#888888',
    marginTop: 30,
  },
});

export default WorkoutsScreen;