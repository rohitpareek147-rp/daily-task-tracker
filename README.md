# Daily Task Tracker App

A simple React Native (bare workflow) app to track your daily tasks.

## Features
- List all daily tasks
- Add new tasks
- Update/edit existing tasks
- Delete tasks
- Persist tasks with AsyncStorage

## Tech Stack
- React Native (bare workflow)
- Zustand for state management
- AsyncStorage for persistent storage
- Functional components with hooks
- Clean, simple UI using React Native’s core components and StyleSheet

## Project Structure
```
TaskTrackerApp/
├── App.tsx
├── android/
├── ios/
├── src/
│   ├── components/
│   │   ├── TaskItem.js
│   │   ├── TaskInput.js
│   ├── screens/
│   │   └── TaskListScreen.js
│   ├── store/
│   │   └── useTaskStore.js
│   ├── utils/
│   │   └── storage.js
│   └── theme/
│       └── colors.js
```

## Getting Started

1. Install dependencies:
   ```bash
   cd TaskTrackerApp
   npm install
   ```
2. Run on Android:
   ```bash
   npx react-native run-android
   ```
   Or on iOS:
   ```bash
   npx react-native run-ios
   ```

## License
MIT
