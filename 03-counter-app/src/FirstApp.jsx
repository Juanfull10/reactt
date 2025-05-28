import PropTypes  from 'prop-types';

const getSaludo=(nombre)=>{
    return `HOLA ${nombre}`
}


export const FirstApp = ({title , subtitle="la tierra explota!!" })=>{
  
    return(
        <>
        <h1>{title}</h1>
        
        </>
        
    )
}

FirstApp.protoTypes={
    title: PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired
}

FirstApp.defaultProps={
    title:"No hay titulo",
    subtitle:"No hay subtitulo"
}