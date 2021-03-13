import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import CartPlus from '../components/Cart/CartPlus'

const Cart = () => {
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
                <div className='row my-4'>
                    <div className='col-sm-7'>
                        <h2 className='h5'>PRODUCT</h2>
                    </div>
                    <div className='col-sm-5 d-flex justify-content-between'>
                        <h2 className='h5'>$998</h2>
                        <h2 className='h5'><CartPlus /></h2>
                        <h2 className='h5'>$499</h2>
                    </div>  
                        
                </div>
                <hr />
                <div className='row'>
                    <div className='col-sm-8 my-auto'>
                        <div className='row'>
                            <div className='col'>
                                 <div class="input-group my-auto">
                            <input type="text" class="form-control p2 p-4" placeholder="Voucher code"  />
                            <div class="input-group-append">
                            <button class="btn btn-primary p1" type="button">Redeem</button>
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
                </div>
            </div>
        </section>
    )
}

export default Cart
