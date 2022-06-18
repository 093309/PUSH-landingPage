import React, { useState } from 'react';
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import TableRowsIcon from '@mui/icons-material/TableRows';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import img from './../../../img/logo.png'

const Header = () => {

  const [sideBar, setSideBar] = useState(false);

  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const body  = document.body;
    header.classList.toggle('active', window.scrollY > 90)
    body.classList.toggle('noscroll');
  })
  return (
    <>
      <header className='header'>
        <div className="container flex">
          <div className="logo">
            <a href="#"><img src={img} alt="logo" /></a>
          </div>
          <div className="nav">
            <ul className={sideBar ? 'nav-links-sidebar' : 'nav-links'} onClick={() => { setSideBar(false) }}>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/pages">Pages</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              <li className="icon">
                <SearchIcon className='HeaderIcon' />
                <WorkIcon className='HeaderIcon' />
                <GridViewOutlinedIcon className='HeaderIcon' />
              </li>
            </ul>
          </div>
          <button className="navbar-items-icon" onClick={() => setSideBar(!sideBar)}>
            {sideBar ? <CloseOutlinedIcon /> : <TableRowsIcon />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header