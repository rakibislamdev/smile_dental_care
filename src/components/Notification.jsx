import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheckCircle, FiAlertTriangle, FiInfo, FiX } from 'react-icons/fi';
import {
  hideNotification,
} from '../redux/slices/uiSlice';
import {
  selectNotificationMessage,
  selectNotificationOpen,
  selectNotificationTitle,
  selectNotificationType,
} from '../redux/selectors';
import './Notification.css';

const iconMap = {
  success: <FiCheckCircle size={22} />,
  error: <FiAlertTriangle size={22} />,
  warning: <FiAlertTriangle size={22} />,
  info: <FiInfo size={22} />,
};

const Notification = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectNotificationOpen);
  const title = useSelector(selectNotificationTitle);
  const message = useSelector(selectNotificationMessage);
  const type = useSelector(selectNotificationType);

  useEffect(() => {
    if (!isOpen) return undefined;

    const timer = setTimeout(() => {
      dispatch(hideNotification());
    }, 4000);

    return () => clearTimeout(timer);
  }, [dispatch, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`notification-toast notification-${type}`}
          role="alert"
          aria-live="assertive"
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.96 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <div className="notification-icon">{iconMap[type] || iconMap.info}</div>
          <div className="notification-content">
            <strong>{title || 'Notification'}</strong>
            <p>{message}</p>
          </div>
          <button
            type="button"
            className="notification-close"
            onClick={() => dispatch(hideNotification())}
            aria-label="Close notification"
          >
            <FiX size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;