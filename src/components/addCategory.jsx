
import PropTypes from "prop-types";
import { useState } from "react"
export const AddCategory = ({ onNewCategory }) => {



    const [inputValue, setinputValue] = useState('');

    const onImputChance = ({ target }) => {
        // console.log(target.value);
        setinputValue(target.value);
    }
    const onSubmit = (event) => {
        console.log('Hola form dsde sumbit')
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // console.log(inputValue);

        onNewCategory(inputValue.trim());
        setinputValue("");
    }


    return (
        <form  aria-label="form" onSubmit={(event) => onSubmit(event)}>
            <input type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onImputChance(event)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}