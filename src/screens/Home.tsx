import React, {useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, TouchableHighlight} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {GetPhotosResponse, RootStackParamList} from "../types/types";
import ImageCard from "../components/ImageCard";

import {PHOTOS_PER_PAGE} from 'react-native-dotenv'
import {unsplashApi} from "../api/Api";
import Pagination from "../components/Pagination";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [images, setImages] = useState<GetPhotosResponse>();

    useEffect(() => {
        setIsLoading(true)

        unsplashApi.getPhotos(page, PHOTOS_PER_PAGE)
            .then(res => {
                setImages(res.data)
                setIsLoading(false)
                setRefreshing(false)
            })
            .catch(error => {
                setError(error.message)
                setIsLoading(false)
                setRefreshing(false)
            })
    }, [page, refreshing]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
    }, []);

    return (
        <ScrollView refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }>
            {isLoading && !error
                ? <ActivityIndicator style={{paddingTop: 20}} size="large" color="#000" />
                : images?.map(imageItem => {
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
            {!isLoading && error && <Text>{error}</Text>}

            {!isLoading && !error && <Pagination page={page} setPage={setPage}/>}
        </ScrollView>
    );
};
export default Home;
