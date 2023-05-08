import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, TextInput, Text, SafeAreaView, Button } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import { Navigation } from 'react-native-navigation';
import { MODAL_ID } from '../components/AddPostBtn';

const AddPost = () => {
   const [userId, setUserId] = useState('')

   const getUserId = useCallback(async() => {
      try {
         const json = await EncryptedStorage.getItem('user-id')
         if (json !== null) {
            setUserId(JSON.parse(json))
         }
      } catch (e) {
         console.log(e);
      }
   }, [])

   useEffect(() => {
      getUserId()
   }, [getUserId])

   const openCamera = useCallback(() => {
      Navigation.push(MODAL_ID, {
         component: {
            name: 'CameraScreen',
            options: {
               topBar: {
                  title: {
                     text: 'Camera',
                  }
               }
            }
         }
      })
   }, [])

   return (
      <SafeAreaView style={styles.container}>
         <TextInput style={styles.input} placeholder="Title"></TextInput>
         <TextInput style={styles.input} placeholder="Text"></TextInput>
         <TextInput style={styles.input} placeholder="Image link"></TextInput>
         <Button onPress={openCamera} title='Open camera' />
         <Text style={styles.text}>User id: {userId}</Text>
      </SafeAreaView>
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