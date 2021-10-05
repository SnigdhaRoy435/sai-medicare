import React from 'react';
import gallery1 from '../images/gallery/gallery-01.jpg'
import gallery2 from '../images/gallery/gallery-02.jpg'
import gallery3 from '../images/gallery/gallery-03.jpg'
import gallery4 from '../images/gallery/gallery-04.jpg'
//import gallery5 from '../images/gallery/gallery-05.jpg'

const ServiceSection = () => {
    return (
        <>
            {/* <!--Service Section--> */}
            <section class="service-section bg-gray section">
                <div class="container">
                    <div class="section-title text-center">
                        <h3>Provided
                            <span>Services</span>
                        </h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. qui suscipit atque
                            <br></br>
                            fugiat officia corporis rerum eaque neque totam animi, sapiente culpa. Architecto!
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col">
                            <div class="item">
                                <div class="inner-box">
                                    <div class="img_holder">
                                        <a href="service.html">
                                            <img loading="lazy" src={gallery1} alt="images" class="img-fluid" />
                                        </a>
                                    </div>
                                    <div class="image-content text-center">
                                        <span>Better Service At Low Cost</span>
                                        <a href="service.html">
                                            <h6>Dormitory</h6>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="item">
                                <div class="inner-box">
                                    <div class="img_holder">
                                        <a href="service.html">
                                            <img loading="lazy" src={gallery2} alt="images" class="img-fluid" />
                                        </a>
                                    </div>
                                    <div class="image-content text-center">
                                        <span>Better Service At Low Cost</span>
                                        <a href="service.html">
                                            <h6>Germs Protection</h6>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="item">
                                <div class="inner-box">
                                    <div class="img_holder">
                                        <a href="service.html">
                                            <img loading="lazy" src={gallery3} alt="images" class="img-fluid" />
                                        </a>
                                    </div>
                                    <div class="image-content text-center">
                                        <span>Better Service At Low Cost</span>
                                        <a href="service.html">
                                            <h6>Psycology</h6>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div class="item">
                                <div class="inner-box">
                                    <div class="img_holder">
                                        <a href="service.html">
                                            <img loading="lazy" src={gallery4} alt="images" class="img-fluid" />
                                        </a>
                                    </div>
                                    <div class="image-content text-center">
                                        <span>Better Service At Low Cost</span>
                                        <a href="service.html">
                                            <h6>Dormitory</h6>
                                        </a>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!--End Service Section--> */}
        </>
    )
}

export default ServiceSection;