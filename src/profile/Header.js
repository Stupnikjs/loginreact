import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className='header'>
            <h1 className='headeruser'><Link to={"/profile"}>{props.user.username}</Link></h1>       
            <button className='btnlogout'>
                <Link to="/login"> Logout </Link>
            </button>
               
        </header>
    );
};

export default Header;