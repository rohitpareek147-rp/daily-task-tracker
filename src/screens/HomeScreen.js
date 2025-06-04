import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Task Tracker</Text>
      <Button
        title="Go to Task List"
        onPress={() => navigation.navigate('TaskList')}
        color={colors.primary}
      />
      <View style={{ height: 16 }} />
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
        color={colors.secondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 32,
  },
});

export default HomeScreen;
