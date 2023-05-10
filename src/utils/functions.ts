export const checkIfPhotosArray = (photos: string | string[], noPhoto: string) => {
    if (photos && typeof photos === 'string') {
        return photos;
    }
    if (photos && typeof photos === 'object') {
        return photos[0];
    }
    return noPhoto;
};
