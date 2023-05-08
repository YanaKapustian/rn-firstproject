import { Text, ScrollView, Image, StyleSheet, SafeAreaView } from "react-native";
import { PostScreenType } from "../types";

const PostScreen = ({text, image}: PostScreenType) => {
   return (
      <SafeAreaView style={{flex: 1}}>
         <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
            <Text style={styles.text}>{text}</Text>
            <Image source={{uri: image}} style={styles.img}/>
         </ScrollView>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 5,
      paddingVertical: 5,
   },
   text: {
      fontSize: 22,
      marginBottom: 10
   },
   img: {
      flex: 1,
      resizeMode: 'cover',
      aspectRatio: 1,
   }
})
 
export default PostScreen;