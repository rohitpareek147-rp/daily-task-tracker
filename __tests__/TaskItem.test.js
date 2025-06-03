import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TaskItem from '../src/components/TaskItem';

describe('TaskItem', () => {
  const task = { id: '1', text: 'Test Task', completed: false };

  it('renders task text', () => {
    const { getByText } = render(
      <TaskItem task={task} onDelete={jest.fn()} onEdit={jest.fn()} />
    );
    expect(getByText('Test Task')).toBeTruthy();
  });

  it('calls onEdit and onDelete', () => {
    const onEdit = jest.fn();
    const onDelete = jest.fn();
    const { getByText } = render(
      <TaskItem task={task} onDelete={onDelete} onEdit={onEdit} />
    );
    fireEvent.press(getByText('Edit'));
    expect(onEdit).toHaveBeenCalled();
    fireEvent.press(getByText('Delete'));
    expect(onDelete).toHaveBeenCalled();
  });
});
