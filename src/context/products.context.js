import React, { createContext, useReducer } from 'react';
import {productsReducer} from '../reducers/product.reducer'

export const product_context = createContext();

function ProdContext({children}) {
    const [state, dispatch] = useReducer(productsReducer, { fetchedProducts: [], cart: [] });
  
    
    return (
        <product_context.Provider value={{state, dispatch}}>
            {children}
        </product_context.Provider>
    )
}

export default ProdContext
