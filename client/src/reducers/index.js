import products from './products';

import { combineReducers } from 'redux';

const reducer = combineReducers({
  products: products
});

export default reducer;