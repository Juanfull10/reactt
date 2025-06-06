import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff=(iterationNumber=100)=>{
    for(let i=0;i<iterationNumber;i++){
      console.log("ahi vamos...")
    }
    return`${iterationNumber} iteraciones realizadas`;

}

export const MemoHook = () => {
  
  const {counter, increment}=useCounter(4000)
  const [show, setShow] = useState(true)

  const memorizedValud=useMemo(()=>heavyStuff(counter),[counter])

    return (
    <>
    
        <h1> counter:  <small>{counter}</small></h1>
        <hr />
        <h4>{memorizedValud}</h4>
        <button className="btn btn-primary" onClick={()=>increment()}>
            +1
        </button >
       
        <button className="btn btn-outline-primary" onClick={()=>setShow(!show)}>
        Show/hide { JSON.stringify(show)}
        </button>


    </>
  )
}
