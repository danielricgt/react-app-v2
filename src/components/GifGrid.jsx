import React, { useEffect } from 'react'
import { getGifs } from '../helpers/getgifs';
import { useState } from 'react';



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
            {images.map(({id, title}) => (<li key={id}>
                    {title}
            </li>))
}

        </>
    )
}
