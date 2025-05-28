import { useState } from "react"
import { AddCategory,GifGrid } from "./components"

export const GIFExpertApp = () => {
    const [categories, setCategories] = useState([ 'One punch'])
    
   const onAddCategory=(onNewCategory)=>{
      if(categories.includes(onNewCategory))return;


    //console.log(onNewCategory)

    //setCategories([...categories,"nuevo dato"])
    
        setCategories([onNewCategory, ...categories])
      
   }
  
    return (
    <>

 
    <h1>GifExpertApp</h1>
    
 
    <AddCategory 
    //setCategories={setCategories}
        onNewCategory={value=>onAddCategory(value)}
    />


        {categories.map((category,index) =>(
            <GifGrid 
                key={category} 
                category={category}/>
            ))
        }
       




    </>
  )
}
