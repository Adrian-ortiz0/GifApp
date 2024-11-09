export const GifGridItem = function ({ title, url }) {

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
