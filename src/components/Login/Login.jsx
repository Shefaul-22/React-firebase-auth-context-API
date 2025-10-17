// import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
// import { auth } from '../../firebase/firebase.init';

const Login = () => {

    const { signInUser } = use(AuthContext)

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                // event.target.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    // const handleLoginSubmit = (e) => {
    //     e.preventDefault()
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email,password)

    //     signInWithEmailAndPassword(auth,email,password)
    //     .then(result => {
    //         console.log(result.user)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    return (
        <div className="card bg-base-100 w-full mx-auto mt-5 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-bold">Login now!</h1>
                <form onSubmit={handleLoginSubmit}>
                    <fieldset className="fieldset">
                        {/* Email field */}
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        {/* Password field */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <p>Haven't an account? Please <Link to='/register' className='text-blue-600 underline'>Register Now!</Link> </p>
            </div>
        </div>
    );
};

export default Login;