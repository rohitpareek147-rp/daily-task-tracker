import { act } from 'react-test-renderer';
import { useTaskStore } from '../src/store/useTaskStore';

describe('useTaskStore', () => {
  beforeEach(async () => {
    await act(async () => {
      useTaskStore.getState().fetchTasks();
    });
  });

  it('adds a task', async () => {
    await act(async () => {
      await useTaskStore.getState().addTask({ id: '1', text: 'Task 1', completed: false });
    });
    expect(useTaskStore.getState().tasks.length).toBeGreaterThan(0);
    expect(useTaskStore.getState().tasks[0].text).toBe('Task 1');
  });

  it('updates a task', async () => {
    await act(async () => {
      await useTaskStore.getState().addTask({ id: '2', text: 'Task 2', completed: false });
      await useTaskStore.getState().updateTask('2', { text: 'Updated Task 2' });
    });
    const updated = useTaskStore.getState().tasks.find(t => t.id === '2');
    expect(updated.text).toBe('Updated Task 2');
  });

  it('deletes a task', async () => {
    await act(async () => {
      await useTaskStore.getState().addTask({ id: '3', text: 'Task 3', completed: false });
      await useTaskStore.getState().deleteTask('3');
    });
    const deleted = useTaskStore.getState().tasks.find(t => t.id === '3');
    expect(deleted).toBeUndefined();
  });
});
