import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Product from '../../components/product/Product';

class Products extends Component {
    render(){
        console.log(this.props)
        return (
            <div className="Products">
                <h1>Products Page</h1>
                <Route path="/products/:id" component={ Product } />
                <Link to="/products/2">Detail</Link>
            </div>
        );
    }
    
}
export default Products;