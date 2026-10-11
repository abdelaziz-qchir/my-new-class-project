import { Link } from "react-router-dom";
import logo from "../assets/Caps-Shop-Logo.png";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

function Header({cart, fav, slideCart}) {
    return (
        <header>
            <Link className="logo-link" to="/"><img src={logo} className="logo" alt="React logo" /></Link>
            <ul>
                <li><Link className="header-link" to="/acceuil">Acceuil</Link></li>
                <li><Link className="header-link" to="/service">Service</Link></li>
                <li><Link className="header-link" to="/contact">Contact</Link></li>
                <li><Link className="header-link" to="/login">Login</Link></li>
                <li><button className="shopping-cart" onClick={slideCart}><FaShoppingCart /> {cart.length}</button></li>
                <li><span><FaHeart />{fav.length}</span></li>
            </ul>
        </header>
    );
}

export default Header;