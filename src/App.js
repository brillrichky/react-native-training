import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {WingBlank, Card} from '@ant-design/react-native';
import style from './styles/style';
import {useEffect, useState, useRef, useMemo} from 'react';
import AppBar from './components/AppBar';
import axios from 'axios';
import ListCard from './components/ListCard';
import Livin from './pages/Livin';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  // ref

  // variables
  

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
