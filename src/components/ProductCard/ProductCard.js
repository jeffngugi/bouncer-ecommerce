import React from 'react'
import BeautyStars from "beauty-stars";
import styles from './ProductCard.module.css'
import Cost from '../Cost';
import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {
    // console.log(product)
    const {name, rating, price, id, avatar} = product;
    return (
        <div className="card p-2 shadow-sm mb-2">
        <div className={styles.container}>
        <img src={`/images/${avatar}`} alt="Avatar" className={styles.image} />
        <div className={styles.overlay}>
            <div className={styles.text}>
                <button type="button" className={`btn btn btn-outline-blue mx-1`}><i className="far fa-heart"></i></button>
                <button onClick={()=>alert('added to cart')}type="button" className="btn btn btn-outline-blue mx-1"><i className="fas fa-cart-plus"></i></button>
            </div>
        </div>
        </div>
        <div className="card-body justify-content-center mx-auto">
        <p className="card-text"><Link className="nav-link" to={`/product/${id}`}>{name}</Link></p>
        <span className='p-1 '><BeautyStars value={rating} size='10px' gap='4px' /></span>
        <Cost price={price}/>
        </div>
    </div>
    )
}

export default ProductCard

    