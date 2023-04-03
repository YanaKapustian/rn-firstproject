import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { PropsMessages } from '../../types';
import Message from '../components/Message';

function MessagesScreen(navigationProps: PropsMessages) {
   return (
   <SafeAreaView>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <ScrollView>
         <Message from={"Yana"} content={"Hi, how are you?"} navigationProps={navigationProps}/>
         <Message from={"Viktoria"} content={"I haven't heard from you in a while"} navigationProps={navigationProps}/>
         <Message from={"Ben"} content={"See u tmrw then"} navigationProps={navigationProps}/>
      </ScrollView>
   </SafeAreaView>
   );
}

export default MessagesScreen;