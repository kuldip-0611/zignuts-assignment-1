import React,{useState} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
  
} from 'reactstrap';

import logo from '../assets/images/logo-1 1.svg'
import assets1 from '../assets/images/Asset 1.svg';
import asset2 from '../assets/images/Asset 2.svg';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log('toggle is open')
  }
  return (
   <>
   <img src={assets1} className='header-left-img' />
    <Container>
    
    <Navbar light expand="lg">
        <NavbarBrand href="/"><img src={logo} className="navbar-logo-img" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" nav innavbar>
            <NavItem className='nav-item'>
              <NavLink href="/components/" className='nav-item-individual'>About Us</NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink className='nav-item-individual'>
                Service
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink href="https://github.com/reactstrap/reactstrap"className='nav-item-individual'>
                Team
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink href="https://github.com/reactstrap/reactstrap"className='nav-item-individual'>
                Client
              </NavLink>
            </NavItem>
            <NavItem className='nav-item'>
              <NavLink href="https://github.com/reactstrap/reactstrap"className='nav-item-individual'>
                Contac Us
              </NavLink>
            </NavItem>
            
          </Nav>
         
        </Collapse>
      </Navbar>
    </Container>
    <img src={asset2} className='header-right-img' />
   </>
  )
}

export default Header
