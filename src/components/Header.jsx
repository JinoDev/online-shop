import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { product_context } from '../context/products.context'

function Header() {
    const { state, dispatch } = useContext(product_context);
    return (
        <div className="mt-3">
            {/* Logo */}
            <span className="display-3 fw-bold text-center text-secondary border-bottom">My Online Shop</span>

            {/* Navbar */}
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Online Brand</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Brands</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop" className="nav-link">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Designers</Link>
                            </li>
                        </ul>
                        <button className="btn btn-outline-info">Login</button>
                        <span>
                            <FaShoppingCart style={{ fontSize: '2rem' }} />
                            <span className="badge bg-danger text-white">{state.cart.length}</span>
                        </span>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
