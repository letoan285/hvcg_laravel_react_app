import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
    render(){
        return (
            <div className="Contact">
                <h1>Contact Page</h1>
                <Link to="/">Go home</Link>
            </div>
        );
    }
    
}
export default Contact;