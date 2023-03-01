import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigator from './Navigator';
import { TaskProvider } from './context/TaskContext';


export default function App() {
  return (
    <TaskProvider>
      <Navigator />
    </TaskProvider>
  );
}
