import React from 'react';
import styles from './style.module.css';
import NavBar from '../../components/NavBar';
import Content from './Content';

export const Main = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <NavBar></NavBar>
        <Content></Content>
      </div>
    </section>
  );
};

export default Main;
