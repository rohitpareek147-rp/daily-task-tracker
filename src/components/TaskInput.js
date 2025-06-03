import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const TaskInput = ({ onAdd, initialValue = '', onUpdate, editing = false, onCancel }) => {
  const [text, setText] = useState(initialValue);

  const handleSubmit = () => {
    if (text.trim()) {
      editing ? onUpdate(text) : onAdd(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task..."
        value={text}
        onChangeText={setText}
      />
      <Button
        title={editing ? 'Update' : 'Add'}
        onPress={handleSubmit}
        color={colors.primary}
      />
      {editing && (
        <Button title="Cancel" onPress={onCancel} color={colors.danger} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
    backgroundColor: colors.background,
  },
});

export default TaskInput;
