import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import NavBar from '../../components/NavBar';
import Content from './Content';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../../constants/api';

export const Main = () => {
  const [data, setData] = useState<any>(); //비디오 데이터 저장

  //비디오 데이터 가지고 오기
  const onData = async (id: number) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=kr&videoCategoryId=${id}&key=${API_KEY}`,
      );
      setData(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onData(10);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <NavBar onData={onData}></NavBar>
        <Content data={data}></Content>
      </div>
    </section>
  );
};

export default Main;
