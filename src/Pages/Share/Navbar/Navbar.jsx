// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <p>this is navbar </p>
            <Link to='/home'>Home</Link>
        </div>
    );
};

export default Navbar;