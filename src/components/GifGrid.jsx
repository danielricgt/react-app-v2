import React from 'react'
import { getGifs } from '../helpers/getgifs';



export const GifGrid = ({ category }) => {



    getGifs(category);
 
    return (
        <>
            <h1>{category}</h1>
            <h3>Hola Mundo</h3>
        </>
    )
}
