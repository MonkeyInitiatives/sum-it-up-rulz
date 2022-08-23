import React, { useState } from "react";

import MuiAlert from '@material-ui/lab/Alert';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './Style.css'




function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = (_props) => {

    const [open, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [severity, setSeverity] = useState('');
    
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (error) {
            setOpen(true)
            setAlertMsg(error.text);
            setSeverity('error')
            console.error(error);
        }

        // clear form values
        setFormState({
            email: '',
            password: ''
        });
    };

    return (
      
        <>
        
        {/* Section: Design Block */}
        <section className="text-center text-lg-start login-screen">
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
                    }}
                />
                {/* Jumbotron */}
                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div
                                className="card cascading-right"
                                style={{
                                    background: "hsla(0, 0%, 100%, 0.55)",
                                    backdropFilter: "blur(30px)"
                                }}
                            >
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-5 text-purple">Sign In</h2>
                                    <form onSubmit={handleFormSubmit}>
                                        
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="form3Example3"
                                                className="form-control"
                                                onChange={handleChange}
                                                name="email"
                                                value={formState.email}
                                            />
                                            <label className="form-label text-purple" htmlFor="form3Example3">
                                                Email address
                                            </label>
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="form3Example4"
                                                className="form-control"
                                                onChange={handleChange}
                                                name="password"
                                                value={formState.password}
                                            />
                                            <label className="form-label text-purple" htmlFor="form3Example4">
                                                Password
                                            </label>
                                        </div>
                                        
                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-main btn-block mb-4"
                                            
                                        >
                                            Sign In
                                        </button>
                                        {/* Register buttons */}
                                        <div className="text-center">
                                            <p>or sign in with:</p>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-google" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-twitter" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-github" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img
                                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                                className="w-100 rounded-4 shadow-4"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* Jumbotron */}
            </section>
            {/* Section: Design Block */}
      </>
      
        

    )
}

export default Login
