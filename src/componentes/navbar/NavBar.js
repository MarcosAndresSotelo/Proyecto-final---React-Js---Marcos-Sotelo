import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import { useCartContext } from '../../context/CarritoContext';
import logo from "./navBarImg/logo.jpg"


export const NavBar = () => {

    const { cart } = useCartContext()




    return (
        <Navbar className='Nav' bg="light" expand="lg">
            <Container style={{ textDecoration: 'none' }} className="d-flex">

                <Link to='/' className='text-secondary' style={{ fontSize: "50px", textDecoration: 'none' }}><img src={logo} alt="logo" ></img></Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto d-fex justify-content-end align-items-center w-100" style={{ fontSize: "20px" }}>
                        <Link to='/' className='m-2 text-secondary' style={{ textDecoration: 'none' }}>Inicio</Link>


                        <NavDropdown title='Living y Comedor'>
                            <Link to='/livingComedor' className='dropdown-item '>
                                Todos los articulos
                            </Link>
                            <br />
                            <Link to='/livingComedor/accesorio' className='dropdown-item'>
                                Accesorio
                            </Link>
                            <br />
                            <Link to='/livingComedor/mantel' className='dropdown-item'>
                                Manteles
                            </Link>
                            <br />
                            <Link to='/livingComedor/cortina' className='dropdown-item'>
                                Cortinas
                            </Link>
                        </NavDropdown>


                        <NavDropdown title='Dormitorio y Baño' className='m-2'>
                            <Link to='/dormitorioBano' className='dropdown-item'>
                                Todos los articulos
                            </Link>
                            <br />
                            <Link to='/dormitorioBano/acolchado' className='dropdown-item'>
                                Acolchados
                            </Link>
                            <br />
                            <Link to='/dormitorioBano/alfombra' className='dropdown-item'>
                                Alfombras
                            </Link>
                            <br />
                            <Link to='/dormitorioBano/frazada' className='dropdown-item'>
                                Frazadas
                            </Link>
                        </NavDropdown>

                        <Link to='/acercaDe' style={{ textDecoration: 'none' }} className="m-2 text-secondary" >Acerca de</Link>
                        <Link to='/contacto' style={{ textDecoration: 'none' }} className="m-2 text-secondary">Contacto</Link>

                        <Link to="/carrito" className='text-dark fs-2'  style={{ textDecoration: 'none' }}>
                            <FaShoppingCart /><span className="cartCount">{cart.length}</span>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar