import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const handleAdd = () => {
    if (task) {
      if (editIndex !== -1) {
        // Edit existing task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        // Add new task
        setTasks([...tasks, task]);
      }
      setTask('');
    }
  };

  const handleEditTask = index => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };

  const handleDeleteTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const renderItem = ({item, index}) => (
    <View style={styles.task}>
      <Text style={styles.itemList}>{item}</Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      <Text style={styles.text}>TodoApp</Text>
      <View>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: '#1E90FF',
            borderRadius: 6,
            paddingVertical: 12,
            paddingHorizontal: 14,
            margin: 10,
            fontSize: 20,
          }}
          value={task}
          onChangeText={userText => setTask(userText)}
          placeholder="Add a task"
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>
          {editIndex !== -1 ? 'Update Task' : 'Add Task'}
        </Text>
      </TouchableOpacity>
      <FlatList
        style={{
          backgroundColor: '#1E90FF',
          margin: 8,
          borderRadius: 6,
          marginBottom: 10,
        }}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  text: {
    borderWidth: 2,
    backgroundColor: '#1E90FF',
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 14,
    margin: 10,
    fontSize: 20,
  },
  addButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    fontSize: 18,
  },
  itemList: {
    fontSize: 20,
    color: 'white',
    fontWeight: 500,
    padding: 5,
  },
  taskButtons: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
  },
});
