import React, { useCallback } from 'react';
import {
    View,
    StyleSheet,
    Button,
    SafeAreaView,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';

export default function Camera() {
    const [{ cameraRef }, { takePicture }] = useCamera();

    const captureHandle = useCallback(async () => {
        try {
            const data = await takePicture();
            const filePath = data.uri;
            const newFilePath = RNFS.ExternalDirectoryPath + `/test-${Date.now()}.jpg`;
            RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                    console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <SafeAreaView style={styles.body}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
                <View style={styles.btnContainer}>
                    <Button
                        title="Capture"
                        onPress={() => captureHandle()}
                    />
                </View>
            </RNCamera>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    btnContainer: {
        marginBottom: 20,
    }
});