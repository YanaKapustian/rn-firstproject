import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
   Home: undefined;
   Messages: undefined;
   MessageWindow: {
      username: string;
      message: string;
   };
 };

export type PropsHome = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type PropsMessages = NativeStackScreenProps<RootStackParamList, "Messages">

export type PropsMessageWindow = NativeStackScreenProps<RootStackParamList, "MessageWindow">