import axios from 'axios';
import {PRODUCTS_LOADING, GET_PRODUCTS, GET_PRODUCT, GET_RANDOM_PRODUCT} from './types'
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const getProducts = ()=> async dispatch =>{
    dispatch(productLoading())
   
    await axios.get('/products', config)
    .then(res => dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    }))
    .catch(err => console.log(err))

}



export const getProduct = (id) => (dispatch) => {
    dispatch(productLoading());
    // console.log('get product')
    axios.get(`/products/${id}`, config)
      .then((res) =>
        dispatch({
          type: GET_PRODUCT,
          payload: res.data
        })
      )
      .catch(err => console.log(err))
  };

  export const getRandomProduct = () => (dispatch) => {
    dispatch(productLoading());
    // console.log('get product')
    axios.get('/products/1', config)
      .then((res) =>
        dispatch({
          type: GET_RANDOM_PRODUCT,
          payload: res.data
        })
      )
      .catch(err => console.log(err))
  };

export const productLoading = ()=>{
    return{
        type:PRODUCTS_LOADING
    }
}