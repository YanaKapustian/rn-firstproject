import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export interface Props {
   text: string;
}

function MaskedTextGradient({text}: Props) {
   return (
      <View style={styles.container}>
         <MaskedView
        style={styles.maskedView}
        maskElement={
          <View style={styles.maskWrapper}>
            <Text style={styles.mask}>{text}</Text>
          </View>
        }>
        {/* <Image
          source={backgroundTexture}
          style={styles.image}
        /> */}
        <LinearGradient colors={['orange', 'purple']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{flex: 1}}/>
      </MaskedView>
      </View>
   );
}

export default MaskedTextGradient;

const styles = StyleSheet.create({
   container: {
     flex: .3,
   },
   maskedView: {
     flex: 1,
    //  flexDirection: 'row',
    //  height: '10%'
   },
   maskWrapper: {
   },
   mask: {
     fontSize: 35,
     color: 'black',
     fontWeight: 'bold',
   },
 });