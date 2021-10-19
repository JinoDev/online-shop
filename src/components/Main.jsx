import React, { useEffect, useContext } from 'react'
import Product from './Product'
import { fetchProducts } from '../api/fakestore'
import { getProducts, getError } from '../actions/product.action'
import { product_context } from '../context/products.context'

function Main({ className }) {
    const pcd = useContext(product_context);
    console.log(pcd)
    useEffect(() => {
        fetchProducts('https://fakestoreapi.com/products')
            .then(data => pcd.dispatch(getProducts(data)))
            .catch(err => pcd.dispatch(getError(err)))
    }, []);

    return (
        <div className={className}>
            {pcd.state.fetchedProducts.map((prod, index) =>
                <Product {...prod} key={index} />
            )}

        </div>
    )
}

export default Main