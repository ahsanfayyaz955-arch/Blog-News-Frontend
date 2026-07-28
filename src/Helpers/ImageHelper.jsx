export const getImageUrl = (imagePath) => {

    if (!imagePath) {
        return "https://placehold.co/600x350?text=No+Image";
    }

    return `${import.meta.env.VITE_IMAGE_URL}${imagePath}`;
};