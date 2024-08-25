import { useEffect, useState } from 'react';
import styles from '../styles/home.module.css';

function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [timeZone, setTimeZone] = useState('UTC');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone }));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  const handleTimeZoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeZone(event.target.value);
  };

  return (
    <div>
      <select onChange={handleTimeZoneChange} value={timeZone}>
        <option value="UTC">UTC</option>
        <option value="America/New_York">New York</option>
        <option value="Europe/London">London</option>
        <option value="Asia/Tokyo">Tokyo</option>
        <option value="Australia/Sydney">Sydney</option>
        <option value="America/Chicago">CST</option>
        <option value="America/Los_Angeles">PST</option>
      </select>
      <div className={styles.currentTime}>{time}</div>
    </div>
  );
}

export default CurrentTime;
