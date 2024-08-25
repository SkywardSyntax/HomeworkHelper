import React from 'react';
import { CopilotIcon } from '@primer/octicons-react';
import styles from '../styles/home.module.css';

const GitHubCopilotIcon = () => {
  return (
    <div className={styles.centeredIcon}>
      <CopilotIcon size={48} />
    </div>
  );
};

export default GitHubCopilotIcon;
