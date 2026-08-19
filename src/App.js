import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TaskList } from './components/TaskList';
import { fetchTasks } from './services/api';

// ⚠️ PONTO DE CONFLITO PROPOSITAL: 
// Cada aluno deve alterar "App de Tarefas" para "App de Tarefas - [SEU NOME]"
// Isso garantirá um conflito de merge para ser resolvido na aula!
const APP_TITLE = "App de Tarefas - JamesCampos"; 

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    try {
      // Refatore esta chamada para garantir que o retorno seja tratado com segurança
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error("Erro ao carregar tarefas", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = (id) => {
    // Refatore esta função para garantir null safety e tipagem correta do estado
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headerTitle}>{APP_TITLE}</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Carregar Tarefas" onPress={loadTasks} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
      ) : (
        <TaskList tasks={tasks} onToggle={toggleTask} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  loader: {
    marginTop: 40,
  },
});