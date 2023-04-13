import React, { useCallback } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Navigation } from "react-native-navigation";
import { showMessage } from "react-native-flash-message";
import { MODAL_ID } from "./AddPostBtn";

const SavePost = () => {
   const savePost = useCallback(() => {
      showMessage({
         message: 'Post is saved',
         type: 'success',
      })
      Navigation.dismissModal(MODAL_ID)
   }, [])

   return (
      <Pressable onPress={savePost}>
         <Text style={styles.text}>Save</Text>
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

export default SavePost;