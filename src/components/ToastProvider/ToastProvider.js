import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleToastItem = React.useCallback(
    (variantType, toastValue) => {
      const nextToast = {
        toastId: crypto.randomUUID(),
        variant: variantType,
        message: toastValue,
        isShow: true,
      };

      setToasts([...toasts, nextToast]);
    },
    [toasts, setToasts]
  );

  const toastValue = React.useMemo(() => {
    return { toasts, setToasts };
  }, [toasts, setToasts]);

  // dismiss all toast
  useEscapeKey(() => setToasts([]));

  return (
    <ToastContext.Provider
      value={{
        ...toastValue,
        handleToastItem,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default React.memo(ToastProvider);
