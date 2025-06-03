import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TaskListScreen from '../src/screens/TaskListScreen';
import { useTaskStore } from '../src/store/useTaskStore';

jest.mock('../src/store/useTaskStore');

const mockTasks = [
  { id: '1', text: 'Task 1', completed: false },
  { id: '2', text: 'Task 2', completed: false },
];

describe('TaskListScreen', () => {
  beforeEach(() => {
    useTaskStore.mockReturnValue({
      tasks: mockTasks,
      fetchTasks: jest.fn(),
      addTask: jest.fn(),
      updateTask: jest.fn(),
      deleteTask: jest.fn(),
      loading: false,
    });
  });

  it('renders tasks', () => {
    const { getByText } = render(<TaskListScreen />);
    expect(getByText('Task 1')).toBeTruthy();
    expect(getByText('Task 2')).toBeTruthy();
  });

  it('shows empty message if no tasks', () => {
    useTaskStore.mockReturnValue({
      tasks: [],
      fetchTasks: jest.fn(),
      addTask: jest.fn(),
      updateTask: jest.fn(),
      deleteTask: jest.fn(),
      loading: false,
    });
    const { getByText } = render(<TaskListScreen />);
    expect(getByText('No tasks yet.')).toBeTruthy();
  });
});
