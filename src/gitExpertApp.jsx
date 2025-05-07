import { useState } from "react"
import { AddCategory } from "./components/addCategory";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState([]);
    // console.log(categories);

    const onAddCategory = (newCategorie) => {
        if (categories.includes(newCategorie)) return;
        // console.log(newCategorie);
        // categories.push(newCategorie);
        //  setCategories([...categories, 'HunterXHunter']);
        setCategories(cat => [...cat, newCategorie]);
    }
    return (
        <>
            {/* TITULO */}
            {/* INPUT */}
            <AddCategory 
            // setCategories={setCategories} 
            onNewCategory = {(event) => onAddCategory(event)}
            />
            {/* GIFS ITEM LIST  */}

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
