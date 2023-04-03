import React, { useCallback } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native'
import { PropsMessages } from '../../types';

interface Props {
   from: string,
   content: string,
   navigationProps: PropsMessages
}

function Message({from, content, navigationProps}: Props) {
   const handleMsgClick = useCallback(() => {
      navigationProps.navigation.navigate("MessageWindow", {username: from, message: content})
   }, [])

   return (
      <Pressable style={styles.container} onPress={handleMsgClick}>
         <Text style={styles.sender}>{from}</Text>
         <Text style={styles.message}>{content}</Text>
      </Pressable>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginHorizontal: 10,
      marginTop: 10,
      backgroundColor: 'lightblue',
      padding: 10,
      borderRadius: 5
   },
   sender: {
      fontFamily: 'DeliciousHandrawn-Regular',
      fontSize: 25,
   },
   message: {
      fontSize: 25
   }
})

export default Message;