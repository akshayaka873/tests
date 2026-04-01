/**
 * Main Application File
 * Navigation setup and app initialization
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from './styles/colors';

// Placeholder Screen Components (to be replaced with actual screens)
import { Text, View, StyleSheet } from 'react-native';
import commonStyles from './styles/commonStyles';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Placeholder Screens - Replace these with actual screen components
const PlaceholderScreen = ({ name }) => (
  <View style={commonStyles.centerContainer}>
    <Text style={commonStyles.heading}>{name}</Text>
    <Text style={commonStyles.bodyText}>Coming Soon</Text>
  </View>
);

const HomeScreen = () => <PlaceholderScreen name="Home" />;
const MedicineScreen = () => <PlaceholderScreen name="Medicine" />;
const HealthScreen = () => <PlaceholderScreen name="Health" />;
const DietScreen = () => <PlaceholderScreen name="Diet" />;
const RecordsScreen = () => <PlaceholderScreen name="Medical Records" />;

/**
 * Home Stack Navigator
 */
const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.DARK_BG,
      },
      headerTintColor: COLORS.TEXT_PRIMARY,
      headerTitleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name="HomeMain"
      component={HomeScreen}
      options={{ title: 'Elderly Care' }}
    />
  </Stack.Navigator>
);

/**
 * Medicine Stack Navigator
 */
const MedicineStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.DARK_BG,
      },
      headerTintColor: COLORS.TEXT_PRIMARY,
      headerTitleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name="MedicineMain"
      component={MedicineScreen}
      options={{ title: 'Medicines' }}
    />
  </Stack.Navigator>
);

/**
 * Health Stack Navigator
 */
const HealthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.DARK_BG,
      },
      headerTintColor: COLORS.TEXT_PRIMARY,
      headerTitleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name="HealthMain"
      component={HealthScreen}
      options={{ title: 'Health Tracker' }}
    />
  </Stack.Navigator>
);

/**
 * Diet Stack Navigator
 */
const DietStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.DARK_BG,
      },
      headerTintColor: COLORS.TEXT_PRIMARY,
      headerTitleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name="DietMain"
      component={DietScreen}
      options={{ title: 'Diet' }}
    />
  </Stack.Navigator>
);

/**
 * Records Stack Navigator
 */
const RecordsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.DARK_BG,
      },
      headerTintColor: COLORS.TEXT_PRIMARY,
      headerTitleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name="RecordsMain"
      component={RecordsScreen}
      options={{ title: 'Medical Records' }}
    />
  </Stack.Navigator>
);

/**
 * Main Bottom Tab Navigator
 */
export default function App() {
  useEffect(() => {
    // Initialize app
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Any app initialization logic here
      console.log('App initialized');
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarInactiveTintColor: COLORS.TAB_INACTIVE,
          tabBarStyle: {
            backgroundColor: COLORS.DARK_BG,
            borderTopColor: COLORS.BORDER_LIGHT,
            paddingTop: 8,
            paddingBottom: 8,
            height: 70,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginBottom: 2,
          },
          tabBarIconStyle: {
            size: 28,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Medicine"
          component={MedicineStack}
          options={{
            tabBarLabel: 'Medicine',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="pill" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Health"
          component={HealthStack}
          options={{
            tabBarLabel: 'Health',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart-pulse" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Diet"
          component={DietStack}
          options={{
            tabBarLabel: 'Diet',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food-apple" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Records"
          component={RecordsStack}
          options={{
            tabBarLabel: 'Records',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="file-document" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}