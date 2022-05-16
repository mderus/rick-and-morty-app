import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import LinkContainer from 'react-router-bootstrap/LinkContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
function MainNav() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <LinkContainer to='/characters'>
          <Navbar.Brand>Rick & Morty App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{maxHeight: '100px'}}
            navbarScroll
          >
            <LinkContainer to='/characters'>
              <Nav.Link>All characters</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/favorite-characters'>
              <Nav.Link>My Favourites</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
