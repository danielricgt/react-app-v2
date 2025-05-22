export const getGifs = async (query, apiKey) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();

    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium?.url
    }));
};