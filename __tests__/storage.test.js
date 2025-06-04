import { saveTasks, loadTasks } from '../src/utils/storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(JSON.stringify([{ id: '1', text: 'Test', completed: false }]))),
}));

describe('storage utils', () => {
  it('saves tasks', async () => {
    await expect(saveTasks([{ id: '1', text: 'Test', completed: false }])).resolves.toBeUndefined();
  });

  it('loads tasks', async () => {
    const tasks = await loadTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].text).toBe('Test');
  });
});
