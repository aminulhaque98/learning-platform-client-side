import React, { createContext, useEffect, useState } from 'react';
import './AuthProvider.css';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState("light");


    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    };


    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Please check your email and verify')
            })
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside authState change', currentUser);
            setUser(currentUser)
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { user, providerLogin, logOut, creatUser, verifyEmail, signInUser, toggleTheme };


    return (
        <div className={theme}>
            <AuthContext.Provider value={authInfo}>

                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;