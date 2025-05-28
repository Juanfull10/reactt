
export const Giftem2 = ({title,url,id}) => {

    console.log(title,url,id)
  return (
    <div className="card">
        <img src={url} alt={title} />
    </div>
  )
}
