import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShare,
  faDownload,
  faCut,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../../../constants/api';

interface IProps {
  targetItem: any;
}

const Index = ({ targetItem }: IProps) => {
  const [channel, setChannel] = useState<any>(); //채널정보
  const [count, setCount] = useState<number | string>(); //구독자 수

  //채널 이미지
  const channelSrc =
    (channel &&
      channel.snippet.thumbnails.high &&
      channel.snippet.thumbnails.high.url) ||
    (channel &&
      channel.snippet.thumbnails.medium &&
      channel.snippet.thumbnails.medium.url) ||
    (channel &&
      channel.snippet.thumbnails.default &&
      channel.snippet.thumbnails.default.url);

  //타겟의 동영상 가지고 오기
  const src = `http://www.youtube.com/embed/${
    (targetItem && targetItem.id.videoId && targetItem.id.videoId) ||
    (targetItem && targetItem.id && targetItem.id)
  }?enablejsapi=1&origin=http://example.com`;

  //채널 정보 가지고 오기
  const onChannel = async (id: any) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`,
      );
      setChannel(res.data.items[0]);
      handleFormatter(res.data.items[0].statistics.subscriberCount);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormatter = (data: number) => {
    const formatter = new Intl.NumberFormat(navigator.language, {
      notation: 'compact',
    });
    const add = formatter.format(data);
    setCount(add);
  };

  useEffect(() => {
    onChannel(targetItem.snippet.channelId);
  }, [targetItem]);

  return (
    <article className={styles.container}>
      <div className={styles.video}>
        <iframe
          id="player"
          width="100%"
          height="500px"
          src={src}
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay"
        ></iframe>
      </div>
      <div className={styles.video_info}>
        <div className={styles.channel_wrap}>
          <div className={styles.channel_left}>
            <div className={styles.channel_img}>
              <img src={channelSrc} alt="" />
            </div>
            <div className={styles.channel_text}>
              <h2>{channel && channel.snippet.title}</h2>
              <em>구독자 : {count && count}명</em>
            </div>
            <button>구독</button>
          </div>
          <div className={styles.channel_right}>
            <ul>
              <li>
                <button>
                  <FontAwesomeIcon icon={faShare} />
                  <em>공유</em>
                </button>
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon={faDownload} />
                  <em>오프라인 저장</em>
                </button>
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon={faCut} />
                  <em>클립</em>
                </button>
              </li>
              <li>
                <button>
                  <FontAwesomeIcon icon={faPlusSquare} />
                  <em>저장</em>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.video_text}>
          <h2>{targetItem && targetItem.snippet.title}</h2>
          <p>{targetItem && targetItem.snippet.description}</p>
        </div>
      </div>
    </article>
  );
};

export default Index;
