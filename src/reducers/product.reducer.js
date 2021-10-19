export const productsReducer = (state, action) => {
  switch (action.type) {
    case "GET-PRODUCTS":
      return { ...state, fetchedProducts: action.payload };

    case "GET-Error":
      return {
        ...state,
        error: action.payload,
      };

    case "ADD-TO-CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "CHANGE-CATEGORY":
      const target = state.fetchedProducts.filter((product) => {
        return product.category === action.payload;
      });
      console.log(target);

      return {
        ...state, 
        clonedProducts: target,
      }
    default:
      return state;
  }
};
