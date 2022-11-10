import React, { useState } from 'react';
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

interface IProps {
  onData: any;
}

const Index = ({ onData }: IProps) => {
  const [active, setActive] = useState<number>(1);
  return (
    <div className={styles.menu_list}>
      <h2>MENU</h2>
      <ul>
        <li
          className={`${active == 1 && styles.active}`}
          onClick={() => {
            onData(10);
            setActive(1);
          }}
        >
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faMusic} className={styles.menu_icon} />
            <em>Music</em>
          </div>
        </li>
        <li
          className={`${active == 2 && styles.active}`}
          onClick={() => {
            onData(1);
            setActive(2);
          }}
        >
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faVideo} className={styles.menu_icon} />
            <em>Movies and Animations</em>
          </div>
        </li>
        <li
          className={`${active == 3 && styles.active}`}
          onClick={() => {
            onData(2);
            setActive(3);
          }}
        >
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faCar} className={styles.menu_icon} />
            <em>Cars and Vehicles</em>
          </div>
        </li>
        <li
          className={`${active == 4 && styles.active}`}
          onClick={() => {
            onData(17);
            setActive(4);
          }}
        >
          <div className={styles.menu}>
            <FontAwesomeIcon
              icon={faVolleyballBall}
              className={styles.menu_icon}
            />
            <em>Sports</em>
          </div>
        </li>
        <li
          className={`${active == 5 && styles.active}`}
          onClick={() => {
            onData(20);
            setActive(5);
          }}
        >
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faGamepad} className={styles.menu_icon} />
            <em>Game</em>
          </div>
        </li>
        <li
          className={`${active == 6 && styles.active}`}
          onClick={() => {
            onData(25);
            setActive(6);
          }}
        >
          <div className={styles.menu}>
            <FontAwesomeIcon icon={faNewspaper} className={styles.menu_icon} />
            <em>News and Politics</em>
          </div>
        </li>
        <li
          className={`${active == 7 && styles.active}`}
          onClick={() => {
            onData(28);
            setActive(7);
          }}
        >
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
