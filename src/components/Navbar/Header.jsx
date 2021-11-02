import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'
import { Link } from 'react-router-dom'
import image from './maverick_logo2.png'

const Header = () => {
  return (
    <>
      <Nav>
        <Bars>
          <img
            src={image}
            height={90}
            width={150}
            alt='Maverick Digital Stores'
          />
        </Bars>
        <Link to='/'>
          <img
            src={image}
            height={90}
            width={150}
            alt='Maverick Digital Stores'
          />
        </Link>
        <NavMenu>
          <NavLink to='/products/console' activeStyle>
            CONSOLE
          </NavLink>
          <NavLink to='/products/laptops' activeStyle>
            LAPTOPS
          </NavLink>
          <NavLink to='/products/watches' activeStyle>
            WATCHES
          </NavLink>
          <NavLink to='/products/accessories' activeStyle>
            ACCESSORIES
          </NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to='/cart' activeStyle>
            <i className='fas fa-shopping-cart' />
            Cart
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Login/Register</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Header