import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {product_context} from '../context/products.context';
import {changeCategory} from '../actions/product.action'

function Sidebar({className}) {
    const {state, dispatch} = useContext(product_context);

function selectCategory(category) {

    dispatch(changeCategory(category))
}

    return (
        <div className={className}>
            <span className="display-6 d-block mb-3">Shop</span>
            
                <span className="d-block text-start border-top pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#category" aria-expanded="false" aria-controls="collapseWidthExample">
                Category &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                </span>
           
            <div >
                <div className="collapse collapse-vertical" id="category">
                    <ul className="nav navbar">
                        <li className="nav-item">
                            <select onSelect={(event) => {
                                selectCategory(event.target.value)
                            }}>
                            <option className="nav-link" value="electronics">Electronics</option>
                            <option className="nav-link" value="men's clothing">Men's Clothing</option>
                            <option className="nav-link" value="women's clothing">Women's Clothing</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>


                <span className="d-block text-start border-top pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#price-range" aria-expanded="false" aria-controls="collapseWidthExample">
                Price Range &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                </span>
           
            <div >
                <div className="collapse collapse-vertical" id="price-range">
                    <ul className="nav navbar">
                        <li className="nav-item">
                            <Link className="nav-link">Price Range1</Link>
                            <Link className="nav-link">Price Range2</Link>
                            <Link className="nav-link">Price Range3</Link>
                        </li>
                    </ul>
                </div>
            </div>




                <span className="d-block text-start border-top pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#shipping" aria-expanded="false" aria-controls="collapseWidthExample">
                Shipping &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
                </span>
           
            <div >
                <div className="collapse collapse-vertical" id="shipping">
                    <ul className="nav navbar">
                        <li className="nav-item">
                            <Link className="nav-link">Shipping1</Link>
                            <Link className="nav-link">Shipping2</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
