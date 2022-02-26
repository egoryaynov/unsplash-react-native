import axios from "axios";

import {UNSPLASH_TOKEN} from 'react-native-dotenv'
import {GetPhotosResponse} from "../types/types";

export const unsplashApi = {
    getPhotos: (page: number, photosPerPage: number) => {
        return axios.get<GetPhotosResponse>('https://api.unsplash.com/photos/', {
            headers: {'Authorization': `Client-ID ${UNSPLASH_TOKEN}`},
            params: {page, per_page: photosPerPage}
        })
    }
}