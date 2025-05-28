import { useState } from "react"
import { AddCategory2 } from "./components/AddCategory2"
import { GifGrid2 } from "./components/GifGrid2"

export const GifExpertApp2 = () => {

    const [categories, setCategories] = useState([ 'one Punch'])

    const onAddCategory=(NewCategory)=>{

        if(categories.includes(NewCategory))return;

        setCategories([NewCategory,...categories])
    }

  return (
   <>
    {/* // titulo */}
    <h1>GifExpertApp2</h1>

    {/* // input */}
    <AddCategory2 
    // setCategories={setCategories}
       onNewCategory={onAddCategory}
    />
  

  
   
        {categories.map(category=>(<GifGrid2 key={category} category={category}/>))}
        
 
   
   </>
  )
}
