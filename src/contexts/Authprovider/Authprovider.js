import React, { createContext, useEffect, useState } from 'react';
import './AuthProvider.css';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState("light");
    const [loading, setLoading] = useState(true);


    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    };


    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Please check your email and verify')
            })
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log('user inside authState change', currentUser);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { user, loading, providerLogin, logOut, creatUser, verifyEmail, signInUser, toggleTheme };


    return (
        <div className={theme}>
            <AuthContext.Provider value={authInfo}>

                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;