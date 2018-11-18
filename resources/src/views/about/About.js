import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render(){
        return (
            <div className="About">
                <h1>About Page</h1>
                <Link to="/">Go home</Link>
            </div>
        );
    }
    
}
export default About;