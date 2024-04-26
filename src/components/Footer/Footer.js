import React from 'react';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p>
        If you're interested on how I approached this project you can visit my
        repo on{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/galangeracharles17'
        >
          Github
        </a>
      </p>
    </footer>
  );
}

export default Footer;
