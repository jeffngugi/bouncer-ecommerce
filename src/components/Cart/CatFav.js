import React from 'react'
import {addToCart} from '../../actions/cartActions'
import {useDispatch} from 'react-redux'

const CatFav = ({product, count}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(addToCart(product, count))} className='p2 border-0 rounded m-1 px-2 py-2 clightblue bg-lighterblue'><i className="fas fa-cart-plus"></i> Add to cart</button>
                <button className='p2 border-0 rounded m-1 px-2 py-2 clightblue bg-lighterblue'><i className="far fa-heart"></i></button>
        </div>
    )
}

export default CatFav
