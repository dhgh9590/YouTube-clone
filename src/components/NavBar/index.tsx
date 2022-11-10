import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import MenuList from './MenuList';
import PlayList from './PlayList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import usePopupClose from '../../hooks/usePopupClose';

interface IProps {
  onData: unknown;
}

const Index = ({ onData }: IProps) => {
  const [toggle, setToggle] = useState<any>(false); //메뉴바 토글
  const nav = useRef<any>(null);
  const toggleValue = usePopupClose(nav);

  useEffect(() => {
    setToggle(toggleValue);
  }, [toggleValue]);

  useEffect(() => {
    setToggle(false);
  }, []);

  return (
    <nav
      ref={nav}
      className={`${styles.nav}  ${toggle == true && styles.active}`}
    >
      <div className={styles.menu_wrap}>
        <div className={styles.logo}>
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" />
        </div>
        <MenuList onData={onData}></MenuList>
        <PlayList></PlayList>
      </div>
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
