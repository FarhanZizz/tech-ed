import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.confiq';
import { useEffect } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    const singUpWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { user, singUpWithEmailPassword, login, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;