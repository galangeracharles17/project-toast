import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.length > 0 &&
        toasts.map(({ toastId, variant, message, isShow }) => {
          return (
            <React.Fragment key={toastId}>
              {isShow && (
                <li className={styles.toastWrapper}>
                  <Toast
                    variantType={variant}
                    toastValue={message}
                    toastId={toastId}
                  />
                </li>
              )}
            </React.Fragment>
          );
        })}
    </ol>
  );
}

export default ToastShelf;
