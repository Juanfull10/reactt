import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"




export const CallbacksHook = () => {

    const [counter, setcounter] = useState(10)

   const incrementFather= useCallback(
        () => {
            setcounter((value)=>value+1)
            // console.log("setcounter(counter+1)")
            // setcounter(counter+1)
        },
        [],
    )

    // const increment=()=>{
    //     setcounter(counter+1)
    // }

  return (
    <>
    <h2>useCallback Hook:{counter} </h2>
    <hr />

    <ShowIncrement increment={incrementFather} />
    
    
    </>

  )
}
