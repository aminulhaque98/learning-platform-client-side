import React, { createContext, useEffect, useState } from 'react';
import './AuthProvider.css';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
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

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // alert('Please check your email and verify')
            })
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { user, loading, providerLogin, logOut, createUser, verifyEmail, signInUser, updateUserProfile, toggleTheme, setLoading };


    return (
        <div className={theme}>
            <AuthContext.Provider value={authInfo}>

                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;