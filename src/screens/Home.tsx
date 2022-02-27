import React, {useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, ScrollView, Text, TouchableHighlight} from "react-native";
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
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [images, setImages] = useState<GetPhotosResponse>([]);

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true)

            unsplashApi.getPhotos(page, PHOTOS_PER_PAGE)
                .then(res => {
                    setImages(res.data)
                })
                .catch(error => {
                    setError(error.message)
                })
                .finally(() => {
                    setIsLoading(false)
                    setRefreshing(false)
                })
        }
    }, [page, refreshing]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        setPage(1)
    }, []);

    if (isLoading) return <ActivityIndicator style={{paddingTop: 20}} size="large" color="#000" />

    return (
        <ScrollView refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }>
            {error && <Text>{error}</Text>}
            {!error && images && images.map(imageItem => {
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

            {!error && <Pagination page={page} setPage={setPage}/>}
        </ScrollView>
    );
};
export default Home;
