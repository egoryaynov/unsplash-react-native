import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import {RootStackParamList} from "../types/types";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, 'SeparateImage'>;

const SeparateImage = ({route}:  Props) => {
    const {url} = route.params

    return (
        <View style={styles.Container}>
            <Image style={styles.Image} source={{uri: url}} resizeMode='contain'/>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
    },
    Image: {
        width: '100%',
        height: '100%'
    }
})

export default SeparateImage;
