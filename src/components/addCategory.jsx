
import { useState } from "react"
export const AddCategory = ({ onNewCategory }) => {



    const [inputValue, setinputValue] = useState('');

    const onImputChance = ({ target }) => {
        // console.log(target.value);
        setinputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // console.log(inputValue);
        onNewCategory(inputValue.trim());
        setinputValue("");
    }


    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onImputChance(event)}
            />
        </form>
    )
}
