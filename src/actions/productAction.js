import axios from 'axios';
import {PRODUCTS_LOADING, GET_PRODUCTS, GET_PRODUCT, GET_RANDOM_PRODUCT} from './types'
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const getProducts = (sort)=> async dispatch =>{
  const {category, brand} = sort
  // console.log(sort)
  // return
    dispatch(productLoading())
    const prodoctConfig = {...config, params:{category, brand}}
    await axios.get('/products/', prodoctConfig)
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