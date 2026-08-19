import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TaskItem } from './TaskItem';

// Refatore as props deste componente para TypeScript
export const TaskList = ({ tasks, onToggle }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem task={item} onToggle={onToggle} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
});