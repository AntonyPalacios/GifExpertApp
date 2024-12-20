import {useState} from "react";

export const AddCategoryForma1 = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length === 0) return
        // setCategories([inputValue,...categories]);
        setCategories(cat => [inputValue,...cat]);
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}