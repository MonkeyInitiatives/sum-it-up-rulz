import React, { useState } from 'react';

import MuiAlert from '@material-ui/lab/Alert';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';


import Auth from '../utils/auth';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Signup = () => {

    const [open, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [severity, setSeverity] = useState('');

    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

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
            console.log(formState);
            const { data } = await addUser({
                variables: { ...formState }

            });
            console.log(data);
            // if (userData.status === 200) {
            //     setOpen(true)
            //     setAlertMsg('Form submission Success');
            //     setSeverity('success')
            // }
            // else {
            //     setOpen(true)
            //     setAlertMsg('Submission Failed, Try again!');
            //     setSeverity('warning')
            // }

            Auth.login(data.addUser.token);
        } catch (e) {
            console.log(error);
            setOpen(true)
            setAlertMsg(e.text);
            setSeverity('error')
            console.log("signup error", e);
        }
    };

    return (
        // <Grid container justify="center">
        //     <Box component="form" className={classes.form} onSubmit={handleFormSubmit}>
        //         <InputField
        //             fullWidth={true}
        //             variant="outlined"
        //             label="Username"
        //             name="username"
        //             type="username"
        //             required
        //             inputProps={{ className: classes.input }}
        //             className={classes.field}
        //             value={formState.username}
        //             onChange={handleChange}
        //         />
        //         <InputField
        //             fullWidth={true}
        //             label="Email"
        //             variant="outlined"
        //             required
        //             name='email'
        //             type='email'
        //             value={formState.email}
        //             onChange={handleChange}
        //             inputProps={{ className: classes.input }}
        //             className={classes.field}
        //         />
        //         <InputField
        //             fullWidth={true}
        //             label="Password"
        //             name='password'
        //             required
        //             variant="outlined"
        //             value={formState.password}
        //             onChange={handleChange}
        //             inputProps={{ className: classes.input }}
        //         />
        //         <Button
        //             variant="outlined"
        //             fullWidth={true}
        //             endIcon={<CreateIcon />}
        //             type="submit"
        //             className={classes.button}>
        //             Signup
        //         </Button>
        //     </Box>
        //     <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} className={classes.alertbox}>
        //         <Alert onClose={() => setOpen(false)} severity={severity} className={classes.alertbox}>
        //             {error && alertMsg}
        //         </Alert>
        //     </Snackbar>
        // </Grid>
        <>
            {/* Section: Design Block */}
            <section className="text-center text-lg-start signup-screen">
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
                                    <h2 className="fw-bold mb-5 text-purple">Sign up now</h2>
                                    <form onSubmit={handleFormSubmit}>
                                        {/* 2 column grid layout with text inputs for the first and last names */}
                                        <div className="row">
                                            <div className="">
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        id="username"
                                                        className="form-control"
                                                        onChange={handleChange}
                                                        value={formState.username}
                                                        name="username"
                                                    />
                                                    <label className="form-label text-purple" htmlFor="username">
                                                        User Name
                                                    </label>
                                                </div>
                                            </div>
                                           
                                        </div>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formState.email}
                                                name="email"
                                            />
                                            <label className="form-label text-purple" htmlFor="email">
                                                Email address
                                            </label>
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formState.password}
                                                name="password"
                                            />
                                            <label className="form-label text-purple" htmlFor="password">
                                                Password
                                            </label>
                                        </div>                                        
                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-main btn-block mb-4"
                                        >
                                            Sign up
                                        </button>
                                        {/* Register buttons */}
                                        <div className="text-center text-purple">
                                            <p>or sign up with:</p>
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

    );
};

export default Signup;
