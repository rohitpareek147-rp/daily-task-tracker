import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, task.completed && styles.completed]}>{task.text}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit} style={styles.button}>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.button}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  text: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: colors.secondary,
  },
  actions: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  button: {
    marginLeft: 8,
  },
  edit: {
    color: colors.primary,
  },
  delete: {
    color: colors.danger,
  },
});

export default TaskItem;
