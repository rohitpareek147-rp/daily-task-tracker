import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TaskInput from '../src/components/TaskInput';

describe('TaskInput', () => {
  it('calls onAdd with input text and clears input', () => {
    const onAdd = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <TaskInput onAdd={onAdd} />
    );
    const input = getByPlaceholderText('Enter task...');
    fireEvent.changeText(input, 'Test Task');
    fireEvent.press(getByText('Add'));
    expect(onAdd).toHaveBeenCalledWith('Test Task');
    expect(input.props.value).toBe('');
  });

  it('calls onUpdate and onCancel in edit mode', () => {
    const onUpdate = jest.fn();
    const onCancel = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <TaskInput editing initialValue="Edit Me" onUpdate={onUpdate} onCancel={onCancel} onAdd={() => {}} />
    );
    const input = getByPlaceholderText('Enter task...');
    fireEvent.changeText(input, 'Updated Task');
    fireEvent.press(getByText('Update'));
    expect(onUpdate).toHaveBeenCalledWith('Updated Task');
    fireEvent.press(getByText('Cancel'));
    expect(onCancel).toHaveBeenCalled();
  });
});
