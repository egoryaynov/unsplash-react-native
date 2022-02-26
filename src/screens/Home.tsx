import React, {useState} from 'react';
import {ScrollView, TouchableHighlight} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/types";
import ImageCard from "../components/ImageCard";

import {PHOTOS_PER_PAGE} from 'react-native-dotenv'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
    const [page, setPage] = useState(1);

    return (
        <ScrollView>
            <TouchableHighlight onPress={() => console.log('pressed')}>
                <ImageCard
                    url={'https://images.unsplash.com/photo-1634789968768-35b60f497a7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}
                    authorName='Test name'
                    avatarUrl={'https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-businessman-avatar-icon-flat-style-png-image_1917273.jpg'}
                />
            </TouchableHighlight>

            <ImageCard
                url={'https://images.unsplash.com/photo-1634789968768-35b60f497a7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}
                authorName='Test name'
                avatarUrl={'https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-businessman-avatar-icon-flat-style-png-image_1917273.jpg'}
            />
            <ImageCard
                url={'https://images.unsplash.com/photo-1634789968768-35b60f497a7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}
                authorName='Test name'
                avatarUrl={'https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-businessman-avatar-icon-flat-style-png-image_1917273.jpg'}
            />

        </ScrollView>
    );
};
export default Home;
