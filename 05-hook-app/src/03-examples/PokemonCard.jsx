import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useFetch } from "../hooks"
import { MultipleCustomHooks } from "./MultipleCustomHooks"

export const PokemonCard = ({id,name,sprites=[]}) => {
 
  const h2Ref = useRef()

  useLayoutEffect(() => {
    const {height, width}= h2Ref.current.getBoundingClientRect();

    console.log({height,width})
  
  }, [name])


  return (
    <section style={{height:200, display:'flex', flexDirection:'row'}}>


    <h2 ref={h2Ref}  className="text-capitalize">{id}#{name}-</h2>
   
    <div>
        {
            sprites.map(sprite=>(
                <img key={sprite}src={sprite}alt={name}></img>
            ))
        }
    </div>
    </section>

    // imagenes
    
  )
}
