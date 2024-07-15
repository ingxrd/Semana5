import { Link } from 'react-router-dom';
import {Navbar, Container, Nav} from 'react-bootstrap';

function Menu() {
    return(
        <header>
                <Navbar bg="dark" variant="dark" expand="md">
                    <Container fluid>
                        <Link to="/">
                        <img src="https://static.vecteezy.com/system/resources/previews/018/974/617/original/baby-bee-icon-png.png" width="32"/>
                        </Link>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav className="ms-auto">
                            <Link className="nav-link text-white" to="/login">Login</Link>
                            <Link className="nav-link text-white" to="/cadastro">Cadastro</Link>
                            <Link className="nav-link text-white" to="/contato">Contato</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </header>

    );
}

export default Menu;