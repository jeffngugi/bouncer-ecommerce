
import {GET_PRODUCT, GET_PRODUCTS,GET_RANDOM_PRODUCT, PRODUCTS_LOADING} from '../actions/types';

const initialState = {
    randomProduct:null,
    product:null,
    products:null,
    loading:true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RANDOM_PRODUCT:
            return{
                ...state,
                randomProduct:action.payload,
                loading:false
            }
        case GET_PRODUCT:
            return{
                ...state,
                product:action.payload,
                loading:false
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case PRODUCTS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}