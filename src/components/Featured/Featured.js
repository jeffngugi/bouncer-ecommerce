import React from 'react'
import Cost from '../Cost'
import styles from './Featured.module.css'
const Featured = ({title, image}) => {
    return (
        <div className='row'>
        <div className='col-4'>
        <img src={`/images/${image}.png`} className={styles.img}/>
        </div>
     
        <div className='col-8'>
            <h5 className='h6'>{title}</h5>
            <p className='p1'>Lorem Ipsum is simply dummy text of the printing and</p>
            <Cost />
        </div>
    </div>
    )
}

export default Featured
