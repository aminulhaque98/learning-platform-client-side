import React, { useContext } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/Authprovider/Authprovider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';




const Login = () => {
    const [error, setError] = useState('');
    const { signInUser, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';




    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { reolace: true });
                    toast.success('Successfully login to the account');
                }
                else {
                    toast.error('Your email is not verified.Please now verified your email address.')
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }


    return (
        <div className='w-50 sm-w-100 mb-10 shadow-lg p-3 mb-5 bg-body rounded formDesign'>
            <h1 className="text-dark" >Login:</h1>
            <Form onSubmit={handleSubmit} className="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className="text-dark" type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-danger">{error}
                    <p>We'll never share your email with anyone else.</p>
                </Form.Text>

                <p> <small className="text-dark">New to this website? Please</small> <Link to='/register'>Register Now</Link> </p>
            </Form>
        </div>
    );
};

export default Login;