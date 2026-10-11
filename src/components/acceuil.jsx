import Data from "../data/data.js";
import Card from "../components/item-card.jsx"

function Acceuil({ addToCart, addToFavorite }) {
    return(
        <div className="acceuil">
        { Data.map((item) =>( <Card key={item.id} item={item} addToCart={addToCart} addToFavorite={addToFavorite} />))}
        </div>
    )
}

export default Acceuil;