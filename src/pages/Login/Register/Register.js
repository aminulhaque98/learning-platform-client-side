import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import './Register.css'
import React, { useContext } from 'react';
import { FaGooglePlusG, FaGithub } from 'react-icons/fa';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/Authprovider/Authprovider';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Register = () => {
    const { providerLogin, createUser, verifyEmail, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);



    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                verifyEmail();
                toast.success('Your Registration success,Please verify your email address.')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <div className='w-50 mb-10 shadow-lg p-3 mb-5 bg-body rounded registerDesign'>
            <h1 className="text-dark">Registration:</h1>
            <Form onSubmit={handleSubmit} className="mb-3">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="text-dark">Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicphotoURL">
                    <Form.Label className="text-dark">Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-dark">Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-dark">Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3 text-dark" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept <Link to='/terms'>Terms and conditions</Link> </>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register Now
                </Button>
                <br />
                <Form.Text className="text-danger">{error}
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>

            <ButtonGroup>
                <Button onClick={handleGoogleSignIn} className='mb-2 me-5 rounded d-lg-block' variant="outline-primary"> <FaGooglePlusG></FaGooglePlusG> Login With Google</Button>

                <Button onClick={handleGithubSignIn} className='mb-2 rounded' variant="outline-secondary"> <FaGithub></FaGithub> Login With GitHub</Button>

            </ButtonGroup>
            <p> <small className="text-dark">Already have an account? Please</small> <Link to='/login'>Log in</Link> </p>

        </div>
    );
};

export default Register;