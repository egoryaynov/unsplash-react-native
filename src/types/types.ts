export type RootStackParamList = {
    Home: undefined
    SeparateImage: {url: string, username: string}
};
export type Routes = keyof RootStackParamList;

export type User = {
    name: string
    username: string
    first_name: string
    last_name?: string | null
    profile_image: {
        small: string
        medium: string
        large: string
    }
}
export type ImageUrls = {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
}
export type GetPhotosResponse = {
    id: string
    user: User
    urls: ImageUrls
}[]