import React from "react";
import { Carousel } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import slider1 from '../images/slider/slider-bg-1.jpg'
import slider2 from '../images/slider/slider-bg-2.jpg'
import slider3 from '../images/slider/slider-bg-3.jpg'
import resourse1 from '../images/resource/1.png'
import resourse2 from '../images/resource/2.png'
import resourse3 from '../images/resource/3.png'
import resourse4 from '../images/resource/4.png'
import doc1 from '../images/team/doctor-2.jpg'
import doc2 from '../images/team/doctor-lab-2.jpg'
import doc3 from '../images/team/event-2.jpg'
import ServiceSection from "../components/ServiceSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import AboutArea from "../components/AboutArea";
// import TopHeader from "../components/Top-Header";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="hero-slider">
                <Carousel>
                    <Carousel.Item className="slider-item slide1">
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"

                        />
                        <Carousel.Caption>
                            <div class="content style text-center">
                                <h2 class="text-white text-bold mb-2" data-animation-in="slideInLeft">Our Best Surgeons</h2>
                                <p class="tag-text mb-4" data-animation-in="slideInRight">Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Vel sunt animi sequi ratione quod at earum. <br></br> Quis quos officiis numquam!</p>
                                <Link to="/about" class="btn btn-main btn-white" data-animation-in="slideInLeft"
                                    data-duration-in="1.2">explore</Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="slider-item">
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Second slide"

                        />

                        <Carousel.Caption>
                            <div class="content style text-center">
                                <h2 class="text-white" data-animation-in="slideInRight">We Care About Your Health</h2>
                                <p class="tag-text mb-4" data-animation-in="slideInRight" data-duration-in="0.6">Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit. </p>
                                <Link to="/about" class="btn btn-main btn-white" data-animation-in="slideInRight"
                                    data-duration-in="1.2">about us</Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="slider-item">
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="Third slide"

                        />

                        <Carousel.Caption>
                            <div class="content text-center style">
                                <h2 class="text-white text-bold mb-2" data-animation-in="slideInRight">Best Medical Services</h2>
                                <p class="tag-text mb-4" data-animation-in="slideInLeft">Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Beatae deserunt, <br></br>eius pariatur minus itaque nostrum.</p>
                                <Link to="about.html" class="btn btn-main btn-white" data-animation-in="slideInRight"
                                    data-duration-in="1.2">shop now</Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <section class="cta">
                <div class="container">
                    <div class="cta-block row no-gutters">
                        <div class="col-lg-4 col-md-6 emmergency item">
                            <i class="fa fa-phone"></i>
                            <h2>Emegency Cases</h2>
                            <Link to="tel:1-800-700-6200">1-800-700-6200</Link>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div class="col-lg-4 col-md-6 top-doctor item">
                            <i class="fa fa-stethoscope"></i>
                            <h2>24 Hour Service</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dignissimos officia dicta suscipit
                                vel eum</p>
                            <Link to="service.html" class="btn btn-main">Read more</Link>
                        </div>
                        <div class="col-lg-4 col-md-12 working-time item">
                            <i class="fa fa-hourglass-o"></i>
                            <h2>Working Hours</h2>
                            <ul class="w-hours">
                                <li>Mon - Fri - <span>8:00 - 17:00</span></li>
                                <li>Mon - Fri - <span>8:00 - 17:00</span></li>
                                <li>Mon - Fri - <span>8:00 - 17:00</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="feature-section section bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="image-content">
                                <div class="section-title text-center">
                                    <h3>Best Features <span>of Our Hospital</span></h3>
                                    <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni in at debitis <br></br>
                                        nam error officia vero tempora alias? Sunt?</p>
                                </div>

                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="item">
                                            <div class="icon-box">
                                                <figure>
                                                    <Link to="services.html"><img loading="lazy" src={resourse1}
                                                        alt="features image" /></Link>
                                                </figure>
                                            </div>
                                            <h3 class="mb-2">Orthopedics</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam
                                                pariatur
                                                ex sunt, est aspernatur
                                                at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="item">
                                            <div class="icon-box">
                                                <figure>
                                                    <Link to="services.html">
                                                        <img loading="lazy" src={resourse2} alt="features image" />
                                                    </Link>
                                                </figure>
                                            </div>
                                            <h3 class="mb-2">Diaginostic</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam
                                                pariatur
                                                ex sunt, est aspernatur
                                                at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="item">
                                            <div class="icon-box">
                                                <figure>
                                                    <Link to="services.html">
                                                        <img loading="lazy" src={resourse3} alt="features image" />
                                                    </Link>
                                                </figure>
                                            </div>
                                            <h3 class="mb-2">Psycology</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam
                                                pariatur
                                                ex sunt, est aspernatur
                                                at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="item">
                                            <div class="icon-box">
                                                <figure>
                                                    <Link to="services.html">
                                                        <img loading="lazy" src={resourse4} alt="features image" />
                                                    </Link>
                                                </figure>
                                            </div>
                                            <h3 class="mb-2">General Treatment</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam
                                                pariatur
                                                ex sunt, est aspernatur
                                                at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AboutArea />

            <ServiceSection />


            <TeamSection />

            {/* <!--testimonial-section--> */}
            <section class="testimonial-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center">
                                <h3>What Our
                                    <span>Patients Says</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <Carousel>
                            <Carousel.Item>

                                {/* <!--Slide Item--> */}
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="slide-item">
                                                <div class="inner-box text-center">
                                                    <div class="image-box">
                                                        <figure>
                                                            <img loading="lazy" src={doc1} alt="" />
                                                        </figure>
                                                    </div>
                                                    <h6>Adam Rose</h6>
                                                    <p class="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet,
                                                        consectetur, numquam Lorem
                                                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div class="slide-item">
                                                <div class="inner-box text-center">
                                                    <div class="image-box">
                                                        <figure>
                                                            <img loading="lazy" src={doc2} alt="" />
                                                        </figure>
                                                    </div>
                                                    <h6>Adam Rose</h6>
                                                    <p class="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet,
                                                        consectetur, numquam Lorem
                                                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Carousel.Item>

                            <Carousel.Item>

                                {/* <!--Slide Item--> */}
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="slide-item">
                                                <div class="inner-box text-center">
                                                    <div class="image-box">
                                                        <figure>
                                                            <img loading="lazy" src={doc3} alt="" />
                                                        </figure>
                                                    </div>
                                                    <h6>Adam Rose</h6>
                                                    <p class="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet,
                                                        consectetur, numquam Lorem
                                                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div class="slide-item">
                                                <div class="inner-box text-center">
                                                    <div class="image-box">
                                                        <figure>
                                                            <img loading="lazy" src={doc1} alt="" />
                                                        </figure>
                                                    </div>
                                                    <h6>Adam Rose</h6>
                                                    <p class="mb-0">Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet,
                                                        consectetur, numquam Lorem
                                                        ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Carousel.Item>

                        </Carousel>

                    </div>
                </div>
            </section>
            {/* <!--End testimonial-section--> */}
            <ContactSection />
        </>
    )
}

export default Home;