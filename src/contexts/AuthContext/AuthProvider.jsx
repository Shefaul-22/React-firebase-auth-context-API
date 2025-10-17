import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // get the current user info
    // onAuthStateChanged(auth, (currentUser) =>{
    //     if(currentUser){
    //          console.log('inside observer : if', currentUser)
    //     }

    //     else{
    //         console.log('inside observer: else', currentUser);
    //     }
    // })

    // using useEffect get the current user info

    // useEffect(() => { },[])
    useEffect(() => {

        // set the observer
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user in auth state change', currentUser)
            setUser(currentUser)
            setLoading(false)

        })

        // clear the observer

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        // createUser: createUser
        user,
        loading,
        createUser,
        signInUser,
        signOutUser
        
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;