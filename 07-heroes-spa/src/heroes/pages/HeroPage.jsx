import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { MarvelPage } from "./MarvelPage";
import { useMemo } from "react";

export const HeroPage = () => {

  const {id}= useParams();

  const hero= useMemo (()=>getHeroById(id),[id]);
  const navigate=useNavigate();

  const onNavigateBack = ()=>{
    navigate('/marvel',{
      replace:true
    })
  }

  if(!hero){
    
    return <Navigate to="/marvel"/>;
  }

 
  return (
    <>
      <div className="row mt-5 animate__animated animate__fadeInLeft">

         <div className="col-4">
          <img className="img-thumbnail" src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} />
         </div>

         <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>alter ego: </b> {hero.alter_ego}</li>
            <li className="list-group-item"><b>publisher: </b> {hero.publisher}</li>
            <li className="list-group-item"><b>First apparance: </b> {hero.first_appearance}</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary"
          onClick={onNavigateBack}>
          Back
        </button>

      </div>
      </div>

     

    </>
   
  )
}
