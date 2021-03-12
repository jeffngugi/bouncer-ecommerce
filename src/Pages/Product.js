import React,{useEffect, useState} from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import ProductCard from '../components/ProductCard/ProductCard'
import {connect} from 'react-redux'
import {getRandomProduct, getProduct} from '../actions/productAction'
import BeautyStars from "beauty-stars";
import Cost from '../components/Cost'
import { useParams } from 'react-router-dom'
import CatFav from '../components/CatFav/CatFav';

const Product = ({product,randomProduct, loading, getRandomProduct, getProduct}) => {

    const [myProduct, setMyProduct] = useState(null)
    let {productId} = useParams()
    console.log(productId)
     useEffect(() => {
        
        const fetchData = async ()=>{
            await getRandomProduct();
            await getProduct();
            setMyProduct(product);

        }
         fetchData();
         
      }, [setMyProduct]);

      console.log(product)
    
      
   
    return (
        <>
        <Breadcrumb />
        <div className='container'>
        <div className='row'>
            <div className='col-sm-9'>
            <div className='row'>
                <div className='col-sm-5'>
                    <div className='bg-gray'>
                    <img src='/images/Beats.png' className='fitImg'/>
                    </div>
                   
                </div>
                <div className='col-sm-7'>
                    <h2 className='h5'>Beats Solo2 On Ear Headphones - Black</h2>
                    <div className='p2 d-flex p-1 my-1'>
                    <BeautyStars value={2} size='10px' gap='4px' className='my-1'/>
                    <p className='cgray mx-2'>0 reviews</p>
                    <p className='cblue '>Submit a review</p>
                    </div>
                    <hr />
                    <Cost />
                    <div className='row'>
                        <div className='col-4'><p className='font-weight-bold p2'>Availability:</p></div>
                        <div className='col-8'><p className='p2'>In stock</p></div>
                    </div>
                    <div className='row'>
                        <div className='col-4'><p className='font-weight-bold p2'>Category:</p></div>
                        <div className='col-8'><p className='p2'>In stock</p></div>
                    </div>
                    <div className='row'>
                        <div className='col-4'><p className='font-weight-bold p2'>Free shipping:</p></div>
                        <div className='col-8'><p className='p2'>In stock</p></div>
                    </div>
                   
                    <hr />
                    <div className='row'>
                        <div className='col-4'><p className='font-weight-bold p2'>Select Color:</p></div>
                        <div className='col-8'><p className='p2'>Colors</p></div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-4'><p className='font-weight-bold p2'>Size:</p></div>
                        <div className='col-8'>
                        <select className='rounded'>
                        <option value="grapefruit">L</option>
                        <option value="lime">LG</option>
                        <option selected value="coconut">XL</option>
                        <option value="mango">XXL</option>
                        </select>
                        </div>
                    </div>
                    <div className="row d-flex">
                    <div className="mr-auto p-2 bg-lighterblue rounded">
                        <button className='border-0 bg-lighterblue cblue mx-1'>+</button>
                        <span className='mx-2'>2</span>
                        <button className='border-0 bg-lighterblue cblue mx-1'>-</button>
                    </div>
                    <CatFav />
                    </div>
                    <hr />
                    <div className='row p2'>
                        <div className='col-6'>
                            <button className='btn-block border-0 bg-fblue cwhite rounded p-2'> <i className="fab fa-facebook-f mx-2 cwhite"></i>Share on facebook</button>
                        </div>
                        <div className='col-6'>
                            <button className='btn-block border-0 bg-lightblue cwhite rounded p-2'> <i className="fab fa-twitter mx-2 cwhite"></i>Share on Twitter</button>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            <div className='col-sm-3'>
            <h2 className='cgray h4 m-2'> BEST SELLER </h2>
                {
                    loading || randomProduct === null ?(
                        <p>Loading</p>
                    ):(
                        <>
                        
                        <ProductCard product={randomProduct} />
                        </>
                    )
                }
                {/* <ProductCard /> */}
                <div className='p-2 bg-gray'>
                    <h1 className='h5 m-2'>GoPro Hero 6</h1>
                    <p className='p1 m-2'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
                    <p className='h4 cgray m-2'>$299</p>
                    <img src='/images/gopro.png' alt='product'/>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

const mapStateToProps = state =>({
    product:state.products.product,
    loading:state.products.loading,
    randomProduct:state.products.randomProduct
});

// export default Product
export default connect(mapStateToProps, { getRandomProduct, getProduct })(Product);

//     const fetchData = async()=>{
    //         getRandomProduct();
    //         setMyProduct(product)
    //     }
    //      console.log(myProduct)
    //      fetchData()
    //     //  console.log(product)
    //   }, [getProducts]);