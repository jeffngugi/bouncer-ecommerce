import React from 'react'
import styles from './OtherService.module.css'

const OtherService = ({title}) => {
    return (
        <div className={styles.service}>
        <i className="fas fa-2x fa-ship-plus"></i>
            <p className='h5'>{title}</p>
            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
    )
}

export default OtherService
