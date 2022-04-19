
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
                        <Navbar.Brand as={Link} to="/"><img style={{ width: '70px', height: '25px' }} src="https://cdn1.vectorstock.com/i/1000x1000/54/15/wildlife-photography-logo-vector-26485415.jpg" alt="" /></Navbar.Brand>
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
            <div className='my-5'><h1 className='text-center'> Welcome to Jack Stephen wildlife photography academy</h1></div>
        </div>

    );
};

export default Header;