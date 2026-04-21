import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarOpen: false,
  theme: 'light',
  notificationOpen: false,
  notificationMessage: '',
  notificationType: 'info', // 'info', 'success', 'error', 'warning'
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    closeSidebar(state) {
      state.sidebarOpen = false;
    },
    openSidebar(state) {
      state.sidebarOpen = true;
    },
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
    showNotification(state, action) {
      state.notificationOpen = true;
      state.notificationMessage = action.payload.message;
      state.notificationType = action.payload.type || 'info';
    },
    hideNotification(state) {
      state.notificationOpen = false;
      state.notificationMessage = '';
    },
  },
});

export const {
  toggleSidebar,
  closeSidebar,
  openSidebar,
  toggleTheme,
  setTheme,
  showNotification,
  hideNotification,
} = uiSlice.actions;

export default uiSlice.reducer;
