
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <div className='mb-5'>
                <Navbar fixed='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/"><img style={{ width: '70px', height: '25px' }} src="https://static.wixstatic.com/media/351431_ca8d1c9a454c48179efe367d9fb85397~mv2.png/v1/fill/w_560,h_214,al_c,q_85,usm_0.66_1.00_0.01/Adult-Gym-Logo-White.webp" alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="home#services">Services</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                                <Nav.Link as={Link} to="about">About me</Nav.Link>
                               {
                               user ? <button onClick={handleSignOut}>sign out</button> 
                               :
                               <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className='my-5'><h1 className='text-center'>Robinho The Fitness Trainer Academy</h1></div>
        </div>

    );
};

export default Header;