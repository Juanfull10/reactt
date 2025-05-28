import { useState } from "react"
import PropTypes from "prop-types"



export const Contenido=({value})=>{

    const [counter,setCounter]= useState(10)

    const handleAdd=(event)=>{
      //  console.log(event)
        setCounter(counter+1)
    }

    const handleAdd2=(event)=>{
        //  console.log(event)
          setCounter(counter-1)
      }

      const handleAdd3=(event)=>{
        //  console.log(event)
          setCounter(value)
      }



    return(
        <>
        <h1>counter app</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>
            +1
        </button>
        <button onClick={handleAdd2}>
            -1
        </button>
        <button onClick={handleAdd3}>
            reset
        </button>
        </>
    )

}

Contenido.protoTypes={
    value:PropTypes.number
}