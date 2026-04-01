# 🏥 Elderly Care Mobile Application

A comprehensive React Native application specifically designed for senior citizens to manage their healthcare needs with a simple, accessible, and user-friendly interface.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [Features in Detail](#features-in-detail)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Customization](#customization)
- [Deployment](#deployment)
- [Support](#support)

---

## ✨ Features

### 1. **Smart Medicine Reminder System**
- Add medicines with name, time, and dosage information
- Receive automatic notifications/reminders
- Mark medicines as "Taken" or "Missed"
- Automatic repeat alerts for missed doses
- Complete medicine history and tracking
- Persistent local storage

### 2. **One-Tap SOS Emergency System**
- Large, prominent red SOS button on home screen
- Quick emergency contact number setup
- Direct phone call integration
- Fallback alert system for unsupported devices
- Always accessible from any screen

### 3. **Voice-Based Assistant Chatbot**
- Floating microphone button (always visible)
- Full-screen voice interface with:
  - Real-time Speech-to-Text conversion
  - Text-to-Speech response playback
  - Chat history display
  - Simple, large interface
  - 5 intelligent voice commands:
    - "Did I take my medicine?" → Medicine status
    - "What is my schedule?" → Next reminder
    - "How much water did I drink?" → Health tracking
    - "Emergency" → Emergency contact info
    - "Help" → Available commands

### 4. **Basic Health Tracker**
- Water intake tracking with +1 glass buttons
- Sleep hours manual input
- Daily progress visualization
- Simple statistics display

### 5. **Diet Suggestion System**
- Select dietary condition (Normal/Diabetes/High BP)
- Customized meal plans for:
  - Breakfast recommendations
  - Lunch recommendations
  - Dinner recommendations
- Easy-to-read card layout

### 6. **Medical Records Vault**
- Upload medical files (PDFs/Images)
- Store files locally
- View documents in list format
- Click-to-view functionality
- File metadata (name, date)

---

## 🛠️ Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (v6 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Expo CLI** - Install globally: `npm install -g expo-cli`
- **Phone/Emulator:**
  - iOS: iPhone with Expo Go app or Mac with iOS Simulator
  - Android: Android phone with Expo Go or Android Emulator
  - Web: Any modern browser

Verify installation:
```bash
node --version
npm --version
git --version
expo --version
```

---

## 📥 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/akshayaka873/tests.git
cd tests
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- React Native & Expo
- React Navigation for routing
- AsyncStorage for local data persistence
- Speech & Audio APIs
- And all other required packages

### Step 3: Verify Installation
Check that all files are in place:
```bash
ls -la
# You should see:
# - app.json
# - package.json
# - App.js
# - utils/ (folder)
# - styles/ (folder)
```

### Step 4: Start the Development Server
```bash
npm start
```

You should see output like:
```
Expo DevTools is running at ws://localhost:19000
...
To run the app:
  › Android: press 'a'
  › iOS: press 'i'
  › Web: press 'w'
```

### Step 5: Run on Your Device
Choose one option:

**Option A: Mobile Device (Recommended)**
1. Download Expo Go from your app store
2. Scan the QR code shown in terminal
3. App opens automatically on your phone

**Option B: Android Emulator**
1. Ensure Android Emulator is running
2. Press 'a' in the terminal

**Option C: iOS Simulator**
1. Ensure you have Mac with Xcode
2. Press 'i' in the terminal

**Option D: Web Browser**
1. Press 'w' in the terminal
2. Opens at localhost:19006

---

## 📁 Project Structure

```
tests/
├── app.json                    # Expo configuration
├── package.json                # Dependencies
├── App.js                      # Main app & navigation
├── utils/                      # Utility functions
│   ├── constants.js           # App-wide constants
│   ├── storage.js             # AsyncStorage manager
│   └── voiceCommands.js       # Voice command processor
├── styles/                     # Styling system
│   ├── colors.js              # Color theme (high contrast)
│   ├── fonts.js               # Typography system
│   └── commonStyles.js        # Reusable component styles
├── components/                 # Reusable UI components (to be created)
│   ├── MedicineCard.js
│   ├── EmergencyButton.js
│   ├── VoiceButton.js
│   └── ... (more components)
├── screens/                    # Screen components (to be created)
│   ├── HomeScreen.js
│   ├── MedicineScreen.js
│   ├── HealthTrackerScreen.js
│   ├── DietScreen.js
│   ├── MedicalRecordsScreen.js
│   └── VoiceAssistantScreen.js
├── assets/                     # Images and icons (to be created)
└── README.md                   # This file
```

---

## 📖 Usage Guide

### First Time Setup

1. **Set Emergency Contact (Home Screen)**
   - Tap "Set Emergency Number" button
   - Enter phone number
   - Save
   - This number will be used for SOS calls

2. **Add Your First Medicine (Medicine Tab)**
   - Tap "Add Medicine" button
   - Enter medicine name (e.g., "Aspirin")
   - Select time (e.g., 9:00 AM)
   - Tap Save
   - Medicine will appear in your list

3. **Try Voice Commands (Voice Button)**
   - Tap the floating microphone at bottom-right
   - Speak your command (e.g., "Did I take my medicine?")
   - Listen to response

### Daily Routine

**Morning:**
1. Check home screen for pending reminders
2. Open Medicine tab
3. Mark medicines as "Taken"

**Throughout Day:**
1. Track water intake (Health > Add Glass)
2. Access voice assistant for quick info
3. Use SOS button if emergency

**Evening:**
1. Log sleep hours (Health > Sleep)
2. Review diet suggestions
3. Check medical records if needed

---

## 🎯 Features in Detail

### Smart Medicine Reminder

**How to Add Medicine:**
1. Go to Medicine tab
2. Tap "Add New Medicine" (large button)
3. Enter:
   - Medicine name
   - Time of day
   - Dosage (optional)
4. Tap "Save"

**How to Mark as Taken:**
1. See medicine in your list
2. Tap "Taken" button
3. Status changes to green ✓

**How to Mark as Missed:**
1. See medicine in your list
2. Tap "Missed" button
3. Alert will repeat in 30 minutes

**Medicine Status Indicators:**
- 🟡 Yellow = Pending (not taken yet)
- 🟢 Green = Taken
- 🔴 Red = Missed

---

### Emergency SOS System

**Setup Emergency Number:**
1. Go to Home screen
2. Look for "Set Emergency" button
3. Tap to open dialog
4. Enter phone number with country code
5. Save

**Use SOS in Emergency:**
1. Tap large RED SOS button
2. Phone call initiates immediately
3. Speak with emergency contact

**Important Notes:**
- SOS button is RED and always visible
- Works only if emergency number is set
- Requires calling permissions enabled
- Falls back to alert if calling unavailable

---

### Voice Assistant Chatbot

**Available Commands:**
1. "Did I take my medicine?" → Shows today's medicine status
2. "What is my schedule?" → Shows next medicine reminder
3. "How much water did I drink?" → Shows water intake
4. "Emergency" → Shows emergency contact
5. "Help" → Lists all commands

**How to Use:**
1. Tap microphone button (bottom-right)
2. Voice interface opens
3. Tap "Tap to Speak" button
4. Speak clearly
5. App processes and responds
6. Tap close to dismiss

**Tips:**
- Speak clearly and slowly
- Use natural language
- Say command naturally
- App listens for 5 seconds

---

### Health Tracker

**Water Intake:**
1. Go to Health tab
2. Tap "+1 Glass" button (large)
3. Tap multiple times (each = 1 glass)
4. Progress bar shows daily goal (8 glasses)

**Sleep Hours:**
1. Go to Health tab
2. Enter number in text field
3. Tap "Save Sleep"
4. Shows against daily goal (7 hours)

**Daily Reset:**
- Water and sleep reset daily at midnight
- Progress bars reset automatically

---

### Diet Suggestions

**How to Use:**
1. Go to Diet tab
2. Select condition from dropdown:
   - Normal
   - Diabetes
   - High Blood Pressure
3. View suggested meals
4. See Breakfast, Lunch, Dinner options

**Sample Plans:**
- **Normal:** Balanced nutrition
- **Diabetes:** Low sugar, high fiber
- **High BP:** Low sodium options

---

### Medical Records Vault

**Upload File:**
1. Go to Records tab
2. Tap "Upload Document" button
3. Select image or PDF
4. File saves automatically

**View Files:**
1. See list of uploaded files
2. Each shows name and upload date
3. Tap file to view
4. Tap delete to remove

**File Storage:**
- Files stored locally on device
- No cloud sync (for privacy)
- Backup regularly

---

## 🔧 Troubleshooting

### App Won't Start
**Problem:** "Unable to connect to packager"
```bash
# Solution 1: Clear cache
expo start -c

# Solution 2: Reset node modules
rm -rf node_modules
npm install
npm start
```

### Microphone Permission Denied
**Problem:** Voice commands not working, permission error
```
Solution:
1. Go to Phone Settings > Permissions
2. Find "Tests" or "Elderly Care App"
3. Enable Microphone permission
4. Restart app
```

### Emergency Call Not Working
**Problem:** SOS button doesn't initiate call
```
Solution:
1. Ensure emergency number is set (Home tab)
2. Check calling permissions in phone settings
3. Try using web version (alert popup will show)
4. Verify phone number format (with country code)
```

### Medicine Reminders Not Appearing
**Problem:** No notifications for medicine time
```
Solution:
1. Check phone notification settings
2. Ensure app notifications are enabled
3. Add medicine with correct time
4. App may need to be active in foreground
```

### Voice Commands Not Recognized
**Problem:** App doesn't understand what I'm saying
```
Solution:
1. Speak clearly and slowly
2. Use simpler words
3. Check microphone volume
4. Try phrase exactly: "Did I take my medicine?"
5. Use English language setting
```

### Data Loss After Restart
**Problem:** Medicines or health data disappeared
```
Solution:
1. Data is stored locally (device-only)
2. Data persists after app restart
3. Only lost if app cache is cleared
4. Backup important data regularly
```

### Slow Performance
**Problem:** App is slow or freezes
```
Solution:
1. Close other apps
2. Clear app cache: expo start -c
3. Restart phone
4. Delete and reinstall app
5. Check available storage space
```

---

## 💻 Development

### Available Commands

```bash
# Start development server
npm start

# Run on Android emulator
npm run android

# Run on iOS simulator (Mac only)
npm run ios

# Run in web browser
npm run web

# Clear cache and rebuild
npm start -- -c

# Build for deployment
expo build:android
expo build:ios
```

### Creating New Components

**Template for new component:**
```javascript
// components/MyComponent.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import commonStyles from '../styles/commonStyles';
import COLORS from '../styles/colors';

export const MyComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={commonStyles.button}
      onPress={onPress}
    >
      <Text style={commonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyComponent;
```

### Creating New Screens

**Template for new screen:**
```javascript
// screens/MyScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import commonStyles from '../styles/commonStyles';
import COLORS from '../styles/colors';
import { getMedicines } from '../utils/storage';

export const MyScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const medicines = await getMedicines();
    setData(medicines);
  };

  return (
    <ScrollView style={commonStyles.screenContainer}>
      <Text style={commonStyles.heading}>My Screen</Text>
      {/* Add content here */}
    </ScrollView>
  );
};

export default MyScreen;
```

---

## 🎨 Customization

### Change Theme Colors

Edit `styles/colors.js`:
```javascript
// Example: Change primary color
PRIMARY: '#FF5733',  // Your color instead of blue
ACCENT_BLUE: '#33FF57',
```

### Adjust Button Sizes

Edit `styles/commonStyles.js`:
```javascript
button: {
  paddingVertical: 20,  // Increase for larger buttons
  paddingHorizontal: 30,
  // ... other properties
}
```

### Modify Font Sizes

Edit `styles/fonts.js`:
```javascript
EXTRA_LARGE: 48,  // Increase from 32
LARGE: 36,        // Increase from 28
```

### Add New Medicine Status

Edit `utils/constants.js`:
```javascript
STATUS_TYPES = {
  MEDICINE_PENDING: 'pending',
  MEDICINE_TAKEN: 'taken',
  MEDICINE_MISSED: 'missed',
  MEDICINE_SNOOZED: 'snoozed',  // New status
}
```

### Customize Diet Plans

Edit `utils/constants.js`:
```javascript
DIET_CONDITIONS = {
  custom: {
    name: 'My Custom Diet',
    breakfast: ['Option 1', 'Option 2'],
    lunch: ['Option 1', 'Option 2'],
    dinner: ['Option 1', 'Option 2'],
  }
}
```

---

## 🚀 Deployment

### For Hackathon Submission

**Pre-Deployment Checklist:**
- [ ] All screens implemented
- [ ] All features tested on device
- [ ] No console errors
- [ ] Emergency number setup works
- [ ] Voice commands functional
- [ ] SOS button operational
- [ ] UI is accessible (large text, high contrast)
- [ ] Navigation works smoothly
- [ ] Data persists after restart
- [ ] Performance is acceptable

**Demo Script (5 minutes):**
1. Show home screen with SOS button (1 min)
2. Add medicine and show reminders (1 min)
3. Demonstrate voice commands (1.5 min)
4. Show health tracking (30 sec)
5. Show medical records upload (30 sec)

**Build for Production:**
```bash
# Build for Android
expo build:android

# Build for iOS (requires Apple account)
expo build:ios

# Or use EAS (Expo's new build service)
eas build --platform android
eas build --platform ios
```

### Generate APK for Android

```bash
# Using Expo EAS (recommended)
npm install -g eas-cli
eas build --platform android --local

# Wait for build to complete
# APK will be ready for download/testing
```

---

## 📞 Support

### Getting Help

1. **Check Troubleshooting section** above
2. **Read inline code comments** for implementation details
3. **Check app.json** for configuration issues
4. **Review console logs** for errors

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| App crashes on startup | Clear cache: `npm start -c` |
| Microphone not working | Enable in phone settings |
| SOS button inactive | Set emergency number first |
| Medicine not appearing | Refresh or restart app |
| Voice commands error | Check microphone permissions |
| Slow performance | Close background apps |

---

## 📝 Code Comments

All code includes detailed comments explaining:
- Function purpose
- Parameters and return values
- Usage examples
- Important notes

Example:
```javascript
/**
 * Process voice command and generate response
 * @param {string} userInput - User's voice input (recognized text)
 * @returns {Promise<string>} Assistant's response
 * 
 * Usage:
 * const response = await processVoiceCommand("Did I take my medicine?");
 */
export const processVoiceCommand = async (userInput) => {
  // Implementation...
}
```

---

## 📄 License

This project is created for educational and hackathon purposes.

---

## 🙏 Acknowledgments

Built with:
- React Native & Expo
- React Navigation
- AsyncStorage
- Native Speech APIs
- Community feedback

---

## 🎓 Learning Resources

- [React Native Docs](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Guide](https://reactnavigation.org/)
- [AsyncStorage Guide](https://react-native-async-storage.github.io/async-storage/)

---

## 📞 Contact

For questions or issues:
1. Check README troubleshooting
2. Review code comments
3. Check GitHub issues
4. Ask in documentation

---

**Happy Coding! 🚀**

Last Updated: 2026-04-01
Version: 1.0.0