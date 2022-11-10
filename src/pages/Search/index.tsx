import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import SearchSave from './SearchSave';
import { searchValue } from '../../context/search';
import axios from 'axios';
import { API_KEY } from '../../constants/api';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/path';
import usePopupClose from '../../hooks/usePopupClose';

export const Search = () => {
  let value: any = localStorage.getItem('search');
  value = JSON.parse(value);
  const { search, setSearch } = useContext(searchValue);
  const [data, setData] = useState<any[]>(); //아이템 저장
  const [time, setTime] = useState<any[]>(); //아이템 시간 저장
  const filterList = useRef<any>(null);
  const [filterText, setFilterText] = useState<any>('관련성'); //필터 텍스트 저장
  const [filterToggle, setFilterToggle] = useState<any>(false); //필터 토글
  const navigate = useNavigate();
  const filterType = usePopupClose(filterList);

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

  //최신순 정렬
  const filter = () => {
    const newData: any = data && [...data];
    const filter =
      newData &&
      newData.sort((a: any, b: any) => {
        return (
          +new Date(b.snippet.publishTime) - +new Date(a.snippet.publishTime)
        );
      });

    //시간 최신순 정렬
    const newTime: any = time && [...time];
    const filterTime =
      newTime &&
      newTime.sort((a: any, b: any) => {
        return +new Date(b) - +new Date(a);
      });

    setData(filter);
    setTime(filterTime);
  };

  //필터 텍스트 변경
  const onChangeFilter = (e: any) => {
    e.stopPropagation();
    setFilterText(e.currentTarget.textContent);
    setFilterToggle(false);
  };

  useEffect(() => {
    setSearch(value);
    if (search) {
      onData();
    }
  }, [search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className={styles.section}
      onClick={() => {
        setFilterToggle(filterType);
      }}
    >
      <div className={styles.container}>
        <SearchSave></SearchSave>
        <article className={styles.article}>
          <div className={styles.filter}>
            <div className={styles.filter_container} ref={filterList}>
              <button>
                <em
                  onClick={() => {
                    setFilterToggle(false);
                  }}
                >
                  {filterText}
                </em>
              </button>
              {filterToggle == true && (
                <ul>
                  <li
                    onClick={e => {
                      onData();
                      onChangeFilter(e);
                    }}
                  >
                    관련성
                  </li>
                  <li
                    onClick={e => {
                      filter();
                      onChangeFilter(e);
                    }}
                  >
                    최신순
                  </li>
                </ul>
              )}
            </div>
          </div>
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
                    <h2>{item.snippet.title}</h2>
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
