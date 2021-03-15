import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import LatestNews from '../components/LatestNews/LatestNews';
import OtherService from '../components/OtherService/OtherService';
import ProductCard from '../components/ProductCard/ProductCard';
import Featured from "../components/Featured/Featured";
import SearchQuery from '../components/SearchQuery/SearchQuery'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {getProducts} from '../actions/productAction'



const Home = () => {

    const [sort, setSort] = useState({category:null, brand:null})
    const dispatch = useDispatch()
    const {products, loading} = useSelector(state => state.products, shallowEqual)
    
     useEffect(() => {        
        dispatch(getProducts(sort))
      }, [sort,dispatch]);

  
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

    const SliderDiv = ({name, image})=>{
        return(
            <div className='container'>
            <div>
                <div className='row slider'>
                
                        <div className='col-6 slider-text align-self-center'>
                            
                            <p className='h2'>{name}</p>
                            <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                            <p>More</p>
                            
                        </div>
                        <div className='col-6 slide-image text-center'>
                            <img src={`/images/${image}.png`} style={{maxWidth:'100%', maxHeight:'90%', right:'0', bottom:'0', position:'absolute'}} alt='img'/>
                        </div>
                   
                    
                </div>
                </div>
                </div>
        )
    }

    const ActionItem = ({image, title, bgcolor, color})=>{
        return(
            <div className={`col-sm-4 p-4 ${bgcolor}`}>
                    <div className='row'>
                        <div className='col-6'>
                            <p className={`h4 ${color}`}>{title}</p>
                            <p className={`h6 ${color}`}>Lorem Ipsum dolor sit amet, consectetur Lorem Ipsum dolor sit amet,adipiscing elit, labor</p>
                            <p className={`h6 ${color}`}>$399</p>
                        </div>
                        <div className='col-6'>
                            <img src={`/images/${image}.png`} style={{maxWidth:'100%', maxHeight:'90%', position:'absolute'}} alt='imagesd'/>
                        </div>
                    </div>
                </div>
        )
    }
    const renderAction =  ()=>(
        <section className='action'>
        <div className='container trendingItems'>
            <div className='row'>
                <ActionItem image='iPhone6s' bgcolor='bg-deeppink' title='iPhone 6' color='cwhite'/>
               <ActionItem image='Beats' bgcolor='bg-honeydew' title='iPhone 6' color='cblack'/>
               <ActionItem image='gopro' bgcolor='bg-gray' title='iPhone 6' color='cwhite'/>

            </div>
        </div>
        </section>
    )

    const renderBestSellers = ()=>{
        return(
            <section className='best_sellers'>
                <div className='container'>
                    <div className='row header'>
                        <p className='h4 mx-auto'>BEST SELLER</p>
                    </div>
                    <div className='row'>
                        <ul className="navbar-nav mx-auto list-group-horizontal">
                            <li className="nav-item">
                            <Link className="nav-link" to='/'>All</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to='/products-grid'>Mac</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to='/products-list'>iPhone</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to='/blog-list'>iPad</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to='/products-list'>iPod</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to='/blog-list'>Accesories</Link>
                            </li>
                            
                         </ul>                               
                    </div>
                    <div className='row'>
                    {loading || products === null ? (
            <p>Loading</p>
          ) : (
            products.map(product => (
                
              <div className='col-sm-3' key={product.key}><ProductCard product={product}  key={product.key}/></div>
            ))
          )}
                        
                    </div>
                    <div className='row my-5'>
                        <div className='mx-auto'>
                        <button type="button" className="btn btn-link h6 ">LOAD MORE</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const renderCallToAction = ()=>{
        return(
            <section className='callToaction my-10'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-6 align-self-center cta-text'>
                            
                            <p className='h2'>iPhone 6 Plus</p>
                            <p className=''>Performance and design. Taken right to the edge.</p>
                            <button className='btn btn-link h5 cwhite'><p>SHOP NOW</p></button>
                            
                        </div>
                        <div className='col-6 cta-image text-center'>
                            <img src='/images/iphone7.png' style={{maxWidth:'100%', maxHeight:'120%', right:'0', bottom:'0', position:'absolute'}} alt='iamge'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const renderOtherService = ()=>{
        return(
            <section className='otherServices'>
                <div className='container'>
                    <div className='row  my-5'>
                        <div className='col-sm-4'>
                            <OtherService title='FREE SHIPPING'/>
                        </div>
                        <div className='col-sm-4'><OtherService title='100% REFUND'/></div>
                        <div className='col-sm-4'><OtherService title='SUPPORT 24/7'/></div>
                    </div>
                </div>
            </section>
        )
    }

    const renderLatestNews = ()=> {
        return(
            <section className='latestNews'>
                <div className='container'>
                <div className='row'>
                        <div className='mx-auto'>
                        <p className='h4'>LATEST NEWS</p>
                        </div>
                    </div>
                    <div className='row my-5'>
                        <div className='col-sm-4'>
                          <LatestNews title='Typesetting industry'/>
                        </div>
                        <div className='col-sm-4'><LatestNews title='Typesetting industry'/></div>
                        <div className='col-sm-4'><LatestNews title='Typesetting industry'/></div>
                    </div>
                </div>
            </section>
        )
    }

  

    const renderFeatured = ()=>{
        return(
            <section className='featured'>
                <div className='container'>
                    <div className='row my-5'>
                        <div className='mx-auto'>
                        <p className='h4'>FEATURED PRODUCTS</p>
                        </div>
                    </div>
                    <div className='row my-4'>
                        <div className='col-sm-4'><Featured title='Beats Solo 2 On Ear Headphones - Black' image='Beats'/></div>
                        <div className='col-sm-4'><Featured title='H-Squared tvTray' image='tvtray'/></div>
                        <div className='col-sm-4'><Featured title='Netatmo Rain Gauge' image='raintray'/></div>
                    </div>
                </div>
            </section>
        )
    }

    const renderSearch = ()=>{
        return(
            <section className='homesearch'>
            <div className='container'>
                <div className='row my-5'>
                    <div className='mx-auto'>
                      <SearchQuery />
                    </div>
                </div>
            </div>
            </section>
        )
    }
    return (<>
        <section className='home-page'>
        
        <div className='landing-slider'>
        <Slider {...settings}>
            <SliderDiv name='iPhone X' image='iphonex'/>
            <SliderDiv name='iPhone 7' image='iphone7'/>
            <SliderDiv name='earBuds'image='earbuds'/>
        </Slider>
        </div>
        

        </section>
        {renderAction()}
        {renderBestSellers()}
        {renderCallToAction()}
        {renderOtherService()}
        {renderLatestNews()}
        {renderFeatured()}
        {renderSearch()}
        </>
    )
}



export default Home

