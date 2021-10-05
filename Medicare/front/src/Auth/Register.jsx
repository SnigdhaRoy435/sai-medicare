import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
//import '../style.css';
//import { register } from '../components/Userfunction';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


const Register = () => {


    const history = useHistory();

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',

    })
    //const [message, setMessage] = useState();
    const [success, setSuccess] = useState();

    const changeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setUser((preValue) => {
            return {
                ...preValue,
                [name]: value

            }

        });
        console.log(user);

    }


    const submitHandler = (e) => {
        e.preventDefault();

        console.log();
        axios.post(`/register`, user)
            .then(response => {
                console.log(response);
                setSuccess('You have been successfully registered');
                alert('You have successfully registered');
                //history.push('/login');
                history.push('/login');
            })
            .catch(error => {
                console.log(error);
            })
    }
    console.log(success)

    return (
        <>

            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="text-center text-success">Register and Get Started to Explore Job</h2>

                        <div className="card shadow mt-5">
                            <div className="card-body mb-2">
                                <form className="form-group" onSubmit={submitHandler}>
                                    <p className="text-success">{success}</p>
                                    <div>
                                        <label htmFor="username">Enter Your Full Name</label>

                                        <input type="text"
                                            name="username"
                                            value={user.username}
                                            placeholder="Snigdha Roy Barman"
                                            onChange={changeHandler}
                                            className="form-control"
                                        />

                                    </div>

                                    <div className="mt-3">
                                        <label htmFor="email">Enter Your Email Address</label>

                                        <input type="email"
                                            name="email"
                                            value={user.email}
                                            placeholder="abcd@gmail.com"
                                            onChange={changeHandler}
                                            className="form-control"
                                        />

                                    </div>

                                    <div className="mt-3">
                                        <label htmFor="password">Enter Your Password</label>
                                        <input type="password"
                                            name="password"
                                            value={user.password}
                                            placeholder="********"
                                            onChange={changeHandler}
                                            className="form-control"
                                        />

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <button type="submit" className="btn btn-outline-success mt-3 ml-auto">Register Now</button>
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <span>Already had an account? </span>
                                            <Link to="/login" className="text-primary mt-3 mr-auto">Login Now</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;