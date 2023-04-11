import { StyleSheet, TextInput, View } from 'react-native';

const AddPost = () => {
   return (
      <View style={styles.container}>
         <TextInput style={styles.input} placeholder="Title"></TextInput>
         <TextInput style={styles.input} placeholder="Text"></TextInput>
         <TextInput style={styles.input} placeholder="Image link"></TextInput>
      </View>
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
   }
})

export default AddPost;