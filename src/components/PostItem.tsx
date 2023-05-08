import React, { useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { Navigation } from 'react-native-navigation';
import { PostProps } from '../types';

const PostItem = ({post, componentId}: PostProps) => {
   const {title, text, image} = post

   const shortened = useMemo(() => {
      if (text.length > 90) {
         let short = text.slice(0, 90)
         short += '...'
         return short
      } else {
         return text
      }
   }, [text])

   const viewPost = useCallback(() => {
      Navigation.push(componentId, {
         component: {
            name: 'PostScreen',
            passProps: {
               text,
               image
            },
            options: {
               topBar: {
                  title: {
                     text: title,
                  }
               }
            }
         }
      })
   }, [])

   return (
      <Pressable onPress={viewPost} style={styles.container}>
         <Image source={{uri: image }} style={styles.img} />
         <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={{...styles.text}}>{shortened}</Text>
         </View>
      </Pressable>
   );
}

const styles = StyleSheet.create({
   container: {
      width: '100%',
      paddingHorizontal: 10,
      marginTop: 10,
      padding: 10,
      backgroundColor: "#f0efef",
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'row',
   },
   img: {
      width: '30%',
      resizeMode: 'cover',
      aspectRatio: 1,
      borderRadius: 5,
      marginRight: 10,
   },
   textContainer: {
      width: '100%'
   },
   title: {
      fontSize: 25,
   },
   text: {
      fontSize: 18,
      width: '70%',
   }
})
 
export default PostItem;