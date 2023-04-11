import React, { useCallback } from "react";
import { Pressable, StyleSheet, Text } from 'react-native'
import { Navigation } from "react-native-navigation";

export const MODAL_ID = 'modal'

const AddPostBtn = () => {
   const openModal = useCallback(() => {
      Navigation.showModal({
         stack: {
           children: [{
             component: {
               id: MODAL_ID,
               name: 'AddPost',
             }
           }]
         }
       });
   }, [])

   return (
      <Pressable onPress={openModal}>
         <Text style={styles.text}>Add</Text>
      </Pressable>
   );
}

const styles = StyleSheet.create({
   text: {
      fontSize: 18,
      color: 'blue',
      marginRight: 10,
   }
})
 
export default AddPostBtn;