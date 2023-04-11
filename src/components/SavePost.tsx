import React, { useCallback } from "react";
import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { Navigation } from "react-native-navigation";

const SavePost = () => {
   const savePost = useCallback(() => {
      Alert.alert("Post is saved")
      Navigation.dismissModal('modal')
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