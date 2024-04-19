import React from 'react';
import './NavBar.css';
import CategoryList from '../CategoryList/CategoryList';
import CartWidget from '../CartWidget/CartWidget';
import Brand from '../Brand/Brand';

function NavBar() {
    return (
        <nav className="navbar flex flex-col md:flex-row justify-between items-center p-4">
            <Brand />
            <CategoryList />
            <CartWidget />
        </nav>
    );
}

export default NavBar;
