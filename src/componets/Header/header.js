import React from 'react';
import Nav from '../Nav/nav';
import './styles.css';

const Header = () => {
  return <header className='header'>
    <h1 className='header--title'>Kevin Mitchell</h1>
    <Nav/>
  </header>
}

export default Header