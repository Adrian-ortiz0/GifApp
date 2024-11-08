import React from 'react';
import {useState} from 'react';
import { AddCategory } from './components/AddCategory';

export const GifApp = function() {

    // Estamos creando una lista de categorias, por lo tanto el estado inicial es una lista vacia

    const [categories, setCategories] = useState(["One punch", "dragon ball"]);

    const onAddCategory = function(){
        setCategories(["naruto", ...categories ]);
    }

  return (
    <>
        <h1>GifApp</h1>

        <AddCategory />
        
        <button onClick={onAddCategory}>Agregar</button>

        <ol>
                {categories.map(function(category){
                    return <li key={category}>{category}</li>;
                })}
        </ol>

    </>
  )
}
