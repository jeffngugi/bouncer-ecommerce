import React from 'react'
import Cost from '../Cost'
import styles from './ProductCard.module.css'
import CatFav from '../Cart/CatFav'


const ProductCardList = ({product}) => {
    const {name, information, price} = product;
    return (
        <div className='row ml-1 my-2'>
            <div className='col-sm-4'>
                <div className='shadow-sm p-4'>
                <img src="/images/product.png" alt="Avatar" class={styles.image} />
                </div>            
            </div>
            <div className='col-sm-8 py-1'>
                <h3 className='h5'>{name}</h3>
                <p className='p1'>0 reviews Submit a review</p>
                <hr />
                <Cost price={price}/>
                <p className='p1'>{information}</p>
                 <CatFav />
            </div>
            <div className='container'>
            <hr className='my-1'/>
            </div>
            
        </div>
    )
}

export default ProductCardList
