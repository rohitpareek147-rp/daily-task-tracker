import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('renders title and buttons', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<HomeScreen navigation={navigation} />);
    expect(getByText('Daily Task Tracker')).toBeTruthy();
    expect(getByText('Go to Task List')).toBeTruthy();
    expect(getByText('Go to Dashboard')).toBeTruthy();
  });
});
describe('HomeScreen', () => {
  const navigation = { navigate: jest.fn() };

  beforeEach(() => {
    navigation.navigate.mockClear();
  });

  it('renders title and navigation buttons', () => {
    const { getByText } = render(<HomeScreen navigation={navigation} />);
    expect(getByText('Daily Task Tracker')).toBeTruthy();
    expect(getByText('Go to Task List')).toBeTruthy();
    expect(getByText('Go to Dashboard')).toBeTruthy();
  });

  it('navigates to TaskList when button pressed', () => {
    const { getByText } = render(<HomeScreen navigation={navigation} />);
    fireEvent.press(getByText('Go to Task List'));
    expect(navigation.navigate).toHaveBeenCalledWith('TaskList');
  });

  it('navigates to Dashboard when button pressed', () => {
    const { getByText } = render(<HomeScreen navigation={navigation} />);
    fireEvent.press(getByText('Go to Dashboard'));
    expect(navigation.navigate).toHaveBeenCalledWith('Dashboard');
  });
});
