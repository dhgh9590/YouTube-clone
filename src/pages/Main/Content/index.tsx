import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Slider from './Slider';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../constants/path';
interface IProps {
  data: any;
}

const Index = ({ data }: IProps) => {
  const [target, setTarget] = useState<any>(); //클릭한 target 정보 저장

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

  useEffect(() => {
    setTarget(data && data[0]);
  }, [data]);

  return (
    <article className={styles.content}>
      <div className={styles.target_item}>
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
