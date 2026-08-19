import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Refatore as props deste componente para TypeScript
export const TaskItem = ({ task, onToggle }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onToggle(task.id)}>
      <View style={[styles.checkbox, task.completed && styles.checked]} />
      <Text style={[styles.title, task.completed && styles.completedText]}>
        {task.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginRight: 12,
  },
  checked: {
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});