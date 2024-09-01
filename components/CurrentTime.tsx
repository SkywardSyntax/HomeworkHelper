import { useEffect, useState } from 'react';
import styles from '../styles/home.module.css';

function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString('en-US', { timeZone }));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isClient]);

  return (
    <div className={styles.frostedGlassChip}>
      {isClient && <div className={styles.currentTime}>{time}</div>}
    </div>
  );
}

export default CurrentTime;
