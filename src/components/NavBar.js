import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const NavBar = () => {
    return (
        <ul className='navbar-ul'>
            <li className='navbar-li'>
                <Link exact to="/">List</Link>
            </li>
            <li className='navbar-li'>
                <Link to="/update">Update</Link>
            </li>
            <li className='navbar-li'>
                <Link to="/delete">Delete</Link>
            </li>
        </ul>
    );
};

export default NavBar;