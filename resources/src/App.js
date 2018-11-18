import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import { Route } from 'react-router-dom';
import Home from './containers/home/Home';
import Products from './containers/products/Products';
import Contact from './views/contact/Contact';
import About from './views/about/About';

class App extends Component {
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <Route path="/" exact component={ Home }/>
                <Route path="/products" exact component={ Products }/>
                <Route path="/contact" component={ Contact }/>
                <Route path="/about-us" component={ About }/>
            </React.Fragment>
        );
    }
}
export default App;