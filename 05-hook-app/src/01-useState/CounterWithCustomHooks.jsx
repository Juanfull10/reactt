import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = () => {
 
    const {counter,increment,decrement,reset, initialValue}= useCounter();

    
 
    return (
   <>
    <h1>Counter with Hook: {counter}</h1>

    <button className="btn btn-primary" onClick={()=>increment(2)} >+1</button>
    <button className="btn btn-primary" onClick={()=>reset()}>reset</button>
    <button className="btn btn-primary" onClick={()=>decrement(2)}>-1</button>
  
   </>
  )
}
