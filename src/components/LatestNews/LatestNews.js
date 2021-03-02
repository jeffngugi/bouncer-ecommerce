import React from 'react'
import styles from './LatestNews.module.css'

const LatestNews = ({title}) => {
    return (
    <div className='row'>
        <div className='col-4'>
        <img src='/images/gopro.png' className={styles.img}/>
        </div>
     
        <div className='col-8'>
            <h5 className='h6 cgray'>01 Jan, 2015</h5>
            <h5 className='h6'>{title}</h5>
            <p className='p1'>Lorem Ipsum is simply dummy text of the printing and</p>
        </div>
    </div>
    )
}

export default LatestNews
