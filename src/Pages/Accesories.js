import React, {useState, useEffect} from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import Order from '../components/Order/Order';
import ProductCard from '../components/ProductCard/ProductCard'
import ProductCardList from '../components/ProductCard/ProductCardList';
import AccesoriesSideNav from '../components/AccesoriesSideNav/AccesoriesSideNav'
import { useDispatch, useSelector, shallowEqual} from 'react-redux'
import {getProducts} from '../actions/productAction'


const Accesories = ()=>{

    const [sort, setSort] = useState({category:null, brand:null})
    const [grid, setGrid] = useState(true);
    const dispatch = useDispatch()
    const {products, loading} = useSelector(state => state.products, shallowEqual)
    // console.log(sort);
     useEffect(() => {        
        dispatch(getProducts(sort))
      }, [sort,dispatch]);


    const renderGrid = ()=>{
        return (
            <div className='row'>
                {loading || products === null ? (
            <p>Loading</p>
          ) : (
            products.map(product => (
              <div  key={product.id} className='col-sm-4'><ProductCard product={product}/></div>
            ))
          )}
               
            </div>
        )
    }

    const renderList = ()=>{
        return(
            <div className='row'>
             {loading || products === null ? (
            <p>Loading</p>
          ) : (
            products.map(product => (
                <ProductCardList product={product} key={product.id}/>
            ))
          )}
            
            </div>
        )
    }

    const changeLayout = ()=>{
        setGrid(!grid)
    }

    return (
        <section>
        <Breadcrumb />
        <div className='container'>
            <div className='row'>
                <div className='col-sm-3'>
                    <AccesoriesSideNav onClick={({category, brand})=>setSort({...sort, category,brand })} />
                    {/* <AccesoriesSideNav onClick={(category)=>setCategory(category)} /> */}
                </div>
                    <div className='col-sm-9'>
                        <div className='row'>
                            Top image goes here
                        </div>
                        <Order onClick={()=>changeLayout()} status={grid}/>
                        
                         {grid ? renderGrid() : renderList()}
                        
                        <div className='row'>
                            <div className='mx-auto'>
                            Pagination goes here
                            </div>
                            
                        </div>
                    </div>
                
                 </div>
        </div>
        </section>
    )
}

export default Accesories;
