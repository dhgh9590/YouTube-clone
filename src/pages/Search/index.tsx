import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css';
import SearchSave from './SearchSave';
import { searchValue } from '../../context/search';
import axios from 'axios';
import { API_KEY } from '../../constants/api';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/path';

export const Search = () => {
  let value: any = localStorage.getItem('search');
  value = JSON.parse(value);
  const { search, setSearch } = useContext(searchValue);
  const [data, setData] = useState<any[]>(); //아이템 저장
  const [time, setTime] = useState<any[]>(); //아이템 시간 저장
  const navigate = useNavigate();

  const onData = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${search}&key=${API_KEY}`,
      );
      setData(res.data.items);
      const time = res.data.items.map((item: any) => {
        return item.snippet.publishTime;
      });
      const newTime = time.map((item: any) => {
        return item.slice(0, 10);
      });
      setTime(newTime);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setSearch(value);
    if (search) {
      onData();
    }
  }, [search]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SearchSave></SearchSave>
        <article className={styles.article}>
          <ul>
            {data &&
              data.map((item, index) => {
                return (
                  <li
                    key={item.etag}
                    onClick={() => {
                      localStorage.setItem('target', JSON.stringify(item));
                      navigate(PATH.Detail);
                    }}
                  >
                    <div className={styles.item_img}>
                      <img
                        src={
                          (item.snippet.thumbnails.high &&
                            item.snippet.thumbnails.high.url) ||
                          (item.snippet.thumbnails.medium &&
                            item.snippet.thumbnails.medium.url) ||
                          (item.snippet.thumbnails.default &&
                            item.snippet.thumbnails.default.url)
                        }
                        alt=""
                      />
                    </div>
                    <h2>{item.snippet.channelTitle}</h2>
                    <em>{time && time[index]}</em>
                  </li>
                );
              })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Search;
