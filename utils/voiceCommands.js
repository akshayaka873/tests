/**
 * Voice Command Processor
 * Handles all voice commands and generates intelligent responses
 */

import { getMedicines, getTodayHealthData, getEmergencyNumber } from './storage';
import CONSTANTS from './constants';

/**
 * Process voice command and generate response
 * @param {string} userInput - User's voice input (recognized text)
 * @returns {Promise<string>} Assistant's response
 */
export const processVoiceCommand = async (userInput) => {
  const input = userInput.toLowerCase().trim();

  // Medicine status command
  if (
    input.includes('did i take my medicine') ||
    input.includes('medicine status') ||
    input.includes('medicine')
  ) {
    return await getMedicineStatus();
  }

  // Schedule/next reminder command
  if (
    input.includes('what is my schedule') ||
    input.includes('next reminder') ||
    input.includes('schedule')
  ) {
    return await getSchedule();
  }

  // Health data command
  if (
    input.includes('how much water') ||
    input.includes('water intake') ||
    input.includes('water')
  ) {
    return await getHealthStatus();
  }

  // Emergency command
  if (
    input.includes('emergency') ||
    input.includes('call emergency') ||
    input.includes('help emergency')
  ) {
    return await getEmergencyInfo();
  }

  // Help command
  if (input.includes('help') || input.includes('commands')) {
    return getHelpMessage();
  }

  // Default response for unrecognized command
  return getDefaultResponse(userInput);
};

/**
 * Get current medicine status
 */
const getMedicineStatus = async () => {
  try {
    const medicines = await getMedicines();
    if (medicines.length === 0) {
      return "You don't have any medicines added yet.";
    }

    const today = new Date().toDateString();
    const todaysMedicines = medicines.filter(
      (med) =>
        new Date(med.createdAt).toDateString() === today ||
        med.status === 'pending'
    );

    if (todaysMedicines.length === 0) {
      return 'No medicines scheduled for today.';
    }

    let status = 'Today\'s medicine status:\n';
    const taken = todaysMedicines.filter((m) => m.status === 'taken').length;
    const pending = todaysMedicines.filter((m) => m.status === 'pending').length;
    const missed = todaysMedicines.filter((m) => m.status === 'missed').length;

    status += `Taken: ${taken}, Pending: ${pending}, Missed: ${missed}.`;
    return status;
  } catch (error) {
    console.error('Error getting medicine status:', error);
    return 'Unable to check medicine status. Please try again.';
  }
};

/**
 * Get next medicine reminder
 */
const getSchedule = async () => {
  try {
    const medicines = await getMedicines();
    if (medicines.length === 0) {
      return "You don't have any scheduled medicines.";
    }

    // Get pending medicines
    const pending = medicines.filter((m) => m.status === 'pending');
    if (pending.length === 0) {
      return 'All medicines for today are completed.';
    }

    const nextMedicine = pending[0];
    return `Your next medicine is ${nextMedicine.name} at ${nextMedicine.time}.`;
  } catch (error) {
    console.error('Error getting schedule:', error);
    return 'Unable to check schedule. Please try again.';
  }
};

/**
 * Get health data status
 */
const getHealthStatus = async () => {
  try {
    const healthData = await getTodayHealthData();
    const water = healthData.waterIntake || 0;
    const goal = CONSTANTS.HEALTH_SETTINGS.DAILY_WATER_GOAL;
    const remaining = Math.max(0, goal - water);

    return `You have consumed ${water} glasses of water today. You need ${remaining} more glasses to reach your daily goal of ${goal}.`;
  } catch (error) {
    console.error('Error getting health status:', error);
    return 'Unable to check health data. Please try again.';
  }
};

/**
 * Get emergency contact information
 */
const getEmergencyInfo = async () => {
  try {
    const emergencyNumber = await getEmergencyNumber();
    if (!emergencyNumber) {
      return 'No emergency number set. Please set an emergency contact number first.';
    }
    return `Your emergency contact is set to ${emergencyNumber}. Tap the large red SOS button on the home screen to call immediately.`;
  } catch (error) {
    console.error('Error getting emergency info:', error);
    return 'Unable to retrieve emergency information. Please try again.';
  }
};

/**
 * Get help message with available commands
 */
const getHelpMessage = () => {
  return `Available voice commands:\n1. "Did I take my medicine?" - Check medicine status\n2. "What is my schedule?" - Get next reminder\n3. "How much water did I drink?" - Check water intake\n4. "Emergency" - Get emergency contact info\n5. "Help" - Show this message`;
};

/**
 * Default response for unrecognized commands
 */
const getDefaultResponse = (userInput) => {
  const responses = [
    "I didn't quite understand that. Try saying: Did I take my medicine?",
    "Could you repeat that? Try asking about your medicine schedule.",
    "I'm not sure. Try saying: What is my schedule?",
    "That command is not recognized. Say Help for available commands.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

/**
 * Get time-based greeting
 */
export const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return 'Good morning! How can I help you?';
  } else if (hour < 18) {
    return 'Good afternoon! What do you need?';
  } else {
    return 'Good evening! How can I assist you?';
  }
};

/**
 * Format medicine time for display
 */
export const formatMedicineTime = (timeString) => {
  try {
    return timeString;
  } catch (error) {
    console.error('Error formatting time:', error);
    return timeString;
  }
};

export default {
  processVoiceCommand,
  getGreeting,
  formatMedicineTime,
};
