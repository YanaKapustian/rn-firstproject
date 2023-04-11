import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native'
import { Navigation } from 'react-native-navigation';
import { PostProps } from '../types';

const PostItem = ({post, componentId}: PostProps) => {
   const {title, text, image} = post
   const {width} = Dimensions.get('window')

   let shortened = text.slice(0, 90)
   if (text.length > 90) shortened += '...'

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
         <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={{...styles.text, width: width * 0.65}}>{shortened}</Text>
         </View>
      </Pressable>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 10,
      marginTop: 10,
      padding: 10,
      backgroundColor: "#f0efef",
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      minHeight: 115,
   },
   img: {
      width: '30%',
      resizeMode: 'cover',
      borderRadius: 5,
      marginRight: 10,
   },
   title: {
      fontSize: 25,
   },
   text: {
      fontSize: 18,
      flexWrap: 'wrap'
   }
})
 
export default PostItem;