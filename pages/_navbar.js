import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../public/clickup_color-new.svg';
import Image from 'next/image';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
            <Image style={{
                width: '45%',
                height: '450%',
            }} alt='Logo'
            
            src={logo}
            />
               
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          />
          <Form className="d-flex">
            <p 
                style={{
                    textAlign: 'center',
                    alignItems: 'center',
                }}
            >
                Don&apos;t have an account?</p>
            <Button className='signUp' style={{
                    padding: '10px 20px',
                    backgroundColor: "#7b68ee",
                    
                    color: "#FFFFFF",
                    
                  }} variant="">Sign Up</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

