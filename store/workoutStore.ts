import {create} from 'zustand';

export type Workout = {
  id: string;
  name: string;
  duration: string;
  calories: string;
  category: string;
};

type WorkoutInput = {
  name: string;
  duration: string;
  calories: string;
};

type WorkoutStore = {
  workouts: Workout[];
  addWorkout: (workout: WorkoutInput) => void;
  updateWorkout: (id: string, name: string) => void;
  deleteWorkout: (id: string) => void;
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

export const useWorkoutStore = create<WorkoutStore>(set => ({
  workouts: initialWorkouts,

  addWorkout: workout => {
    const newWorkout: Workout = {
      id: Date.now().toString(),
      name: workout.name,
      duration: workout.duration,
      calories: workout.calories,
      category: 'Strength',
    };

    set(state => ({
      workouts: [...state.workouts, newWorkout],
    }));
  },

  updateWorkout: (id, name) => {
    set(state => ({
      workouts: state.workouts.map(workout =>
        workout.id === id
          ? {...workout, name}
          : workout,
      ),
    }));
  },

  deleteWorkout: id => {
    set(state => ({
      workouts: state.workouts.filter(
        workout => workout.id !== id,
      ),
    }));
  },
}));