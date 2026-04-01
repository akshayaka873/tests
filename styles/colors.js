/**
 * Color Theme for Elderly Care App
 * High contrast, accessible colors optimized for senior citizens
 */

const COLORS = {
  // ===== PRIMARY COLORS =====
  PRIMARY: '#1E90FF',         // Bright Blue
  SECONDARY: '#FF6347',       // Tomato Red
  ACCENT: '#32CD32',          // Lime Green

  // ===== BACKGROUND COLORS =====
  DARK_BG: '#121212',         // Very Dark Gray (Main background)
  DARKER_BG: '#0A0A0A',       // Almost Black
  LIGHT_BG: '#FFFFFF',        // White
  CARD_BG: '#1E1E1E',         // Dark Gray (Card background)

  // ===== TEXT COLORS =====
  TEXT_PRIMARY: '#FFFFFF',    // White (Primary text)
  TEXT_SECONDARY: '#E0E0E0',  // Light Gray (Secondary text)
  TEXT_TERTIARY: '#A0A0A0',   // Medium Gray (Tertiary text)
  TEXT_DARK: '#000000',       // Black (For light backgrounds)

  // ===== STATUS COLORS =====
  SUCCESS: '#00FF00',         // Bright Green
  WARNING: '#FFD700',         // Gold/Yellow
  ERROR: '#FF0000',           // Bright Red
  INFO: '#00BFFF',            // Deep Sky Blue

  // ===== EMERGENCY COLORS =====
  SOS_RED: '#FF0000',         // Bright Red for SOS
  SOS_DARK: '#CC0000',        // Dark Red (pressed state)

  // ===== MEDICINE STATUS COLORS =====
  MEDICINE_PENDING: '#FFD700', // Gold/Yellow
  MEDICINE_TAKEN: '#00FF00',   // Green
  MEDICINE_MISSED: '#FF0000',  // Red

  // ===== HEALTH COLORS =====
  WATER_BLUE: '#1E90FF',       // Bright Blue
  SLEEP_PURPLE: '#9370DB',     // Medium Purple
  NUTRITION_GREEN: '#32CD32',  // Lime Green

  // ===== BUTTON COLORS =====
  BUTTON_BG: '#1E90FF',        // Primary Button
  BUTTON_PRESSED: '#1060CC',   // Darker Blue (pressed state)
  BUTTON_SECONDARY: '#696969', // Dim Gray
  BUTTON_DISABLED: '#505050',  // Dark Gray

  // ===== BORDER COLORS =====
  BORDER_LIGHT: '#404040',     // Light Border
  BORDER_DARK: '#202020',      // Dark Border
  BORDER_ACTIVE: '#1E90FF',    // Active Border (Blue)

  // ===== SHADOW COLORS =====
  SHADOW: '#000000',           // Black Shadow
  SHADOW_LIGHT: '#FFFFFF',     // White Shadow (Rare)

  // ===== NAVIGATION =====
  TAB_INACTIVE: '#696969',     // Dim Gray
  TAB_ACTIVE: '#1E90FF',       // Bright Blue

  // ===== UTILITY =====
  TRANSPARENT: 'transparent',
  OVERLAY: 'rgba(0, 0, 0, 0.7)', // 70% Black overlay

  // ===== DIET COLORS =====
  DIET_NORMAL: '#32CD32',      // Green
  DIET_DIABETES: '#FFD700',    // Gold
  DIET_BP: '#FF6347',          // Red

  // ===== ACCESSIBILITY =====
  HIGH_CONTRAST_TEXT: '#FFFFFF',
  HIGH_CONTRAST_BG: '#000000',
};

export default COLORS;