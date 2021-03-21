import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import CartPlus from '../components/Cart/CartPlus'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'


const Cart = () => {
    const cart = useSelector((state) => state.cart, shallowEqual);
    const {cartItems} = cart;
    console.log(cartItems)
    return (
        <section className='cart'>
            <Breadcrumb />
            <div className='container'>
                 {/* cart header */}
                <div className='row my-4'>
                    <div className='col-sm-7'>
                        <h2 className='h5'>PRODUCT</h2>
                    </div>
                    <div className='col-sm-5 d-flex justify-content-between'>
                        <h2 className='h5'>PRICE</h2>
                        <h2 className='h5'>QTY</h2>
                        <h2 className='h5'>UNIT PRICE</h2>
                    </div>            
                </div>
                <hr />
                {
                    cartItems?.length === 0 ?(
                        <div className='row'>
                            <div className='mx-auto my-5'>
                                <h2>Your cart is empty</h2>
                                <p className='cgray'> Click on the link below to continue shopping</p>
                                <Link to='/store'><button className='btn bg-deeppink cwhite'>Continue Shopping</button></Link>
                            </div>
                        </div>
                    ):(
                        cartItems.map(product => (
                            <>
                            <div className='row my-4'>
                            <div className='col-sm-7 d-flex d-flex justify-content-start'>
                                <button className='btn cred'>X</button>
                                <img src={`/images/${product.avatar}`} height='110' width='120'/>
                                <p className='align-self-center p2'><Link className="nav-link" to={`/product/${product.id}`}>{product.name}</Link></p>
                            </div>
                            <div className='col-sm-5 d-flex justify-content-between'>
                                <h2 className='h5 align-self-center'><span className='p2'>ksh.</span>{product.price}</h2>
                                <h2 className='h5 align-self-center'><CartPlus count={product.count}/></h2>
                                <h2 className='h5 align-self-center'><span className='p2'>ksh.</span>{(product.price)*(product.count)}</h2>
                            </div>  
                                
                        </div>
                        <hr />
                        </>
                        ))
                    )
                }
               
              
               {cartItems?.length !== 0 && (<div className='row'>
                    <div className='col-sm-8 my-auto'>
                        <div className='row'>
                            <div className='col'>
                                 <div className="input-group my-auto">
                            <input type="text" className="form-control p2 p-4" placeholder="Voucher code"  />
                            <div className="input-group-append">
                            <button className="btn btn-primary p1" type="button">Redeem</button>
                            </div>
                        </div></div>
                            <div className='col'></div>
                        </div>
                      
                    </div>
                    <div className='col-sm-4 px-1'>
                    <div className='row d-flex justify-content-between'>
                        <p>Subtotal</p>
                        <p>$998</p>
                    </div>
                    <div className='row d-flex justify-content-between'>
                        <p>Shipping fee</p>
                        <p>$20</p>
                    </div>
                    <div className='row d-flex justify-content-between'>
                        <p>Coupon</p>
                        <p>No</p>
                    </div>
                    <hr />
                    <div className='row d-flex justify-content-between'>
                        <p>TOTAL</p>
                        <p>$118</p>
                    </div>
                    <button className='btn-block border-0 bg-blue cwhite rounded p-3'> Check out</button>
                    </div>
                </div>)}
                
            </div>
        </section>
    )
}

export default Cart
