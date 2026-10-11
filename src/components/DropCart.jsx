import Cart from './cart'

function DropCart({cartItems}) {
    
    return (
        <div className="cart-drop">
            <h2>Shopping Cart</h2>

            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <Cart
                        key={item.id ?? index}
                        item={item}
                    />
                ))
            ) : (
                <p className="empty-cart">
                    Your cart is empty
                </p>
            )}
        </div>
    )
}
export default DropCart;