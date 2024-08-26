import React, { useState } from 'react';
import { Box, Button, TextInput, Text, Heading, List, ListItem } from '@primer/react';
import DraggableComponent from './DraggableComponent';

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <DraggableComponent id="todoList">
      <Box p={3} borderRadius={2} boxShadow="medium" bg="canvas.default">
        <Heading as="h2" mb={3}>Todo List</Heading>
        <Box display="flex" mb={3}>
          <TextInput
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
            sx={{ flexGrow: 1, mr: 2 }}
          />
          <Button onClick={addTodo}>Add</Button>
        </Box>
        <List>
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
              <Text>{todo}</Text>
              <Button onClick={() => removeTodo(index)} variant="danger">Remove</Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </DraggableComponent>
  );
};

export default TodoList;
