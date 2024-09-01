import CurrentTime from '../components/CurrentTime';
import styles from '../styles/home.module.css';

function Home() {
  return (
    <main className={styles.main}>
      <CurrentTime />
    </main>
  );
}

export default Home;
