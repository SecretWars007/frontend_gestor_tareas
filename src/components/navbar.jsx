import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cookies from 'js-cookie';

const navbar = () => {
  // return (
  //   <nav>
  //     <ul>
  //       <li><Link to="/home">Inicio</Link></li>
  //       <li><Link to="/register">Usuario</Link></li>
  //       <li><Link to="/tareas">Tareas</Link></li>
  //       <li><Link to="/">Login</Link></li>
  //     </ul>
  //   </nav>
  // );
 const handleLogin = async () => {
 Cookies.remove("token");
};


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Yanita - Gestor de Tareas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Inicio</Nav.Link>
            <NavDropdown title="Usuario" id="basic-nav-dropdown">
              <NavDropdown.Item href="/register">
                Registrar Usuario
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tarea" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tareas">
                Lista de Tareas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Registrar Tarea
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Divider/>
            <NavDropdown.Divider/>
            <NavDropdown.Divider/>
            <Nav.Link href="/" onClick={()=> handleLogin()} >Cerrar Sesión</Nav.Link>
            <NavDropdown.Divider/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;