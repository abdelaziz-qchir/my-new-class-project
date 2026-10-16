function Cart({ item, plusQte, minusQte }) {
    return (
        <div className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="imgitem" />
            <div className="quantite">
                <button className="quantite-btn" onClick={() => minusQte(item)}>-</button>
                <span className="quantite" >{item.quantite}</span>
                <button className="quantite-btn" onClick={() => plusQte(item)}>+</button>
            </div>

            <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
            </div>
        </div>
    )
}
export default Cart;