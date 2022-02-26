import React, {useEffect, useState} from 'react';
import {Button, ScrollView, TouchableHighlight} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {GetPhotosResponse, RootStackParamList} from "../types/types";
import ImageCard from "../components/ImageCard";

import {PHOTOS_PER_PAGE} from 'react-native-dotenv'
import {unsplashApi} from "../api/Api";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
    const [page, setPage] = useState(1);
    const [images, setImages] = useState<GetPhotosResponse>();

    useEffect(() => {
        unsplashApi.getPhotos(page, PHOTOS_PER_PAGE)
            .then(r => {
                setImages(r.data)
                console.log('REQUESTED')
            })
    }, [page]);

    return (
        <ScrollView>
            {images?.map(imageItem => {
                return <TouchableHighlight onPress={
                    () => navigation.navigate('SeparateImage', {url: imageItem.urls.full, username: '@' + imageItem.user.username})}
                >
                    <ImageCard
                        key={imageItem.id}
                        url={imageItem.urls.small}
                        username={imageItem.user.username}
                        avatarUrl={imageItem.user.profile_image.small}
                    />
                </TouchableHighlight>
            })}
        </ScrollView>
    );
};
export default Home;
