import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './slices/appointmentSlice';
import servicesReducer from './slices/servicesSlice';
import doctorsReducer from './slices/doctorsSlice';
import contactReducer from './slices/contactSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
    services: servicesReducer,
    doctors: doctorsReducer,
    contact: contactReducer,
    ui: uiReducer,
  },
});

export default store;
