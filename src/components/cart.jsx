function Cart({ item }) {
    return (
        <div className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="imgitem" />

            <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
            </div>
        </div>
    )
}
export default Cart;