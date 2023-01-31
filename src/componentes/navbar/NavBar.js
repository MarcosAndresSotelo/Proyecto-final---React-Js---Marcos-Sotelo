import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// import CarritoCompras from '../carrito/CarritoCompras';


export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container style={{ textDecoration: 'none' }}>
                <Link to='/inicio' style={{ fontSize: "50px", textDecoration: 'none' }}>Maria</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ paddingLeft: "350px", fontSize: "20px" }}>
                        <Link to='/inicio' style={{ textDecoration: 'none', paddingLeft: "30px" }}>Inicio</Link>
                        <NavDropdown title='Living y Comedor'>
                            <Link to='/livingComedor'>
                                Todos los articulos
                            </Link>
                            <br />
                            <Link to='/livingComedor/accesorio'>
                                Accesorio
                            </Link>
                            <br />
                            <Link to='/livingComedor/mantel'>
                                Manteles
                            </Link>
                            <br />
                            <Link to='/livingComedor/cortina'>
                                Cortinas
                            </Link>
                        </NavDropdown>


                        <NavDropdown title='Dormitorio y Baño'>
                            <Link to='/dormitorioBanio'>
                                Todos los articulos
                            </Link>
                            <br />
                            <Link to='/dormitorioBanio/acolchado'>
                                Acolchados
                            </Link>
                            <br />
                            <Link to='/dormitorioBanio/alfombra'>
                                Alfombras
                            </Link>
                            <br />
                            <Link to='/dormitorioBanio/frazada'>
                                Frazadas
                            </Link>
                        </NavDropdown>

                        <Link to='/acercaDe' style={{ textDecoration: 'none', paddingLeft: "30px" }} >Acerca de</Link>
                        <Link to='/contacto' style={{ textDecoration: 'none', paddingLeft: "30px" }}>Contacto</Link>
                        <Link to='/carrito' style={{ textDecoration: 'none', paddingLeft: "30px" }}>Carrito de prueba </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    );
}

export default NavBar