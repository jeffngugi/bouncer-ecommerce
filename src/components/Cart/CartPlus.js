import React from 'react'

const CartPlus = ({count}) => {
    return (
        <div className="mr-auto p-2 bg-lighterblue rounded">
            <button className='border-0 bg-lighterblue cblue mx-1'>+</button>
            <span className='mx-2'>{count}</span>
            <button className='border-0 bg-lighterblue cblue mx-1'>-</button>
        </div>
    )
}

export default CartPlus
