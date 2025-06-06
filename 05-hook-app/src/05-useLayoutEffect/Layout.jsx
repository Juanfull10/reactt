import { useCounter, useFetch } from "../hooks";
import { PokemonCard } from "../03-examples/PokemonCard";
import { LoadingStateMessage } from "../03-examples/LoadingStateMessage";


export const Layout = () => {
    
  const {counter,decrement,increment}=useCounter(1);
   const {data,hasError,isLoading}= useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (

    <>
    <h1>informacion de pokemos</h1>
    <hr />

   

   {isLoading ||!data
   ? <LoadingStateMessage/>:
   (<PokemonCard
    id={counter} 
    name={data.name}
    sprites={[
      data.sprites.front_default,
      data.sprites.front_shiny,
      data.sprites.back_default,
      data.sprites.back_shiny,

    ]}
    />)
   }

    <button className="btn btn-primary mt-2"onClick={()=>counter>1?decrement():null}>anterior</button>
    <button className="btn btn-primary mt-2" onClick={()=>increment()}>siguiente</button>

    </>
    
  )
}
