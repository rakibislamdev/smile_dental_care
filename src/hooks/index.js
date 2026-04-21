import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import apiClient from '../utils/api';

/**
 * useApi Hook - Handle API calls with loading and error states
 */
export const useApi = () => {
  const dispatch = useDispatch();

  const request = useCallback(async (config, onSuccess, onError) => {
    try {
      const response = await apiClient(config);
      if (onSuccess) {
        onSuccess(response);
      }
      return response;
    } catch (error) {
      if (onError) {
        onError(error);
      }
      throw error;
    }
  }, [dispatch]);

  return { request };
};

/**
 * useDebounce Hook - Debounce values
 */
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = require('react').useState(value);

  require('react').useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

/**
 * usePrevious Hook - Get previous value
 */
export const usePrevious = (value) => {
  const ref = require('react').useRef();

  require('react').useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

/**
 * useLocalStorage Hook - Store and retrieve from localStorage
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = require('react').useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('LocalStorage get error:', error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('LocalStorage set error:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};

/**
 * useWindowSize Hook - Get window dimensions
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = require('react').useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  require('react').useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

/**
 * useIntersectionObserver Hook - Observe element intersection
 */
export const useIntersectionObserver = (ref, options = {}) => {
  const [isVisible, setIsVisible] = require('react').useState(false);

  require('react').useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
};
