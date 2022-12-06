import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider/Authprovider';
import SideNav from '../SideNav/SideNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (

        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/'>Education Master</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Link to='/'><Button className='me-3' variant="outline-primary">Courses</Button></Link>
                        <Link to='/faq'><Button className='me-3' variant="outline-primary">FAQ</Button></Link>
                        <Link to='/blog'><Button className='me-3' variant="outline-primary">Blog</Button></Link>

                        {/* <Nav.Link href="#pricing">Blog</Nav.Link> */}

                        <Link className='me-3' to="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                :
                                <FaUserAlt></FaUserAlt>
                            }
                        </Link>

                        <Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        {/* <span>{user?.displayName}</span> */}
                                        <Button className='me-3' onClick={handleLogOut} variant="outline-info">Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><Button variant="outline-primary">Login</Button></Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }


                        </Link>

                        <Nav.Link eventKey={2} href="#memess">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <SideNav></SideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;