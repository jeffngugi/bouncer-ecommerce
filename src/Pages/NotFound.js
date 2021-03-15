import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import {Link, useHistory} from 'react-router-dom';

const NotFound = () => {
    const history = useHistory()
    return (
        <section className='notfound'>
            <Breadcrumb />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4  d-flex align-items-center'>
                        <div className=''>
                        <p className='h2'>Ooops!!</p>
                        <p className='h6 cgray'>We couldn't find what you are looking for</p>
                        <button className='border-0 rounded-pill p-2 my-2 p1 cwhite bg-deeppink' onClick={() => {history.goBack();}}>
                            Go back
                        </button>
                        </div>
                    </div>
                    <div className='col-sm-8 d-flex align-items-center'>
                    <img src={`/gif/4339-not-found.gif`} alt='not found' style={{maxWidth:"100%", width:"100%"}}/>
                    </div>
                </div>
                <div className='gif'>
                {/*  */}
                </div>
            </div>
            
        </section>
    )
}

export default NotFound
