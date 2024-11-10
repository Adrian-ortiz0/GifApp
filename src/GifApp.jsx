import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = function () {
  // Estamos creando una lista de categorias, por lo tanto el estado inicial es una lista vacia

  const [categories, setCategories] = useState(["One punch"]);

  const onAddCategory = function (newCategory) {
    const normalizedNewCategory = newCategory.toLowerCase().trim();

    const valorFind = categories.find(function (category) {
      return category.toLowerCase().trim() === normalizedNewCategory;
    });

    if (valorFind) {
      alert("Esta categoria ya existe!");
      return;
    }

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map(function (category) {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
