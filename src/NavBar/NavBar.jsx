import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo.png'
import style from './NavBar.module.css'
import PanelSearch from '../Home/PanelSearch';
export default function NavBar() {
  return (
    <div>
        <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><div className='d-flex align-items-center '>
        <img src={logo} alt="" />
        <span className=' mx-2 mt-2' style={{color:"gray"}}>Weather</span>
          </div></Navbar.Brand>
        <div className=' w-25'>
        <PanelSearch/>
        </div>
      </Container>
    </Navbar>
    </div>
  )
}
