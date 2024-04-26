import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastContext } from '../ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variantType, toastValue, toastId }) {
  const { toasts, setToasts } = React.useContext(ToastContext);

  const Icon = ICONS_BY_VARIANT[variantType ? variantType : 'notice'];
  const variantStyle = variantType ? styles[variantType] : styles.notice;

  const handleIsShow = (id) => {
    const filteredToasts = toasts.filter(({ toastId }) => toastId !== id);
    setToasts(filteredToasts);
  };

  return (
    <div className={`${styles.toast} ${variantStyle}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {toastValue ? toastValue : 'Toast message!'}
      </p>
      <button className={styles.closeButton}>
        <X onClick={() => handleIsShow(toastId)} size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
