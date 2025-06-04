import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTaskStore } from '../store/useTaskStore';
import colors from '../theme/colors';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory-native';

const getMonthKey = (date) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth() + 1}`;
};

const DashboardScreen = () => {
  const { tasks } = useTaskStore();

  // Group tasks by month
  const monthlyStats = useMemo(() => {
    const stats = {};
    tasks.forEach((task) => {
      const createdKey = getMonthKey(task.id ? Number(task.id) : Date.now());
      if (!stats[createdKey]) stats[createdKey] = { created: 0, completed: 0 };
      stats[createdKey].created += 1;
      if (task.completed) stats[createdKey].completed += 1;
    });
    return Object.entries(stats).map(([month, data]) => ({ month, ...data }));
  }, [tasks]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Dashboard</Text>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20} height={220}>
        <VictoryAxis
          tickFormat={(x) => x}
          style={{ tickLabels: { fontSize: 10, angle: 45 } }}
        />
        <VictoryAxis dependentAxis tickFormat={(y) => y} />
        <VictoryBar
          data={monthlyStats}
          x="month"
          y="created"
          style={{ data: { fill: colors.primary } }}
          barWidth={12}
        />
        <VictoryBar
          data={monthlyStats}
          x="month"
          y="completed"
          style={{ data: { fill: colors.secondary } }}
          barWidth={8}
        />
      </VictoryChart>
      <Text style={styles.subtitle}>Monthly Task Table</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.tableCell}>Month</Text>
        <Text style={styles.tableCell}>Created</Text>
        <Text style={styles.tableCell}>Completed</Text>
      </View>
      <FlatList
        data={monthlyStats}
        keyExtractor={(item) => item.month}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.month}</Text>
            <Text style={styles.tableCell}>{item.created}</Text>
            <Text style={styles.tableCell}>{item.completed}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No data yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: colors.text,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: 4,
    marginBottom: 4,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    color: colors.text,
  },
  empty: {
    textAlign: 'center',
    color: colors.secondary,
    marginTop: 16,
  },
});

export default DashboardScreen;
