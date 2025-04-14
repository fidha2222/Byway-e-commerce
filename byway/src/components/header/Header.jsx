import React from 'react';
import './header.css'; // CSS file
import { ReactComponent as Logo } from '../../assets/logo.svg'; //logo
import { ReactComponent as Cart } from '../../assets/cart.svg';

const Header = () => {
  return (
    <header className="header">
      <div className='left'>
        <Logo className="logo" />
        Byway
      </div>
      <nav>
        <a href="/"> 
          <Cart className="cart" /> 
        </a>
        <button className='login'> Log In</button>
        <button className='signup'>Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;