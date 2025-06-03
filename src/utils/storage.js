import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem('TASKS', JSON.stringify(tasks));
  } catch (e) {
    // saving error
    console.error('Error saving tasks', e);
  }
};

export const loadTasks = async () => {
  try {
    const tasks = await AsyncStorage.getItem('TASKS');
    return tasks ? JSON.parse(tasks) : [];
  } catch (e) {
    // loading error
    console.error('Error loading tasks', e);
    return [];
  }
};
