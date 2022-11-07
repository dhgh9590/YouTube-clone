import React from 'react';
import styles from './style.module.css';
import MenuList from './MenuList';
import PlayList from './PlayList';

const Index = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" />
      </div>
      <MenuList></MenuList>
      <PlayList></PlayList>
    </nav>
  );
};

export default Index;
