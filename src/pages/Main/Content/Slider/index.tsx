import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

import type { IProps } from '../../../../interpace/ItemList';

const Index = ({ data, setTarget }: IProps) => {
  return (
    <div className={styles.slider_wrap}>
      <Swiper
        slidesPerView={'auto'}
        slidesPerGroup={1}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          350: {
            slidesPerView: 1.5,
          },
          430: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 2.5,
          },
          600: {
            slidesPerView: 3,
          },
          740: {
            slidesPerView: 4,
          },
          920: {
            slidesPerView: 3,
          },
          1050: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 7,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data &&
          data.map((item, index) => {
            return (
              <SwiperSlide key={item.id}>
                <div
                  className={`${styles.slide} slide`}
                  onClick={() => {
                    setTarget(item);
                  }}
                >
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
                  <div className={styles.slide_text}>
                    <h3>{item.snippet.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Index;
