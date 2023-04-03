import React, { useCallback, useState } from 'react';
import {
   SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import SearchIcon from '../../assets/SearchIcon';
import MailAlert from '../../assets/MailAlert';
import MailRead from '../../assets/MailRead';
import LinearGradient from 'react-native-linear-gradient';
import MaskedTextGradient from '../components/MaskedTextGradient';
import { PropsHome } from '../../types';

const HomeScreen = ({navigation}: PropsHome) => {
   const [text, setText] = useState('')
   const [read, setRead] = useState(false)

   const handleChangeIcon = useCallback(() => {
      setRead(prev => !prev)
   }, [])

   const handleTextChange = useCallback((text: React.SetStateAction<string>) => {
      setText(text)
   }, [])

   const handleNavigation = useCallback(() => {
      navigation.navigate("Messages")
   }, [])

   return (
      <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
         <LinearGradient colors={['#F9DDFF', '#FFD5F4', '#FFD0D6', '#FFD4AC']} style={styles.gradient}>
            <Text style={styles.title}>Main screen</Text>
            <View style={styles.inputBlock}>
               <TextInput style={styles.input} onChangeText={handleTextChange} value={text}></TextInput>
               <SearchIcon width={30} height={30} fill={'black'} style={styles.icon}/>
            </View>
            <Pressable onPress={handleChangeIcon} style={styles.imgsContainer}>
               {read ? <MailRead width={80} height={80} fill={'purple'} /> : <MailAlert width={80} height={80} fill={'red'}/>}
            </Pressable>
            <MaskedTextGradient text={text ||"The weather is beautiful"}/>
            <Button title='Go to the messages' onPress={handleNavigation} />
         </LinearGradient>
      </ScrollView>
      </SafeAreaView>
      
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
    },
   gradient: {
      flex: 1,
      height: '100%',
      paddingHorizontal: 5
    },
    title: {
      fontFamily: 'DeliciousHandrawn-Regular',
      fontSize: 40,
      color: 'purple',
    },
    input: {
      borderWidth: 1,
      borderColor: 'grey',
      height: 40,
      width: '100%',
    },
    inputBlock: {
      width: '90%',
      height: 50,
      position: 'relative',
    },
    imgsContainer: {
      width: 80,
      height: 80,
    },
    icon: {
      position: 'absolute',
      top: 5,
      right: 5,
    }
})
 
export default HomeScreen;