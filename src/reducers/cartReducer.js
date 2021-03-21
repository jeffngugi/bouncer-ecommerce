import {CLEAR_CART, ADD_TO_CART, REMOVE_FROM_CART} from '../actions/types'

const initialState ={
    cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") 
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cartItems:action.payload.cartItems
            }
        default:
            return state
            
    }
}