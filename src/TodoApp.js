import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const TodoApp = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos(...todos, {id: Date.now().toString(), title: input});
  };

  return (
    <View>
      <Text
        style={{
          backgroundColor: '#1E90FF',
          alignItems: 'center',
          margin: 10,
          borderRadius: 6,
          fontSize: 30,
          color: 'white',
        }}>
        TodoApp
      </Text>
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
          value={input}
          onChangeText={userText => setInput(userText)}
          placeholder="Add a task"
        />
        <Button
          title="Add Task"
          style={{margin: 10, fontSize: 30, paddingVertical: 20}}
          onPress={handleAdd}
        />
      </View>
      <Text
        style={{
          backgroundColor: '#1E90FF',
          margin: 20,
          fontWeight: 400,
          color: 'white',
          fontSize: 30,
          borderRadius: 6,
        }}>
        Task1
      </Text>
      <Text
        style={{
          backgroundColor: '#1E90FF',
          margin: 20,
          fontWeight: 400,
          color: 'white',
          fontSize: 30,
          borderRadius: 6,
        }}>
        {input}
      </Text>
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({});
