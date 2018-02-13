const productForm = {
  name: null,
  description: null,
  price: null,
  stock: 0
}
const initialState = {
  products: [],
  pages: 0,
  total: 0,
  limit: 10,
  loading: true,
  productForm: { ...productForm },
  productError: {},

};

function products(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        loading: true
      };
    case 'LOAD_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload
      };
    case 'LOAD_PRODUCTS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case 'ADD_PRODUCTS':
      return {
        ...state,
        loading: true
      };
    case 'ADD_PRODUCTS_SUCCESS':
      return Object.assign({}, state, {
        products: state.products.concat([action.payload])
      });
/*       return {
        ...state,
        loading: false,
        products: action.payload
      }; */
    case 'ADD_PRODUCTS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case 'UPDATE_FIELD':
      return {
        ...state,
        productForm: { ...state.productForm, [action.result.field]: action.result.value },
        productError: { ...state.productError, [action.result.field]: null }
      };
    default:
      return state;
  }
}

export default products;