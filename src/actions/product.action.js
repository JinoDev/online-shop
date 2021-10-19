export const getProducts = (products) => {
  return {
    type: "GET-PRODUCTS",
    payload: products,
  };
};

export const getError = (error) => {
  return {
    type: "GET-ERROR",
    payload: error,
  };
};

export const addToCart = (product) => {
  return {
    type: "ADD-TO-CART",
    payload: product,
  };
};

export const changeCategory = (category) => {

  return {
    type: 'CHANGE-CATEGORY',
    payload: category
  }
}