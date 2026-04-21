import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctors: [],
  loading: false,
  error: null,
  selectedDoctor: null,
};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    setDoctors(state, action) {
      state.doctors = action.payload;
    },
    addDoctor(state, action) {
      state.doctors.push(action.payload);
    },
    updateDoctor(state, action) {
      const index = state.doctors.findIndex(doc => doc.id === action.payload.id);
      if (index !== -1) {
        state.doctors[index] = action.payload;
      }
    },
    deleteDoctor(state, action) {
      state.doctors = state.doctors.filter(doc => doc.id !== action.payload);
    },
    setSelectedDoctor(state, action) {
      state.selectedDoctor = action.payload;
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
  setDoctors,
  addDoctor,
  updateDoctor,
  deleteDoctor,
  setSelectedDoctor,
  setLoading,
  setError,
  clearError,
} = doctorsSlice.actions;

export default doctorsSlice.reducer;
