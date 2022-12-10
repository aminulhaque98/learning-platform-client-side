import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGooglePlusG, FaGithub } from 'react-icons/fa';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/Authprovider/Authprovider';
import { Link } from 'react-router-dom';

const Register = () => {
    const { providerLogin, creatUser, verifyEmail } = useContext(AuthContext);

    const notify = () => toast("Your Registration success");

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);
        console.log('form', form)
        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                verifyEmail();
                notify();
            })
            .catch(error => console.error(error))
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

    return (
        <div>
            <Form onSubmit={handleSubmit} className="mb-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register Now
                </Button>
                <br />
                <Form.Text className="text-danger">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>

            <ButtonGroup>
                <Button onClick={handleGoogleSignIn} className='mb-2 me-5 rounded d-lg-block' variant="outline-primary"> <FaGooglePlusG></FaGooglePlusG> Login With Google</Button>

                <Button onClick={handleGithubSignIn} className='mb-2 rounded' variant="outline-secondary"> <FaGithub></FaGithub> Login With GitHub</Button>
            </ButtonGroup>
            <p> <small>Already have an account? Please</small> <Link to='/login'>Log in</Link> </p>
            <ToastContainer />
        </div>
    );
};

export default Register;