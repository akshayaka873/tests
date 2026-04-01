/**
 * Common Styles used across the application
 * Ensures consistency and easy maintenance
 */

import { COLORS } from './colors';
import { FONT_SIZES, TEXT_STYLES } from './fonts';

export const commonStyles = {
  // Container styles
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
  },
  
  containerPaddingTop: {
    paddingTop: 20,
  },
  
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  // Flex layouts
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  column: {
    flexDirection: 'column',
  },
  
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  centerHorizontal: {
    alignItems: 'center',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },

  // Cards and surfaces
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  
  cardElevated: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  surfacePanel: {
    backgroundColor: COLORS.surfaceAlt,
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
  },

  // Buttons (Large for accessibility)
  buttonLarge: {
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
  },
  
  buttonMedium: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  
  buttonSmall: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
  },
  
  buttonPrimary: {
    backgroundColor: COLORS.primary,
  },
  
  buttonSecondary: {
    backgroundColor: COLORS.secondary,
  },
  
  buttonSuccess: {
    backgroundColor: COLORS.success,
  },
  
  buttonWarning: {
    backgroundColor: COLORS.warning,
  },
  
  buttonError: {
    backgroundColor: COLORS.error,
  },
  
  buttonDisabled: {
    backgroundColor: COLORS.border,
    opacity: 0.5,
  },
  
  buttonText: {
    color: COLORS.text,
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
  },
  
  buttonTextSmall: {
    color: COLORS.text,
    fontSize: FONT_SIZES.mediumSmall,
    fontWeight: '600',
  },

  // Text styles
  heading: {
    fontSize: FONT_SIZES.extraLarge,
    fontWeight: '700',
    color: COLORS.text,
    marginVertical: 12,
  },
  
  subheading: {
    fontSize: FONT_SIZES.large,
    fontWeight: '600',
    color: COLORS.text,
    marginVertical: 8,
  },
  
  title: {
    fontSize: FONT_SIZES.medium,
    fontWeight: '600',
    color: COLORS.text,
  },
  
  body: {
    fontSize: FONT_SIZES.mediumSmall,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  
  label: {
    fontSize: FONT_SIZES.small,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  
  caption: {
    fontSize: FONT_SIZES.extraSmall,
    color: COLORS.textTertiary,
  },
  
  placeholder: {
    fontSize: FONT_SIZES.mediumSmall,
    color: COLORS.placeholder,
  },

  // Input fields
  input: {
    backgroundColor: COLORS.surfaceAlt,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: FONT_SIZES.medium,
    color: COLORS.text,
    minHeight: 50,
  },
  
  inputFocused: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  
  inputError: {
    borderColor: COLORS.error,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 12,
  },
  
  dividerThick: {
    height: 2,
    backgroundColor: COLORS.borderLight,
    marginVertical: 16,
  },

  // Spacing utilities
  marginVertical: (value) => ({ marginVertical: value }),
  marginHorizontal: (value) => ({ marginHorizontal: value }),
  padding: (value) => ({ padding: value }),
  paddingVertical: (value) => ({ paddingVertical: value }),
  paddingHorizontal: (value) => ({ paddingHorizontal: value }),

  // Scrollable container
  scrollContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalContent: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 20,
    width: '90%',
    maxWidth: 500,
  },

  // Shadow
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // Borders
  borderPrimary: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  
  borderSecondary: {
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  // Opacity
  disabledOpacity: {
    opacity: 0.5,
  },
  
  lowOpacity: {
    opacity: 0.3,
  },
};
