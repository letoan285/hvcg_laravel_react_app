import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    render(){
        console.log(this.props)
        return (
            <div className="Product">
                <h1>Product detail</h1>
                <Link to="/">Go home</Link>
            </div>
        );
    }
    
}
export default Product;