/**
 * AsyncStorage Manager
 * Handles all local storage operations for the app
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  EMERGENCY_NUMBER: '@elderlycare_emergency_number',
  MEDICINES: '@elderlycare_medicines',
  MEDICINE_HISTORY: '@elderlycare_medicine_history',
  HEALTH_DATA: '@elderlycare_health_data',
  MEDICAL_RECORDS: '@elderlycare_medical_records',
  VOICE_HISTORY: '@elderlycare_voice_history',
  USER_PROFILE: '@elderlycare_user_profile',
};

// Emergency Number Functions
export const saveEmergencyNumber = async (phoneNumber) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.EMERGENCY_NUMBER, phoneNumber);
    return true;
  } catch (error) {
    console.error('Error saving emergency number:', error);
    return false;
  }
};

export const getEmergencyNumber = async () => {
  try {
    const number = await AsyncStorage.getItem(STORAGE_KEYS.EMERGENCY_NUMBER);
    return number;
  } catch (error) {
    console.error('Error retrieving emergency number:', error);
    return null;
  }
};

// Medicine Functions
export const addMedicine = async (medicine) => {
  try {
    const medicines = await getMedicines();
    const newMedicine = {
      ...medicine,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'pending',
    };
    medicines.push(newMedicine);
    await AsyncStorage.setItem(STORAGE_KEYS.MEDICINES, JSON.stringify(medicines));
    return newMedicine;
  } catch (error) {
    console.error('Error adding medicine:', error);
    return null;
  }
};

export const getMedicines = async () => {
  try {
    const medicines = await AsyncStorage.getItem(STORAGE_KEYS.MEDICINES);
    return medicines ? JSON.parse(medicines) : [];
  } catch (error) {
    console.error('Error retrieving medicines:', error);
    return [];
  }
};

export const updateMedicineStatus = async (medicineId, status) => {
  try {
    const medicines = await getMedicines();
    const updated = medicines.map((med) =>
      med.id === medicineId
        ? { ...med, status, updatedAt: new Date().toISOString() }
        : med
    );
    await AsyncStorage.setItem(STORAGE_KEYS.MEDICINES, JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error('Error updating medicine status:', error);
    return false;
  }
};

export const deleteMedicine = async (medicineId) => {
  try {
    const medicines = await getMedicines();
    const filtered = medicines.filter((med) => med.id !== medicineId);
    await AsyncStorage.setItem(STORAGE_KEYS.MEDICINES, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting medicine:', error);
    return false;
  }
};

// Health Tracker Functions
export const getTodayHealthData = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.HEALTH_DATA);
    if (!data) {
      return {
        date: new Date().toISOString().split('T')[0],
        waterIntake: 0,
        sleepHours: 0,
      };
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error retrieving health data:', error);
    return { waterIntake: 0, sleepHours: 0 };
  }
};

export const updateWaterIntake = async (glasses) => {
  try {
    const data = await getTodayHealthData();
    data.waterIntake = (data.waterIntake || 0) + glasses;
    await AsyncStorage.setItem(STORAGE_KEYS.HEALTH_DATA, JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Error updating water intake:', error);
    return null;
  }
};

export const updateSleepHours = async (hours) => {
  try {
    const data = await getTodayHealthData();
    data.sleepHours = hours;
    await AsyncStorage.setItem(STORAGE_KEYS.HEALTH_DATA, JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Error updating sleep hours:', error);
    return null;
  }
};

// Medical Records Functions
export const addMedicalRecord = async (record) => {
  try {
    const records = await getMedicalRecords();
    const newRecord = {
      ...record,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    records.push(newRecord);
    await AsyncStorage.setItem(STORAGE_KEYS.MEDICAL_RECORDS, JSON.stringify(records));
    return newRecord;
  } catch (error) {
    console.error('Error adding medical record:', error);
    return null;
  }
};

export const getMedicalRecords = async () => {
  try {
    const records = await AsyncStorage.getItem(STORAGE_KEYS.MEDICAL_RECORDS);
    return records ? JSON.parse(records) : [];
  } catch (error) {
    console.error('Error retrieving medical records:', error);
    return [];
  }
};

export const deleteMedicalRecord = async (recordId) => {
  try {
    const records = await getMedicalRecords();
    const filtered = records.filter((rec) => rec.id !== recordId);
    await AsyncStorage.setItem(STORAGE_KEYS.MEDICAL_RECORDS, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting medical record:', error);
    return false;
  }
};

// Voice History Functions
export const addVoiceInteraction = async (interaction) => {
  try {
    const history = await getVoiceHistory();
    const newInteraction = {
      ...interaction,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    };
    history.push(newInteraction);
    const trimmed = history.slice(-50);
    await AsyncStorage.setItem(STORAGE_KEYS.VOICE_HISTORY, JSON.stringify(trimmed));
    return newInteraction;
  } catch (error) {
    console.error('Error adding voice interaction:', error);
    return null;
  }
};

export const getVoiceHistory = async () => {
  try {
    const history = await AsyncStorage.getItem(STORAGE_KEYS.VOICE_HISTORY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error retrieving voice history:', error);
    return [];}
};

// Clear All Data
export const clearAllData = async () => {
  try {
    await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
    return true;
  } catch (error) {
    console.error('Error clearing all data:', error);
    return false;
  }
};

export default {
  saveEmergencyNumber,
  getEmergencyNumber,
  addMedicine,
  getMedicines,
  updateMedicineStatus,
  deleteMedicine,
  getTodayHealthData,
  updateWaterIntake,
  updateSleepHours,
  addMedicalRecord,
  getMedicalRecords,
  deleteMedicalRecord,
  addVoiceInteraction,
  getVoiceHistory,
  clearAllData,
};
