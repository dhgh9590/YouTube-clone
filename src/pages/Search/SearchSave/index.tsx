import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { searchValue } from '../../../context/search';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../constants/path';
import usePopupClose from '../../../hooks/usePopupClose';

const Index = () => {
  const [toggle, setToggle] = useState<any>(false); //메뉴바 토글
  const { search, setSearch } = useContext(searchValue); //검색어 저장
  const [input, setInput] = useState<any>(search); //현재 검색어 저장
  const [save, setSave] = useState<any[]>(); //검색어 기록 저장
  const navigate = useNavigate();
  const nav = useRef<any>(null);
  const toggleValue = usePopupClose(nav);

  useEffect(() => {
    setToggle(toggleValue);
  }, [toggleValue]);

  //저장된 검색어 삭제
  const onDelete = (Titem: any) => {
    const newSave = save?.filter(item => {
      return item != Titem;
    });
    localStorage.setItem('save', JSON.stringify(newSave));
    setSave(newSave);
  };

  //로컬스토리지 중복 제거
  useEffect(() => {
    let getSave: any = localStorage.getItem('save');
    getSave = JSON.parse(getSave);
    getSave.push(input);
    getSave = new Set(getSave);
    getSave = Array.from(getSave);
    const newGetSave = getSave.filter((item: any) => {
      return item != null;
    });
    localStorage.setItem('save', JSON.stringify(newGetSave));
    setSave(newGetSave);
  }, [search]);

  return (
    <div
      ref={nav}
      className={`${styles.container} ${toggle == true && styles.active}`}
    >
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
      <div
        className={styles.logo}
        onClick={() => {
          navigate(PATH.MAIN);
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" />
      </div>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Type here to search"
          defaultValue={search}
          key={search}
          onChange={e => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={e => {
            e.preventDefault();
            localStorage.setItem('search', JSON.stringify(input));
            setSearch(input);
            setToggle(false);
          }}
        >
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        </button>
      </form>
      <div className={styles.save_keyword}>
        <ul>
          {save &&
            save.map((item: any, index: any) => {
              return (
                <li key={index}>
                  <em
                    onClick={() => {
                      localStorage.setItem('search', JSON.stringify(item));
                      setSearch(item);
                      setInput(item);
                    }}
                  >
                    {item}
                  </em>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={styles.icon}
                    onClick={() => {
                      onDelete(item);
                    }}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Index;
