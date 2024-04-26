import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

import { ToastContext } from '../ToastProvider';
import useTabSelection from '../../hooks/useTabSelection';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { handleToastItem: handleNextToast } = React.useContext(ToastContext);

  const [variantType, setVariantType] = React.useState('notice');
  const [toastValue, setToastValue] = React.useState('');

  // Select variant on tab key
  useTabSelection(variantType, setVariantType, VARIANT_OPTIONS);

  const handleToastItem = (event) => {
    event.preventDefault();

    handleNextToast(variantType, toastValue);
    setToastValue('');
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form className={styles.controlsWrapper} onSubmit={handleToastItem}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              className={styles.messageInput}
              placeholder='Toast message here!'
              value={toastValue}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleToastItem(event);
                }
              }}
              onChange={(event) => {
                setToastValue(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variantItem) => (
              <label key={variantItem} htmlFor={`variant-${variantItem}`}>
                <input
                  id={`variant-${variantItem}`}
                  type='radio'
                  name='variant'
                  value={variantItem}
                  checked={variantType === variantItem}
                  onChange={(event) => setVariantType(event.target.value)}
                />
                {variantItem}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
