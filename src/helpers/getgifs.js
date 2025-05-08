export const getGifs = async ({category}) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lYx36jjAEPoVYEvOzhHTfW5dtrEaAgEz&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    console.log(data);

    const gifs = data.map(img => ({
        img: img.data,
        title: img.title,
        url : img.images.downsized_medium.url

    }));

    return gifs;

}