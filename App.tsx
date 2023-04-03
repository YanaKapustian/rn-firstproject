import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import { RootStackParamList } from './types';
import MessageWindow from './src/screens/MessageWindow';

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen}/>
        <Stack.Screen name="MessageWindow" component={MessageWindow}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
