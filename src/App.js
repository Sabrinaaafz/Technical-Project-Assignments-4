import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portofolio from './components/Portofolio/Portofolio';
import Blog from './components/Blog.js/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';


// import NavBar from './Components/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <>
     <div>
      <Navbar className='nav-color' variant='light' expand="lg" >
        <Container>
          <Navbar.Brand href="/" className='nav-brand'>Sabrina Fauzia</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/About"}>About Me</Nav.Link>
              <Nav.Link as={Link} to={"/Portofolio"}>Portofolio</Nav.Link>
              <Nav.Link as={Link} to={"/Blog"}>Blog and Articles</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="about" element={ <About/> } />
    <Route path="Portofolio" element={ <Portofolio/> } />
    <Route path="Blog" element={ <Blog/> } />  
    </Routes>


    </>
  );
}

export default App;
