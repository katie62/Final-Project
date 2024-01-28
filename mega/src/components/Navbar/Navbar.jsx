import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import {NavLink} from 'react-router-dom';


const Navbar=() => {
  return (
    <nav className='navbar'>
        <img className='logo' src={logo} alt="logo" />
      <div className="desktopMenu">
        <NavLink className="desktopMenuListItem" to='/'>Anasayfa</NavLink>
        <NavLink className="desktopMenuListItem" to='/hakkimizda'>Hakkımızda</NavLink>
        <NavLink className="desktopMenuListItem" to='/projeler'>Projeler</NavLink>

      </div>
        <NavLink to='/iletisim' className="desktopMenuBtn">
            İletişim
        </NavLink>
    </nav>
  )
}

export default Navbar