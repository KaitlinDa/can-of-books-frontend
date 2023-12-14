import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <Navbar expand='lg' className='navbar'>
        <Link to='/' className='navbar-brand'>
          Can of Books
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
            <Link to='/edit' className='nav-link'>
              Edit & Delete Books
            </Link>
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}