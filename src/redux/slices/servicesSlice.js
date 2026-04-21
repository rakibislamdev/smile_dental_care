import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [],
  loading: false,
  error: null,
  selectedService: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices(state, action) {
      state.services = action.payload;
    },
    addService(state, action) {
      state.services.push(action.payload);
    },
    updateService(state, action) {
      const index = state.services.findIndex(svc => svc.id === action.payload.id);
      if (index !== -1) {
        state.services[index] = action.payload;
      }
    },
    deleteService(state, action) {
      state.services = state.services.filter(svc => svc.id !== action.payload);
    },
    setSelectedService(state, action) {
      state.selectedService = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const {
  setServices,
  addService,
  updateService,
  deleteService,
  setSelectedService,
  setLoading,
  setError,
  clearError,
} = servicesSlice.actions;

export default servicesSlice.reducer;
