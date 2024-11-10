import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = function ({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading ? <h2>Cargando...</h2> : null}

      <div className="card-grid">
        {images.map(function (img) {
          return <GifGridItem key={img.id} url={img.url} title={img.title} />;
        })}
      </div>
    </>
  );
};
