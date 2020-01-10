import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <h1 class="logo">Product</h1>
                <input type="checkbox" id="chk" />
                <label for="chk" class="show-menu-btn">
                    <i class="fas fa-ellipsis-h"></i>
                </label>

                <ul class="menu">
                    <Link to="/">Home</Link>
                    <Link to="/prices">Prices</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Log In</Link>
                    <label for="chk" class="hide-menu-btn">
                        <i class="fas fa-times"></i>
                    </label>
                </ul>
            </div>
        );
    }
}

export default Header;