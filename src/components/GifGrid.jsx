import React, { useEffect } from 'react'

import { getGifs } from '../helpers/getgifs';
import { useState } from 'react';
import { GitItem } from './GitItem';



export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);


    return (
        <>
            <h1>{category}</h1>
            {images.map((image) => (
            <GitItem className="card-" 
            key={image.id}
            {...image}
            />
            ))
}

        </>
    )
}
