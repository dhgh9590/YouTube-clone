import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Video from './Video';
import RelatedVideo from './RelatedVideo';

export const Detail = () => {
  //로컬스토리지에서 타겟 정보 가지고 오기
  let target: any = localStorage.getItem('target');
  target = JSON.parse(target);
  const [targetItem, setTargetItem] = useState(target);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.container}>
      <article className={styles.article}>
        <Video targetItem={targetItem}></Video>
        <RelatedVideo
          targetItem={targetItem}
          setTargetItem={setTargetItem}
        ></RelatedVideo>
      </article>
    </section>
  );
};

export default Detail;
