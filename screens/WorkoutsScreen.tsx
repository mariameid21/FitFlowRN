import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
} from 'react-native';

type Workout = {
  id: string;
  name: string;
  duration: string;
  calories: string;
  category: string;
};

type Props = {
  workouts: Workout[];
};

function WorkoutsScreen({workouts}: Props) {
  const [sections, setSections] = useState<
    {title: string; data: Workout[]}[]
  >([]);

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
          workout => workout.category === category,
        ),
      }))
      .filter(section => section.data.length > 0);

    setSections(groupedSections);
  }, [workouts]);

  const renderWorkout = ({
    item,
  }: {
    item: Workout;
  }) => (
    <View style={styles.horizontalCard}>
      <Text style={styles.horizontalName}>
        {item.name}
      </Text>

      <Text style={styles.horizontalCategory}>
        {item.category}
      </Text>

      <Text style={styles.horizontalInfo}>
        {item.duration}
      </Text>

      <Text style={styles.horizontalInfo}>
        🔥 {item.calories}
      </Text>
    </View>
  );

  const renderSectionItem = ({
    item,
  }: {
    item: Workout;
  }) => (
    <View style={styles.sectionCard}>
      <View style={styles.cardTop}>
        <Text style={styles.workoutName}>
          {item.name}
        </Text>

        <Text style={styles.category}>
          {item.category}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.info}>
          ⏱ {item.duration}
        </Text>

        <Text style={styles.info}>
          🔥 {item.calories}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Workouts</Text>

      <Text style={styles.subtitle}>
        Choose a workout and keep improving every day.
      </Text>

      {/* FlatList */}
      <Text style={styles.listTitle}>
        Quick Workout List
      </Text>

      <FlatList
        data={workouts}
        renderItem={renderWorkout}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      {/* SectionList */}
      <Text style={styles.listTitle}>
        Workout Categories
      </Text>

      <SectionList
        sections={sections}
        renderItem={renderSectionItem}
        keyExtractor={item =>
          `section-${item.id}`
        }
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>
              {section.title}
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.sectionList}
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
    marginBottom: 15,
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

  horizontalCard: {
    width: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    marginRight: 12,
  },

  horizontalName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#202124',
    marginBottom: 8,
  },

  horizontalCategory: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6C5CE7',
    marginBottom: 8,
  },

  horizontalInfo: {
    fontSize: 12,
    color: '#777777',
    marginTop: 3,
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

  sectionCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 10,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  workoutName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#202124',
    flex: 1,
  },

  category: {
    backgroundColor: '#EDEBFF',
    color: '#6C5CE7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 11,
    fontWeight: '700',
  },

  infoRow: {
    flexDirection: 'row',
    marginTop: 12,
  },

  info: {
    fontSize: 13,
    color: '#777777',
    marginRight: 20,
  },

  emptyText: {
    textAlign: 'center',
    color: '#888888',
    marginTop: 30,
  },
});

export default WorkoutsScreen;