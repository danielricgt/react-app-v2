import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getgifs";
const apiKey = import.meta.env.VITE_API_KEY;
export const useFetchGif = (category) => {


    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async () => {
        const newImages = await getGifs(category, apiKey);
        setImages(newImages);
        setIsLoading(false);

    }

    useEffect(() => {
        getImages();
    }, []);

  return { images, isLoading };
};
