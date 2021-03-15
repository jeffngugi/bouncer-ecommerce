import React from 'react'

const Cost = ({price}) => {
    return (
        <p className='p1 cgray'><span className='p1 cred'>ksh.{price}</span> <del> $599</del></p>
    )
}

export default Cost
