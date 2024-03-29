import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { BlogGrid,BlogList,SingleBlog,Cart,Home,Products, Accesories,SingleProduct, Product, NotFound } from '../Pages'

const Routes = () => {
    return (
        <>
            <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/blog-grid" component={BlogGrid} /> */}
            {/* <Route exact path="/blog-list" component={BlogList} /> */}
            {/* <Route exact path="/blog" component={SingleBlog} /> */}
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product/:productId" component={Product} />
            <Route exact path="/store" component={Products} />
            {/* <Route exact path="/accesories" component={Accesories} /> */}
            <Route exact path="/product" component={SingleProduct} />
            <Route component={NotFound} />
            </Switch>
        </>
    )
}

export default Routes
