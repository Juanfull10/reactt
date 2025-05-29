import {  useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from "query-string"
import { getHeroesByName } from "../helpers"


export const SearchPage = () => {

  const navigate = useNavigate();

  const location= useLocation();

  const {q=''}= queryString.parse(location.search);

  const heroes=getHeroesByName(q);

  const {searchText, onInputChange}=useForm(
    {
        searchText:'',
    }
  )

  const onSearchSubmit = (event)=> {
    event.preventDefault();

    // if(searchText.trim().length<=1) return;

    navigate(`?q=${searchText}`)
  }


  return (
   <>
   <div className="row">
   <h1>Searchpage</h1>
    <hr />

    <div className="col-5">
      <h4>seaching</h4>
      <hr />
      <form onSubmit={onSearchSubmit}>
        <input type="text"
        placeholder="search a hero" className="form-control" name="searchText"
        autoComplete="off" value={searchText} onChange={onInputChange}/>
        <button className="btn btn-outline-primary mt-1"> search </button>
      </form>
    </div>

    <div className="col-7">
      <h4>Results</h4>
      <hr />

      {
        (q==='')
        ?<div className="alert alert-primary animate__animated animate__fadeIn ">Search a hero</div>:
        (heroes.length===0)&&<div className="alert alert-danger animate__animated animate__fadeIn ">No hero with {q}</div>
      }

   

      {
        heroes.map(hero=>(
          <HeroCard key={hero.id}{...hero}/>
        ))
      }


    </div>
   </div>
   
   </>
  )
}
