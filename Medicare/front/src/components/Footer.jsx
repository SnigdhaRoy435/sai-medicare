import React from 'react';
import blog from '../images/blog/post-thumb-small.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitch, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
            {/* <!--footer-main--> */}
            <footer class="footer-main">
                <div class="footer-top">
                    <div class="container">
                        <div class="row justify-content-between">
                            <div class="col-lg-4 mb-5 mb-lg-0">
                                <div class="about-widget">
                                    <div class="footer-logo">
                                        <figure>
                                            <a href="index.html">

                                                <h1 class="sai-color">SAI MEDICARE</h1>
                                            </a>
                                        </figure>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus?</p>
                                    <ul class="location-link">
                                        <li class="item">
                                            <i class="fas fa-map-marker-alt"></i>
                                            <p>Modamba, NY 80021, United States</p>
                                        </li>
                                        <li class="item">
                                            <i class="far fa-envelope" aria-hidden="true"></i>
                                            <a href="mailto:support@medic.com">
                                                <p>support@medic.com</p>
                                            </a>
                                        </li>
                                        <li class="item">
                                            <i class="fas fa-phone" aria-hidden="true"></i>
                                            <p>(88017) +123 4567</p>
                                        </li>
                                    </ul>
                                    <ul class="list-inline social-icons">
                                        <li class="list-inline-item">
                                            <a href="https://facebook.com/themefisher" aria-label="facebook">
                                                <FontAwesomeIcon style={{ color: '#48bdc5' }} icon={faFacebookF} size="lg" pull="down" />
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="https://facebook.com/themefisher" aria-label="facebook">
                                                <FontAwesomeIcon style={{ color: '#48bdc5' }} icon={faEnvelope} size="lg" />
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="https://facebook.com/themefisher" aria-label="facebook">
                                                <FontAwesomeIcon style={{ color: '#48bdc5' }} icon={faTwitch} size="lg" />
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="https://facebook.com/themefisher" aria-label="facebook">
                                                <FontAwesomeIcon style={{ color: '#48bdc5' }} icon={faInstagram} size="lg" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-5 mb-3 mb-md-0">
                                <h2>Services</h2>
                                <ul class="menu-link">
                                    <li>
                                        <a href="service.html">
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>Orthopadic Liabilities</a>
                                    </li>
                                    <li>
                                        <a href="service.html">
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>Dental Clinic</a>
                                    </li>
                                    <li>
                                        <a href="service.html">
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>Dormamu Clinic</a>
                                    </li>
                                    <li>
                                        <a href="service.html">
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>Psycological Clinic</a>
                                    </li>
                                    <li>
                                        <a href="service.html">
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>Gynaecological Clinic</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-7">
                                <div class="social-links">
                                    <h2>Recent Posts</h2>
                                    <ul>
                                        <li class="item">
                                            <div class="media">
                                                <div class="media-left mr-3">
                                                    <a href="blog-details.html">
                                                        <img loading="lazy" src={blog} alt="post-thumb" />
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <h5><a href="blog-details.html">A lesson adip isicing</a></h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item">
                                            <div class="media">
                                                <div class="media-left mr-3">
                                                    <a href="blog-details.html">
                                                        <img loading="lazy" src={blog} alt="post-thumb" />
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <h5><a href="blog-details.html">How to make an event</a></h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container clearfix">
                        <div class="copyright-text">
                            <p>&copy; Copyright 2021. Designed &amp; Developed by <a href="https://themefisher.com/">Themefisher</a></p>
                        </div>
                        <ul class="footer-bottom-link">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/* <!--End footer-main--></div> */}
        </>
    )
}

export default Footer;