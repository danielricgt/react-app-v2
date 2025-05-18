export const getGifs = async (category) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    // console.log(data);

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url : img.images.downsized_medium.url

    }));

    return gifs;

}