import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { BlogGrid,BlogList,SingleBlog,Cart,Home,ProductsGrid, ProductsList,SingleProduct } from '../Pages'

const Routes = () => {
    return (
        <>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog-grid" component={BlogGrid} />
            <Route exact path="/blog-list" component={BlogList} />
            <Route exact path="/blog" component={SingleBlog} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/products-grid" component={ProductsGrid} />
            <Route exact path="/products-list" component={ProductsList} />
            <Route exact path="/product" component={SingleProduct} />
            </Switch>
        </>
    )
}

export default Routes
