import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import PostItem from '../components/PostItem';
import { ComponentProps, FetchedDataType } from '../types';
import Config from 'react-native-config';
import { PostType } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
import EncryptedStorage from 'react-native-encrypted-storage';
import uuid from 'react-native-uuid';
import ReactNativeBiometrics from 'react-native-biometrics'

const PostList = (props: ComponentProps) => {
   const [fetchedData, setFetchedData] = useState<FetchedDataType>()
   const [posts, setPosts] = useState<PostType[]>([])

   const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })

   rnBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
   .then((resultObject) => {
      const { success } = resultObject
      if (success) {
         console.log('successful biometrics provided')
      } else {
         console.log('user cancelled biometric prompt')
      }
   })
   .catch(() => {
      console.log('biometrics failed')
   })

   const getData = useCallback(async() => {
      try {
         const jsonPosts = await AsyncStorage.getItem('posts')
         if (jsonPosts !== null) setPosts(JSON.parse(jsonPosts))

         const data = await fetch(Config.JSON_API_URL).then(response => response.json())
         setFetchedData(data)

         EncryptedStorage.setItem('user-id', JSON.stringify(uuid.v4()))
      } catch(e) {
         console.log(e);
      }
      SplashScreen.hide()
   }, [])

   useEffect(() => {
      getData()
   }, [getData])

   return (
      <SafeAreaView style={{flex: 1}}>
         <FlatList 
         data={posts} 
         renderItem={({item}) => <PostItem key={item.id} post={item} componentId={props.componentId} />} 
         keyExtractor={(item: PostType) => item.id}
         contentContainerStyle={{flexGrow: 1}}
         />
         <FlashMessage style={styles.flashMessage} titleStyle={{fontSize: 18}} position="top" />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   text: {
      fontSize: 20,
      padding: 10,
   },
   flashMessage: {
      borderRadius: 5,
   }
})
 
export default PostList;