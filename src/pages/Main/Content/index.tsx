import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';
import Slider from './Slider';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../constants/path';
import { searchValue } from '../../../context/search';
interface IProps {
  data: any;
}

const Index = ({ data }: IProps) => {
  const [target, setTarget] = useState<any>(); //클릭한 target 정보 저장
  const { search, setSearch } = useContext(searchValue);
  let save: any = localStorage.getItem('save');
  save = JSON.parse(save);

  //메인 이미지 설정
  const backgroundImage = {
    backgroundImage:
      (target &&
        target.snippet.thumbnails.maxres &&
        `url(${target.snippet.thumbnails.maxres.url})`) ||
      (target &&
        target.snippet.thumbnails.standard &&
        `url(${target.snippet.thumbnails.standard.url})`) ||
      (target &&
        target.snippet.thumbnails.high &&
        `url(${target.snippet.thumbnails.high.url})`),
  };
  const navigate = useNavigate();

  const handleSave = () => {
    if (save != null) {
      const copy = [...save, search];
      localStorage.setItem('save', JSON.stringify(copy));
    }
  };

  useEffect(() => {
    setTarget(data && data[0]);
  }, [data]);

  useEffect(() => {
    if (save == null) {
      localStorage.setItem('save', JSON.stringify([]));
    }
  }, []);

  return (
    <article className={styles.content}>
      <div className={styles.target_item}>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Type here to search"
            onChange={(e: any) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={e => {
              e.preventDefault();
              navigate(PATH.Search);
              localStorage.setItem('search', JSON.stringify(search));
              handleSave();
            }}
          >
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          </button>
        </form>
        <div className={styles.target_img} style={backgroundImage}></div>
        <div className={styles.target_text}>
          <h3>{target && target.snippet.title}</h3>
          <p>{target && target.snippet.description}</p>
          <button
            className={styles.target_btn}
            onClick={() => {
              navigate(PATH.Detail);
              localStorage.setItem('target', JSON.stringify(target));
            }}
          >
            <FontAwesomeIcon icon={faPlay} className={styles.btn_icon} />
          </button>
        </div>
        <div className={styles.video_list}>
          <Slider data={data} setTarget={setTarget}></Slider>
        </div>
      </div>
    </article>
  );
};

export default Index;
