import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";

type Props = {
    page: number
    setPage: (newPage: number) => void
}

const Pagination: React.FC<Props> = ({page, setPage}) => {
    return (
        <View style={styles.Container}>
            <TouchableOpacity disabled={page === 1} style={styles.Button} onPress={() => setPage(page - 1)}>
                <ImageBackground style={styles.Icon} source={require('../../assets/angle-left-solid.png')}/>
            </TouchableOpacity>
            <Text style={styles.Text}>{page}</Text>
            <TouchableOpacity style={styles.Button} onPress={() => setPage(page + 1)}>
                <ImageBackground style={styles.Icon} source={require('../../assets/angle-right-solid.png')}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 15
    },
    Icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    Text: {
        paddingHorizontal: 15,
        fontWeight: "bold",
        fontSize: 25
    }
})

export default Pagination;
