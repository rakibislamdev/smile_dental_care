// Appointment Selectors
export const selectAppointments = (state) => state.appointments.appointments;
export const selectAppointmentLoading = (state) => state.appointments.loading;
export const selectAppointmentError = (state) => state.appointments.error;
export const selectSelectedAppointment = (state) => state.appointments.selectedAppointment;

// Services Selectors
export const selectServices = (state) => state.services.services;
export const selectServicesLoading = (state) => state.services.loading;
export const selectServicesError = (state) => state.services.error;
export const selectSelectedService = (state) => state.services.selectedService;

// Doctors Selectors
export const selectDoctors = (state) => state.doctors.doctors;
export const selectDoctorsLoading = (state) => state.doctors.loading;
export const selectDoctorsError = (state) => state.doctors.error;
export const selectSelectedDoctor = (state) => state.doctors.selectedDoctor;

// Contact Selectors
export const selectMessages = (state) => state.contact.messages;
export const selectContactLoading = (state) => state.contact.loading;
export const selectContactError = (state) => state.contact.error;
export const selectContactSuccess = (state) => state.contact.success;

// UI Selectors
export const selectSidebarOpen = (state) => state.ui.sidebarOpen;
export const selectTheme = (state) => state.ui.theme;
export const selectNotificationOpen = (state) => state.ui.notificationOpen;
export const selectNotificationTitle = (state) => state.ui.notificationTitle;
export const selectNotificationMessage = (state) => state.ui.notificationMessage;
export const selectNotificationType = (state) => state.ui.notificationType;
