import React from 'react'
import './styles.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav--list'>
        <li className='nav--list-item'>test1</li>
        <li className='nav--list-item'>test2</li>
        <li className='nav--list-item nav--list-item--last'>test3</li>
      </ul>
      
    </nav>
  )
}

export default Nav
