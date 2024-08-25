import { useState, useEffect } from 'react';
import CurrentTime from '../components/CurrentTime';
import GitHubCopilotIcon from '../components/GitHubCopilotIcon';
import styles from '../styles/home.module.css';

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
      <div>
        <p>Current Time:</p>
        {isClient && <CurrentTime />}
      </div>
      <div className={styles.todoList}>
        <h2>Todo List</h2>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <GitHubCopilotIcon />

    </main>
  );
}

export default Home;
