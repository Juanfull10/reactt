import PropTypes from "prop-types"
import { useState } from "react"


export const CounterApp2 = ({value}) => {

    const [counter, setCounter]= useState(value);

    const handleAdd=()=>{
        setCounter(counter+1)
    }
    const handleReset=()=>{
        setCounter(value)
    }
    const handleAdd2=()=>{
        if(counter>0)
        setCounter(counter-1)
    }
  return (
    <>
    <h1>Counter APP2</h1>
    <h2>{counter}</h2>

    <button onClick={handleAdd}>+1 </button>
    <button onClick={handleAdd2}>-1 </button>
    <button onClick={handleReset}>reset </button>
    </>
    
  )



}

CounterApp2.prototype={
    value:PropTypes.number,

}
