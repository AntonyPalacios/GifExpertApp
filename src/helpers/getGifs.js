export const getGifs = async (category) =>{
    const API_KEY = 'CV7WLlMQNYuDsWC6FeqWQ3e8Eo0RxoH3'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`

    const response = await fetch(url)
    const {data} = await response.json()

    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
}