import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';
import TaskItem from '../components/TaskItem';
import TaskInput from '../components/TaskInput';
import { useTaskStore } from '../store/useTaskStore';
import colors from '../theme/colors';

const TaskListScreen = () => {
  const { tasks, fetchTasks, addTask, updateTask, deleteTask, loading } = useTaskStore();
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = (text) => {
    addTask({ id: Date.now().toString(), text, completed: false });
  };

  const handleUpdate = (text) => {
    updateTask(editingId, { text });
    setEditingId(null);
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Daily Task Tracker</Text>
      <TaskInput
        onAdd={handleAdd}
        editing={!!editingId}
        initialValue={editingId ? tasks.find((t) => t.id === editingId)?.text : ''}
        onUpdate={handleUpdate}
        onCancel={handleCancel}
      />
      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onDelete={() => deleteTask(item.id)}
              onEdit={() => handleEdit(item.id)}
            />
          )}
          ListEmptyComponent={<Text style={styles.empty}>No tasks yet.</Text>}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
    textAlign: 'center',
  },
  loading: {
    textAlign: 'center',
    marginTop: 20,
    color: colors.secondary,
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: colors.secondary,
  },
});

export default TaskListScreen;
