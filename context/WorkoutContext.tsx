import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';

export type Workout = {
  id: string;
  name: string;
  duration: string;
  calories: string;
  category: string;
};

type WorkoutContextType = {
  workouts: Workout[];
  apiWorkouts: any[];
  addWorkout: (workout: {
    name: string;
    duration: string;
    calories: string;
  }) => Promise<void>;
  updateWorkout: (id: string, name: string) => Promise<void>;
  deleteWorkout: (id: string) => Promise<void>;
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

const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined,
);

export function WorkoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [workouts, setWorkouts] =
    useState<Workout[]>(initialWorkouts);

  const [apiWorkouts, setApiWorkouts] = useState<any[]>([]);

  // GET
  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const response = await api.get('/posts?_limit=5');
        setApiWorkouts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getWorkouts();
  }, []);

  // POST
  const addWorkout = async (workout: {
    name: string;
    duration: string;
    calories: string;
  }) => {
    try {
      await api.post('/posts', workout);

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
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // PATCH
  const updateWorkout = async (
    id: string,
    name: string,
  ) => {
    try {
      await api.patch(`/posts/${id}`, {
        name,
      });

      setWorkouts(previousWorkouts =>
        previousWorkouts.map(workout =>
          workout.id === id
            ? {...workout, name}
            : workout,
        ),
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // DELETE
  const deleteWorkout = async (id: string) => {
    try {
      await api.delete(`/posts/${id}`);

      setWorkouts(previousWorkouts =>
        previousWorkouts.filter(
          workout => workout.id !== id,
        ),
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <WorkoutContext.Provider
      value={{
        workouts,
        apiWorkouts,
        addWorkout,
        updateWorkout,
        deleteWorkout,
      }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      'useWorkout must be used inside WorkoutProvider',
    );
  }

  return context;
}