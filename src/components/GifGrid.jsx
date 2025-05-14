import React, { useEffect } from 'react'

import { getGifs } from '../helpers/getgifs';
import { useState } from 'react';
import { GitItem } from './GitItem';
import { useFetchGif } from '../hooks/ useFetchGif';



export const GifGrid = ({ category }) => {

const {images, isLoading} = useFetchGif(category);
console.log({isLoading});





    return (
        <>
            <h1>{category}</h1>
            {
                isLoading &&
                <h2>Cargando</h2>
            }
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
