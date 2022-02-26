import React from 'react';
import {Text} from "react-native";
import {RootStackParamList} from "../types/types";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, 'SeparateImage'>;

const SeparateImage = ({navigation, route}:  Props) => {
    const {id} = route.params

    return (
        <Text>{id}</Text>
    );
};

export default SeparateImage;
