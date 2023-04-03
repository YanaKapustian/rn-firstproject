import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropsMessageWindow } from '../../types';

const MessageWindow = ({navigation, route}: PropsMessageWindow) => {
   useEffect(() => {
      navigation.setOptions({title: route.params.username})
   }, [])
   return (
      <View style={styles.container}>
         <Text style={styles.message}>{route.params.message}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 10,
      marginTop: 10,
      backgroundColor: 'lightblue',
      padding: 10,
      borderRadius: 5
   },
   message: {
      fontSize: 25
   }
})
 
export default MessageWindow;