import { useState, useEffect } from 'react';
import CurrentTime from '../components/CurrentTime';
import styles from '../styles/home.module.css';
import DraggableComponent from '../components/DraggableComponent';
import TodoList from '../components/TodoList';

function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    <main className={styles.main}>
      <DraggableComponent id="currentTime">
        {isClient && <CurrentTime />}
      </DraggableComponent>
      <DraggableComponent id="todoList">
        <div className={styles.todoList}>
          <TodoList />
        </div>
      </DraggableComponent>
    </main>
  );
}

export default Home;
