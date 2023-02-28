import React, {useState} from 'react'
import './navbar.css'
import LOGOIMG from '../../images/logo.png'
import LANGUAGE1 from '../../images/usa.png'

import {BsSearch} from 'react-icons/bs'

function Navbar() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className='navbar'>
        <a href="/Bitcoin-Explorer" className='logo__link'>
          <img src={LOGOIMG} alt="logo" className='logo' />
        </a>
        <div className="search__bar">
          <input type="text" placeholder='Block, Transaction or Address' className={isActive ? 'input__active': null} />
          <button onClick={toggleClass}>
            <BsSearch />
          </button>
        </div>
        <img src={LANGUAGE1} alt="language" className='language__btn' />
    </nav>
  )
}

export default Navbar
