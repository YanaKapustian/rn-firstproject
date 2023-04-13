import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

const AddPost = () => {
   const [userId, setUserId] = useState('')

   useEffect(() => {
      getUserId()
   }, [])

   const getUserId = useCallback(async() => {
      const json = await EncryptedStorage.getItem('user-id')
      if (json !== null) {
         setUserId(JSON.parse(json))
      }
   }, [])

   return (
      <View style={styles.container}>
         <TextInput style={styles.input} placeholder="Title"></TextInput>
         <TextInput style={styles.input} placeholder="Text"></TextInput>
         <TextInput style={styles.input} placeholder="Image link"></TextInput>
         <Text style={styles.text}>User id: {userId}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 10,
      paddingTop: 10
   },
   input: {
      borderColor: 'grey',
      borderWidth: 1,
      fontSize: 20,
      height: 45,
      marginBottom: 20
   },
   text: {
      fontSize: 20,
   }
})

export default AddPost;