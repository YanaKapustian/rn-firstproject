import React, { useCallback } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { showMessage } from "react-native-flash-message";
import { Navigation } from "react-native-navigation";
import { MODAL_ID } from "./AddPostBtn";

const DismissModal = () => {
   const dismissModal = useCallback(() => {
      Navigation.dismissModal(MODAL_ID)
      showMessage({
         message: 'Post is dismissed',
         type: 'default'
      })
   }, [])

   return (
      <Pressable onPress={dismissModal}>
         <Text style={styles.text}>Cancel</Text>
      </Pressable>
   );
}
 
const styles = StyleSheet.create({
   text: {
      fontSize: 18,
      color: 'blue',
      marginLeft: 10,
   }
})

export default DismissModal;