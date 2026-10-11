import { Link, useParams } from "react-router-dom"
import Data from '../data/data'

function Detail() {
    const { id } = useParams()
    const item = Data.find(
        item => item.id == id
    )
    return (
        <div className="detail">
            <h2>Detail {id}</h2>
            <h3>Name :{item.name}</h3>
            <h3>Price :{item.price}</h3>
            <img src={item.imageUrl} alt={item.name}/> <br />
            <Link to="/">Retour</Link>
        </div>
    )
}
export default Detail;