import CurrentTime from '../components/CurrentTime';
import TodoList from '../components/TodoList';
import AudioPlayer from '../components/AudioPlayer';
import styles from '../styles/home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <CurrentTime />
      <TodoList />
      <AudioPlayer />
    </main>
  );
}

export default Home;
