export const getGifs2= async(category)=>{

        const url=`https://api.giphy.com/v1/gifs/search?api_key=kx8TQsgINuisN0FvOBsfNjqWaXzMmH0R&q=${category}&limit=10`;
        const resp=await fetch(url);

        const {data}= await resp.json();
         
        const gifs=data.map(img=>{
            return {
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url
            }
        })

        return gifs
    }
