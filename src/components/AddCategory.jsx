import {useState} from 'react';

export const AddCategory = function() {

    const [inputValue, setInputValue] = useState("goku");

    const onInputChange = function(e){
        setInputValue(e.target.value);
    }

    const onSubmit = function(e){
        e.preventDefault();

    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="Buscar Gifs" 
        value ={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}
