import { useState, useEffect} from "react";
import { getGifs2 } from "../helpers/getGifs2";
import { Giftem2 } from "./Giftem2";

export const GifGrid2 = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages=async()=>{
        const newImages=await getGifs2(category);
        setImages(newImages);
    }

    useEffect(()=>{
        getImages();
    },[category])


  return (
   <>

   <h3>{category}</h3>
   <div className="card-grid">

      {images.map((image)=>(

        <Giftem2 
        key={image.id}
        {...image}/>

       ))
     
     }


   </div>

   </>  
  )
}
