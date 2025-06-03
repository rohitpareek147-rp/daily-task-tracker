import { create } from 'zustand';
import { saveTasks, loadTasks } from '../utils/storage';

export const useTaskStore = create((set, get) => ({
  tasks: [],
  loading: true,
  fetchTasks: async () => {
    const tasks = await loadTasks();
    set({ tasks, loading: false });
  },
  addTask: async (task) => {
    const newTasks = [...get().tasks, task];
    set({ tasks: newTasks });
    await saveTasks(newTasks);
  },
  updateTask: async (id, updatedTask) => {
    const newTasks = get().tasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    set({ tasks: newTasks });
    await saveTasks(newTasks);
  },
  deleteTask: async (id) => {
    const newTasks = get().tasks.filter((task) => task.id !== id);
    set({ tasks: newTasks });
    await saveTasks(newTasks);
  },
}));
