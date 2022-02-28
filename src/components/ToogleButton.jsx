import React from 'react';
import styles from './styles/tooglebutton.module.css';

const ToogleButton = ({ onClick, colorBg }) => {

  return (
    <div className={styles.button__wrapper}>
      <button className={`${styles.button} ${styles[colorBg]}`} onClick={onClick}>
        <p>generate</p>
        <i className="fa-solid fa-arrow-rotate-right"></i>
      </button>
    </div >
  );
};

export default ToogleButton;