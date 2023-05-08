import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ComponentProps } from './src/types';

function App(props: ComponentProps): JSX.Element {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F9DDFF'} barStyle={'dark-content'}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
})

export default App;
