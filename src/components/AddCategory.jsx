import {useState} from "react";

//emitir el valor al padre
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length === 0) return
        // setCategories([inputValue,...categories]);
        onNewCategory(inputValue.trim());
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