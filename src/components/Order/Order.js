import React from 'react'
import styles from './order.module.css'

const Order = ({onClick, status}) => {
    return (
        <div className="d-flex bg-lightgray pb-0">
        <div className="p-2">13 items</div>
        <div className="p-2">Sort By </div>
        <div className='p-2'>
        <select className='rounded p1'>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
        </select>
        </div>
        <div className="ml-auto p-2 d-flex">
            <div className=''><button onClick={onClick} className='border-0' disabled={status}><i className="fas fa-th"></i></button></div>
            <div className=''><button onClick={onClick} className='border-0' disabled={!status}><i className="fas fa-bars"></i></button></div>
        </div>
      </div>
    )
}

export default Order
