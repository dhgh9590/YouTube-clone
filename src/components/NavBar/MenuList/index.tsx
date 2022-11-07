import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVideo,
  faCar,
  faMusic,
  faVolleyballBall,
  faGamepad,
  faNewspaper,
  faFlask,
} from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  return (
    <div className={styles.menu_list}>
      <h2>MENU</h2>
      <ul>
        <li>
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faVideo} className={styles.menu_icon} />
            <em>Movies and Animations</em>
          </div>
        </li>
        <li>
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faCar} className={styles.menu_icon} />
            <em>Cars and Vehicles</em>
          </div>
        </li>
        <li>
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faMusic} className={styles.menu_icon} />
            <em>Music</em>
          </div>
        </li>
        <li>
          <div className={styles.menu}>
            <FontAwesomeIcon
              icon={faVolleyballBall}
              className={styles.menu_icon}
            />
            <em>Sports</em>
          </div>
        </li>
        <li>
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faGamepad} className={styles.menu_icon} />
            <em>Game</em>
          </div>
        </li>
        <li>
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faNewspaper} className={styles.menu_icon} />
            <em>News and Politics</em>
          </div>
        </li>
        <li>
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faFlask} className={styles.menu_icon} />
            <em>Science and Technology</em>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Index;
