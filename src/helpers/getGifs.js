export const getGifs = async function (category) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=pLaJKoxqfuMuxxFMguoei1LrrdVypusZ&q=${category}&limit=5`;
  const resp = await fetch(url);
  if (resp.ok) {
    const { data } = await resp.json();

    const gifs = data.map(function (img) {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    return gifs;
  } else {
    return [];
  }
};
