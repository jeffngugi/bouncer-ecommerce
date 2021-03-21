import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, shallowEqual} from 'react-redux'
import {Subtotal} from '../../utils/CartUtils'

const TopNav = () => {

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    // console.log(cartItems?.length)
    let sum = Subtotal(cartItems)
    return (
        <section className='top-nav bg-gray'>
            <div className='container'>
                
                     <div className="row d-flex justify-content-between px-4 mx-4">
                         <div className='currency align-self-center'>
                         <ul className="navbar-nav mx-auto list-group-horizontal">
                            <li className="nav-item">
                               EN
                            </li>
                            <li className="nav-item">
                               USD
                            </li>
                        </ul>
                         </div>
                         <div className='cart align-self-center'>
                        <ul className="navbar-nav mx-auto list-group-horizontal">
                            <li className="nav-item">
                                <Link className="nav-link p1" to='/'>My Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link p1" to='/cart'><i className="fas fa-shopping-cart"></i> {cartItems?.length} items <span className='cgray'>Ksh. {sum}</span></Link>
                            </li>
                            <li className="nav-item my-auto">
                                <button onClick={()=>alert('jeff ngugi')} className='btn'><i className="fas fa-search"></i></button>
                            </li>
                        </ul>
                         </div>
                     </div>
                
            </div>
        </section>
    )
}

export default TopNav
