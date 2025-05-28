import PropTypes from "prop-types"

export const FirstApp2 = ({title, subTitle="la tierra explota"}) => {

  
  // console.log(props)
  return (
    <>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
    </>
  )
}


FirstApp2.propTypes={
  title:PropTypes.string.isRequired,
  subTitle:PropTypes.number.isRequired
}