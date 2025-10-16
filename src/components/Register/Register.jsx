import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.init';

const Register = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        setError('')
        setSuccess('')

        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            console.log(result.user);
            setSuccess('Account created successfully')
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (

        <div className="card bg-base-100 w-full mx-auto mt-5 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-bold">Register now!</h1>
                <form onSubmit={handleRegisterSubmit}>
                    <fieldset className="fieldset">
                        {/* Email field */}
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        {/* Password field */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>

                {
                    success && <p className='text-xl text-emerald-500'>{success}</p>
                }

                {
                    error && <p>{error}</p>
                }
                <p>Already have an account? Please <Link to='/login' className='text-blue-600 underline'>Login</Link> </p>
            </div>
        </div>

    );
};

export default Register;