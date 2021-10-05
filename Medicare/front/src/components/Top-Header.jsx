import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const TopHeader = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        if (localStorage.usertoken) {
            const getUser = (id) => {

                //console.log(userId)

                return axios.get(`/user/${id}`)
                    .then(res => {
                        //setUser(res.data.user)

                        return res;
                    })
                    .catch(err => {
                        return err;
                    })
            }


            function getData() {
                const token = localStorage.usertoken;
                // const id = localStorage.id;
                const decoded = jwt_decode(token)
                getUser(decoded.uid).then(res => {
                    //console.log(decoded)

                    setUser(res.data.user);

                })

            }

            getData();

        }

    }, [])

    return (
        <>

            <title>Sai Medicare</title>

            <nav>
                <div class="header-top">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="top-left text-center text-md-left">
                                    <h6>Opening Hours : Saturday to Tuesday - 8am to 10pm</h6>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="top-right text-center text-md-right">
                                    <ul class="social-links">
                                        <li>
                                            <Link to="https://themefisher.com/" aria-label="facebook">
                                                <FontAwesomeIcon style={{ color: 'black' }} icon={faFacebook} size="lg" pull="left" />

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://themefisher.com/" aria-label="twitter">
                                                <FontAwesomeIcon style={{ color: 'black' }} icon={faTwitterSquare} size="lg" pull="left" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://themefisher.com/" aria-label="google-plus">
                                                <FontAwesomeIcon style={{ color: 'black' }} icon={faLinkedinIn} size="lg" pull="left" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://themefisher.com/" aria-label="instagram">
                                                <FontAwesomeIcon style={{ color: 'black' }} icon={faGithub} size="lg" pull="left" />
                                            </Link>
                                        </li>
                                        <li>
                                            {
                                                users.map((user, index) => {
                                                    //console.log(user.username)
                                                    return (
                                                        <>
                                                            <Link className="nav-link mr-2" to={`/admin/${user.id}/dashboard`} key={index}>
                                                                <li className="nav-item">{user.username}</li>
                                                            </Link>

                                                        </>
                                                    )
                                                })
                                            }

                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="header-uper">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-4 col-lg-3">
                                <div class="logo">
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <h1 class="sai-color">SAI MEDICARE</h1>

                                    </Link>
                                </div>
                            </div>
                            <div class="col-xl-8 col-lg-9">
                                <div class="right-side">
                                    <ul class="contact-info pl-0 mb-4 mb-md-0">
                                        <li class="item text-left">
                                            <div class="icon-box">
                                                <FontAwesomeIcon style={{ color: '#48bdc5' }} icon={faEnvelope} size="lg" />
                                            </div>
                                            <strong>Email</strong>
                                            <br></br>
                                            <Link to="mailto:info@medic.com" style={{ textDecoration: 'none' }}>
                                                <span>info@medic.com</span>
                                            </Link>
                                        </li>
                                        <li class="item text-left">
                                            <div class="icon-box">
                                                <FontAwesomeIcon style={{ color: '#48bdc5' }} icon={faPhone} size="lg" />
                                            </div>
                                            <strong>Call Now</strong>
                                            <br></br>
                                            <span>+ (88017) - 123 - 4567</span>
                                        </li>
                                    </ul>
                                    <div class="link-btn text-center text-lg-right">
                                        <Link to="/contact" className="btn-style-one" style={{ textDecoration: 'none' }}>Appoinment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>

        </>
    )
}

export default TopHeader;