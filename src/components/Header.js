import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/header.css";

function Header() {


  return (
    <header>
      <nav>
          <Link  to={"/"}>
            MyIndiaa
          </Link>
          <Link  to={"/cart"} className='cart'>
          🛒
          </Link>
      </nav>
    </header>
  );
}

export default Header;