import { useState } from "react"
import { AddCategory } from "./components/addCategory";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball', 'One Piece', 'Naruto']);
    // console.log(categories);

    const onAddCategory = () => {
        //  setCategories([...categories, 'HunterXHunter']);
        setCategories(cat => [...cat, 'HunterXHunter']);
    }
    return (
        <>
            {/* TITULO */}
            {/* INPUT */}
            <AddCategory/>
            {/* GIFS ITEM LIST  */}
            <button onClick={onAddCategory}>Agregar</button>
            <h1>Hola Mundo</h1>
            <h2>Git Expert App</h2>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/* GIF ITEM  */}
        </>
    )
}
