import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_KEY, BASE_URL } from '../../../constants/api';
import { PATH } from '../../../constants/path';
import styles from './style.module.css';

interface IProps {
  targetItem: any;
  setTargetItem: any;
}

const Index = ({ targetItem, setTargetItem }: IProps) => {
  //로컬스토리지에서 타겟 정보 가지고 오기
  const [data, setData] = useState<any[]>(); //연관된 비디오 정보
  const navigate = useNavigate();

  //연관된 비디오
  const onData = async (id: string) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/youtube/v3/search?part=snippet&maxResults=12&relatedToVideoId=${id}&type=video&key=${API_KEY}`,
      );
      setData(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onData(
      (targetItem && targetItem.id.videoId && targetItem.id.videoId) ||
        (targetItem && targetItem.id && targetItem.id),
    );
  }, [targetItem]);

  return (
    <article className={styles.container}>
      <div
        className={styles.logo}
        onClick={() => {
          navigate(PATH.MAIN);
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" />
      </div>
      <ul>
        {data &&
          data.map(item => {
            return (
              <li
                key={item.id.videoId}
                onClick={() => {
                  setTargetItem(item);
                  localStorage.setItem('target', JSON.stringify(item));
                }}
              >
                <div className={styles.video}>
                  <img
                    src={
                      (item.snippet.thumbnails.maxres &&
                        item.snippet.thumbnails.maxres.url) ||
                      (item.snippet.thumbnails.standard &&
                        item.snippet.thumbnails.standard.url) ||
                      (item.snippet.thumbnails.high &&
                        item.snippet.thumbnails.high.url) ||
                      (item.snippet.thumbnails.default &&
                        item.snippet.thumbnails.default.url)
                    }
                    alt=""
                  />
                  <h2>{item && item.snippet.title}</h2>
                </div>
              </li>
            );
          })}
      </ul>
    </article>
  );
};

export default Index;
