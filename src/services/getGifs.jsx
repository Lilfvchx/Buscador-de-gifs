const api_key="3gITWQ2CqCxtNcg7yIT7ECLAgHLkpR4k"

export default function getGifs({keyword="anime"}={}) {
    const apiURL=`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=25&offset=0&rating=r&lang=es`
    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data=[]} = response
        if(Array.isArray(data)){
        const gifs= data.map(image =>{ 
            const {images, title, id}= image
            const {url}=image.images.downsized_medium
            return {url, title, id}
        })
  
        return gifs
        }})
};
