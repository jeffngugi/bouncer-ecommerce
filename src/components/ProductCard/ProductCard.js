import React from 'react'
import BeautyStars from "beauty-stars";
import styles from './ProductCard.module.css'
import Cost from '../Cost';

const ProductCard = () => {
    return (
        <div className="card p-2 shadow-sm mb-2">
        <div class={styles.container}>
        <img src="/images/product.png" alt="Avatar" class={styles.image} />
        <div class={styles.overlay}>
            <div class={styles.text}>
                <button type="button" class={`btn btn btn-outline-blue mx-1`}><i class="far fa-heart"></i></button>
                <button onPres={()=>alert('added to card')}type="button" class="btn btn btn-outline-blue mx-1"><i class="fas fa-cart-plus"></i></button>
            </div>
        </div>
        </div>
        <div className="card-body justify-content-center mx-auto">
        <p classN="card-text">Apple Macbook Pro</p>
        <p><BeautyStars value={2} size='10px' gap='4px' /></p>
        <Cost />
        </div>
    </div>
    )
}

export default ProductCard

    