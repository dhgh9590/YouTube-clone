import React, { useState } from 'react';
import styles from './style.module.css';
import MenuList from './MenuList';
import PlayList from './PlayList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  onData: unknown;
}

const Index = ({ onData }: IProps) => {
  const [toggle, setToggle] = useState(false); //메뉴바 토글

  return (
    <nav className={`${styles.nav}  ${toggle == true && styles.active}`}>
      <div className={styles.logo}>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" />
      </div>
      <MenuList onData={onData}></MenuList>
      <PlayList></PlayList>
      <div
        className={`${styles.toggle}`}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle == false ? (
          <FontAwesomeIcon icon={faBars} className={styles.open} />
        ) : (
          <FontAwesomeIcon icon={faTimes} className={styles.close} />
        )}
      </div>
    </nav>
  );
};

export default Index;
