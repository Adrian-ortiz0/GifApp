import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = function ({ category }) {
  const [images, setImages] = useState([]);

  const getImages = async function () {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map(function (img) {
          return <GifGridItem key={img.id} url={img.url} title={img.title} />;
        })}
      </div>
    </>
  );
};
