import React from 'react';
import { useState } from 'react';
import ToogleButton from './ToogleButton';
import styles from './styles/quotecard.module.css';
import quotes from './quotesjson/quotes.json';

const colorGradientClass = [
  'grd_0',
  'grd_1',
  'grd_2',
  'grd_3',
  'grd_4',
  'grd_5',
  'grd_6',
  'grd_7',
  'grd_8',
  'grd_9',
];

const colorPath = [
  'color_0',
  'color_1',
  'color_2',
  'color_3',
  'color_4',
  'color_5',
  'color_6',
  'color_7',
  'color_8',
  'color_9',
];

const QuoteCard = () => {

  const getRandom = () => Math.floor(Math.random() * (quotes.length - 1));
  const backgroundColor = () => Math.floor(Math.random() * (colorGradientClass.length - 1));
  const randomColorContent = () => Math.floor(Math.random() * (colorPath.length - 1));
  let colorContent = randomColorContent();

  const [quote, setQuote] = useState(quotes[getRandom()]);

  const changeQuote = () => {
    let randonNum = getRandom();
    setQuote(quotes[randonNum]);
  };

  return (
    <div className={`${styles.card__wrapper} ${styles[colorGradientClass[backgroundColor()]]}`}>
      <section className={styles.card}>
        <section className={`${styles.quote__mark} ${styles[colorPath[colorContent]]}`}>
          <i className="fas fa-quote-left"></i>
        </section>
        <section className={styles.card__main}>
          <h2 className={`${styles.card__quote} ${styles[colorPath[colorContent]]}`}>{`${quote.quote}`}</h2>
          <p className={`${styles.card__author} ${styles[colorPath[colorContent]]}`}>{`- ${quote.author}`}</p>
        </section>
        <section className={styles.card__footer}>
          <ToogleButton onClick={changeQuote} colorBg={colorPath[colorContent]} />
        </section>
      </section >
    </div >
  );
};

export default QuoteCard;