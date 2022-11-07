import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faHistory } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  return (
    <div className={styles.play_list}>
      <h2>PLAYLIST</h2>
      <ul>
        <li>
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faBox} className={styles.menu_icon} />
            <em>My locker</em>
          </div>
        </li>
        <li>
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faHistory} className={styles.menu_icon} />
            <em>Watch History</em>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Index;
