import {REMOVE_FROM_CART, ADD_TO_CART,CLEAR_CART} from './types'

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

// Add to cart
export const addToCart = (product, count=1)=> async (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    let exists = false;
    cartItems.forEach(e => {
        if(e.id === product.id)
        exists = true;
        e.count ++
    });

    if(!exists){
        cartItems.push({...product, count})
    }
    // console.log(cartItems)
    dispatch({
        type:ADD_TO_CART,
        payload:{cartItems} 
    })

     localStorage.setItem("cartItems", JSON.stringify(cartItems));

    
    
}

export const removeFromCart = (product) => async dispatch =>{

}

export const clearCart = () => async dispatch =>{
  
}