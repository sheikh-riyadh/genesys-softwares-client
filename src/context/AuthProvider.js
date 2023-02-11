import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    /* Create user here */
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    /* Login user here */
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }



    /* Recover password here */
    const recoverPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }

    /* Logout user here */
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);
    const authInfo = { loading, user, registerUser, userLogin, logOutUser, recoverPassword }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}