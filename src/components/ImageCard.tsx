import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

type PropsType = {
    url: string
    avatarUrl: string
    username: string
}

const ImageCard: React.FC<PropsType> = ({url, avatarUrl, username}) => {
    return (
        <View style={styles.Container}>
            <Image style={styles.Image} source={{uri: url}}/>
            <View style={styles.AuthorContainer}>
                <Image style={styles.AuthorAvatar} source={{uri: avatarUrl}}/>
                <Text style={styles.AuthorText}>{username}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        borderBottomWidth: 2,
        backgroundColor: '#FFFFFF',
        borderColor: '#FAFAFA',
        paddingTop: 18
    },
    Image: {
        width: '100%',
        height: 200
    },
    AuthorContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 17
    },
    AuthorAvatar: {
        width: 28,
        height: 28,
        borderRadius: 15,
        marginRight: 10
    },
    AuthorText: {
        color: '#5A5A5A',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Roboto'
    }
});

export default ImageCard;
