
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-primary ">
      <Container>
        <Navbar.Brand href="/" className='text-white '> <h2 className=' capitalize'>React user</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
            <Nav.Link  as={NavLink} style={{textDecoration:"none", color:"white",fontSize:"23px"}}  to="/" > Home </Nav.Link>
            <Nav.Link as={NavLink} style={{textDecoration:"none", color:"white" ,fontSize:"23px"}} to="/about"> About</Nav.Link>
            <Nav.Link as={NavLink} style={{textDecoration:"none", color:"white",fontSize:"23px"}} to="/contact">Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        <Link to="/adduser" className='text-3xl text-white btn border-white capitalize'>add user</Link>
      </Container>
    </Navbar>
  );
}

export default Header;