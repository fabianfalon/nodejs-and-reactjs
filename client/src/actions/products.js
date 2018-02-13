import * as axios from 'axios';

export function loadProducts() {
  return async dispatch => {
    axios
      .get(`http://localhost:5001/api/v1/products`, {
      })
      .then(res => {
        dispatch({
          type: 'LOAD_PRODUCTS_SUCCESS',
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: 'LOAD_PRODUCTS_FAIL',
          payload: err
        });
      });
  };
}

export function addProducts(data) {
  return async dispatch => {
    axios
      .post(`http://localhost:5001/api/v1/products`, {
        ...data
      })
      .then(res => {
        if (res.data) {
          dispatch({
            type: 'ADD_PRODUCTS_SUCCESS',
            payload: res.data
          });
        }
      })
      .catch(err => {
        dispatch({
            type: 'ADD_PRODUCTS_FAIL',
            payload: err
        });
      });
  };
}

export function updateField(field, value) {
  return { type: 'UPDATE_FIELD', result: { field, value } };
}


export default {
  loadProducts,
  addProducts,
  updateField
};
