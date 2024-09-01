import React, { useState, useEffect } from 'react';
import { Box, Button, TextInput, Text, Heading, List, ListItem } from '@primer/react';

const TodoList = () => {
  const [todos, setTodos] = useState<{ text: string, dueDate: string }[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '' && dueDate.trim() !== '') {
      setTodos([...todos, { text: newTodo, dueDate }]);
      setNewTodo('');
      setDueDate('');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const sortedTodos = todos.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

  return (
    <Box p={3} borderRadius={2} boxShadow="medium" bg="canvas.default">
      <Heading as="h2" mb={3}>Todo List</Heading>
      <Box display="flex" mb={3}>
        <TextInput
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          sx={{ flexGrow: 1, mr: 2 }}
        />
        <TextInput
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          sx={{ flexGrow: 1, mr: 2 }}
        />
        <Button onClick={addTodo}>Add</Button>
      </Box>
      <List>
        {sortedTodos.map((todo, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
            <Text>{todo.text} (Due: {todo.dueDate})</Text>
            <Button onClick={() => removeTodo(index)} variant="danger">Remove</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
