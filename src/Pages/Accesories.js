import React, {useState, useEffect} from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import Order from '../components/Order/Order';
import ProductCard from '../components/ProductCard/ProductCard'
import ProductCardList from '../components/ProductCard/ProductCardList';
import AccesoriesSideNav from '../components/AccesoriesSideNav/AccesoriesSideNav'
import {connect} from 'react-redux'
import {getProducts} from '../actions/productAction'


const Accesories = ({products,getProducts }) => {

    const [grid, setGrid] = useState(true);
    const [myProducts, setMyProducts] = useState(products.products)

    // console.log(myproducts)

    useEffect(() => {
        const fetchData = async () => {
           await getProducts();
        //    await getProduct();
           setMyProducts(products.products);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [getProducts]);

    //   console.log(myProducts)
    // useEffect(() => {
    //     getProducts();
    //   }, [getProducts]);

    // console.log(products.loading)
    // let allProducts = products.products

    const renderGrid = ()=>{
        return (
            <div className='row'>
                {products.loading || myProducts === null ? (
            <p>Loading</p>
          ) : (
            myProducts.map(product => (
              <div className='col-sm-4'><ProductCard product={product}/></div>
            ))
          )}
               
            </div>
        )
    }

    const renderList = ()=>{
        return(
            <div className='row'>
             {products.loading || myProducts === null ? (
            <p>Loading</p>
          ) : (
            myProducts.map(product => (
                <ProductCardList product={product}/>
            ))
          )}
            {/* <ProductCardList />
            <ProductCardList />
            <ProductCardList /> */}
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
                    <AccesoriesSideNav />
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


const mapStateToProps = state =>({
    products:state.products
});

// export default connect(mapStateToProps, {getProducts}) (Accesories)
export default connect(mapStateToProps, { getProducts })(Accesories);
