import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider/Authprovider';
import SideNav from '../SideNav/SideNav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Header = () => {
    const { user, logOut, toggleTheme } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );

    return (

        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>

                <Navbar.Brand className=""><Link to='/'>

                    <div className="d-flex g-3">
                        <img className='me-3' src='logoEDU.png' alt="" />
                        <h2 className=' '>Education Master</h2>

                    </div>

                </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Link to='/course'><Button className='me-3' variant="outline-primary">Courses</Button></Link>
                        <Link to='/faq'><Button className='me-3' variant="outline-primary">FAQ</Button></Link>
                        <Link to='/blog'><Button className='me-3' variant="outline-primary">Blog</Button></Link>



                        <Link className='me-3' to="/profile">
                            {user?.photoURL ?
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}>

                                    {user?.photoURL ?
                                        <Image
                                            style={{ height: '30px' }} roundedCircle src={user?.photoURL}>

                                        </Image>
                                        :
                                        <span>{user?.displayName}</span>
                                    }

                                </OverlayTrigger>

                                :
                                <FaUserAlt style={{ height: '30px' }} ></FaUserAlt>
                            }
                        </Link>

                        <Link href="">
                            {
                                user?.uid ?
                                    <>
                                        {/* <span>{user?.displayName}</span> */}
                                        <Button className='me-3' onClick={handleLogOut} variant="outline-info">Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><Button className='me-3' variant="outline-primary">Login</Button></Link>

                                        {/* <Link to='/register'><Button variant="outline-primary">Register</Button></Link> */}
                                    </>
                            }


                        </Link>

                        <Form onClick={toggleTheme} className='ms-3'>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                            // label="Check this switch" 

                            />
                        </Form>
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