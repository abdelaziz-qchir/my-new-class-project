function Favorite({ item }) {
    return (
        <div className="favorite-item">
            <img src={item.imageUrl} alt={item.name} className="imgitem" />

            <div className="favorite-item-info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
            </div>
        </div>
    )
}
export default Favorite;