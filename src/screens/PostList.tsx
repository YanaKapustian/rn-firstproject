import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import PostItem from '../components/PostItem';
import { ComponentProps, FetchedDataType } from '../types';
import Config from 'react-native-config';
import { PostType } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
import EncryptedStorage from 'react-native-encrypted-storage';
import uuid from 'react-native-uuid';

const PostList = (props: ComponentProps) => {
   const [fetchedData, setFetchedData] = useState<FetchedDataType>()
   const [posts, setPosts] = useState<PostType[]>([])

   useEffect(() => {
      getData()
   }, [])

   const getData = useCallback(async() => {
      try {
         const jsonPosts = await AsyncStorage.getItem('posts')
         if (jsonPosts !== null) setPosts(JSON.parse(jsonPosts))
      } catch(e) {
         console.log(e);
      }
      await fetch(Config.JSON_API_URL)
      .then(response => response.json())
      .then(data => setFetchedData(data))
      .catch(e => console.log(e))
      try {
         EncryptedStorage.setItem('user-id', JSON.stringify(uuid.v4()))
      } catch(e) {
         console.log(e);
      }

      SplashScreen.hide()
   }, [])

   return (
      <SafeAreaView style={{flex: 1}}>
         <ScrollView>
            {posts?.map(post => <PostItem key={post.id} post={post} componentId={props.componentId} />)}
            <Text style={styles.text}>Fetched data using Config.JSON_API_URL: {fetchedData?.title}</Text>
         </ScrollView>
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