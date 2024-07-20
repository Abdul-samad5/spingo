import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
const Tab = createBottomTabNavigator();
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent = Ionicons;

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'explore') {
            IconComponent = MaterialCommunityIcons;
            iconName = focused ? 'database' : 'database-outline';
          } else if (route.name === 'receipt') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          } else if (route.name === 'calculator') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          } else if (route.name === 'analytics') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          }

          return <IconComponent name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00A6FB',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
        headerShown: false,
      })}
    >
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="explore" />
      {/* <Tabs.Screen name="receipt" />
      <Tabs.Screen name="calculator" />
      <Tabs.Screen name="analytics" /> */}
    </Tabs>
  );
}
