import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0})
    useEffect(() => {

        const OnMouseMove=({x,y})=>{
            // const coords={x,y};
            setCoords({x,y})
        }

        window.addEventListener('mousemove',OnMouseMove);


      return () => {
        window.removeEventListener('mousemove',OnMouseMove);
        }
    },[]);
    


  return (
    <>
        <h1>Usuario ya existe</h1>
        {JSON.stringify(coords)}
    </>
  )
}
