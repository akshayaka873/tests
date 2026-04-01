/**
 * App-wide Constants
 * Centralized configuration for the elderly care app
 */

// ===== MEDICINE SETTINGS =====
export const MEDICINE_SETTINGS = {
  REPEAT_ALERT_DELAY: 30 * 60 * 1000, // 30 minutes in milliseconds
  MAX_MEDICINES: 20,
};

// ===== HEALTH TRACKER SETTINGS =====
export const HEALTH_SETTINGS = {
  DAILY_WATER_GOAL: 8, // glasses
  DAILY_SLEEP_GOAL: 7, // hours
};

// ===== DIET OPTIONS =====
export const DIET_CONDITIONS = {
  normal: {
    name: 'Normal Diet',
    breakfast: ['Oatmeal with fruits', 'Whole wheat toast', 'Milk and cereal'],
    lunch: ['Grilled chicken with vegetables', 'Brown rice', 'Vegetable soup'],
    dinner: ['Baked fish', 'Steamed vegetables', 'Whole wheat roti'],
  },
  diabetes: {
    name: 'Diabetes Friendly',
    breakfast: ['Low-sugar oatmeal', 'Whole wheat bread', 'Unsweetened milk'],
    lunch: ['Lean meat with salad', 'Brown rice (½ cup)', 'Bitter gourd curry'],
    dinner: ['Grilled fish', 'Leafy vegetables', 'Whole wheat roti'],
  },
  bp: {
    name: 'High Blood Pressure',
    breakfast: ['Low-sodium oatmeal', 'Whole grain toast', 'Banana'],
    lunch: ['Boiled chicken (low salt)', 'Brown rice', 'Green vegetables'],
    dinner: ['Baked salmon', 'Steamed broccoli', 'Whole wheat roti'],
  },
};

// ===== VOICE ASSISTANT SETTINGS =====
export const VOICE_SETTINGS = {
  LANGUAGE: 'en-US',
  LISTEN_TIMEOUT: 5000, // 5 seconds
  MAX_HISTORY: 50,
};

// ===== UI SETTINGS =====
export const UI_SETTINGS = {
  LARGE_BUTTON_SIZE: 70,
  EXTRA_LARGE_BUTTON_SIZE: 120,
  TAB_ICON_SIZE: 24,
  CARD_BORDER_RADIUS: 12,
};

// ===== STATUS TYPES =====
export const STATUS_TYPES = {
  MEDICINE_PENDING: 'pending',
  MEDICINE_TAKEN: 'taken',
  MEDICINE_MISSED: 'missed',
};

// ===== ERROR MESSAGES =====
export const ERROR_MESSAGES = {
  EMERGENCY_NUMBER_REQUIRED: 'Please set an emergency number first',
  MICROPHONE_PERMISSION_DENIED: 'Microphone permission denied. Please enable it in settings.',
  NO_SPEECH_DETECTED: 'No speech detected. Please try again.',
  MEDICINE_NAME_REQUIRED: 'Please enter medicine name',
  MEDICINE_TIME_REQUIRED: 'Please select medicine time',
  INVALID_PHONE_NUMBER: 'Please enter a valid phone number',
  FILE_UPLOAD_FAILED: 'File upload failed. Please try again.',
};

// ===== SUCCESS MESSAGES =====
export const SUCCESS_MESSAGES = {
  MEDICINE_ADDED: 'Medicine added successfully',
  MEDICINE_UPDATED: 'Medicine status updated',
  EMERGENCY_NUMBER_SAVED: 'Emergency number saved',
  FILE_UPLOADED: 'File uploaded successfully',
  DATA_SAVED: 'Data saved successfully',
};

// ===== NOTIFICATION MESSAGES =====
export const NOTIFICATION_MESSAGES = {
  MEDICINE_REMINDER: 'Time to take your medicine: ',
  MEDICINE_REMINDER_REPEAT: 'Reminder: Did you take your medicine? ',
  EMERGENCY_ALERT: 'Emergency alert activated',
};

// ===== DATE & TIME FORMATS =====
export const DATE_TIME_FORMAT = {
  TIME_FORMAT: 'HH:MM', // 24-hour format
  DATE_FORMAT: 'DD/MM/YYYY',
  FULL_FORMAT: 'DD/MM/YYYY HH:MM',
};

// ===== VOICE COMMANDS =====
export const VOICE_COMMANDS = [
  {
    command: 'Did I take my medicine?',
    category: 'Medicine',
    description: 'Check your medicine status',
  },
  {
    command: 'What is my schedule?',
    category: 'Schedule',
    description: 'View upcoming reminders',
  },
  {
    command: 'Help',
    category: 'General',
    description: 'Show available commands',
  },
  {
    command: 'Call emergency',
    category: 'Emergency',
    description: 'Activate emergency call',
  },
];

// ===== FILE UPLOAD SETTINGS =====
export const FILE_UPLOAD_SETTINGS = {
  MAX_FILE_SIZE: 50 * 1024 * 1024, // 50 MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'application/pdf'],
  MAX_DOCUMENTS: 100,
};

// ===== COLOR PRESETS =====
export const COLOR_PRESETS = {
  HIGH_CONTRAST: true,
  DARK_MODE: true,
};

export default {
  MEDICINE_SETTINGS,
  HEALTH_SETTINGS,
  DIET_CONDITIONS,
  VOICE_SETTINGS,
  UI_SETTINGS,
};
