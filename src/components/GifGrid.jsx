import React, { useEffect } from 'react'
import { getGifs } from '../helpers/getgifs';
import { useState } from 'react';



export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect( () => {
        getImages();
    }, [] );
        
  
    return (
        <>
            <h1>{category}</h1>
            <ol>
                <li>TITULO 1</li>
                <li>titulo 2</li>
                <li>titulo 3</li>
                <li>titulo 4</li>
            </ol>
        </>
    )
}
