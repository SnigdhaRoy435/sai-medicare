import React from 'react';
import { Carousel, Tab, Tabs } from 'react-bootstrap'
import service1 from '../images/services/service-one.jpg'
import service2 from '../images/services/service-two.jpg'
import service3 from '../images/services/service-three.jpg'
import service4 from '../images/services/service-four.jpg'
//import service5 from '../images/services/service-five.jpg'

const AboutArea = () => {
    return (
        <>
            {/* Starting of about us area*/}
            <section class="service-tab-section section">
                <div class="outer-box clearfix">
                    <div class="container">
                        <div className="tabs md-5">
                            <Tabs
                                defaultActiveKey="dormitory"
                                transition={false}
                                id="about-Tab"
                                className="mb-3 nav nav-tabs justify-content-center" role="presentation"
                            >

                                <Tab eventKey="dormitory" title="Dormitory" class="nav-link" id="dormitory-tab" data-toggle="tab" href="#dormitory" role="tab"
                                    aria-controls="dormitory" aria-selected="true">
                                    <div class="tab-content" id="aboutTab">
                                        <div class="service-box tab-pane fade show active" id="dormitory">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <img loading="lazy" class="img-fluid" src={service1} alt="service-image" />
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="contents">
                                                        <div class="section-title">
                                                            <h3>dormitory</h3>
                                                        </div>
                                                        <div class="text">
                                                            <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                                then a dental prosthetic is added. then a
                                                                dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                            <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                                then a dental prosthetic is added. then a dental
                                                                prosthetic is added.then a dental pros- thetic is added.</p>
                                                        </div>
                                                        <ul class="content-list">
                                                            <li>
                                                                <i class="far fa-dot-circle"></i>Whitening is among the most popular dental
                                                            </li>
                                                            <li>
                                                                <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                                involves
                                                            </li>
                                                            <li>
                                                                <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                                involves
                                                            </li>
                                                        </ul>
                                                        <a href="services.html" class="btn btn-style-one">Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Tab>
                                <Tab eventKey="orthopedic" title="Orthopedic" class="nav-link" id="orthopedic-tab" data-toggle="tab" href="#hello" role="tab"
                                    aria-controls="orthopedic" aria-selected="true">
                                    <div class="tab-content" id="aboutTab">
                                        <div class="service-box tab-pane fade show active" id="orthopedic">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <img loading="lazy" class="img-fluid" src={service2} alt="service-image" />
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="contents">
                                                        <div class="section-title">
                                                            <h3>orthopedic</h3>
                                                        </div>
                                                        <div class="text">
                                                            <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                                then a dental prosthetic is added.
                                                                then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                            <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                                then a dental prosthetic is added.
                                                                then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                        </div>
                                                        <ul class="content-list">
                                                            <li>
                                                                <i class="far fa-dot-circle"></i>Whitening is among the most popular dental
                                                            </li>
                                                            <li>
                                                                <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                                involves
                                                            </li>
                                                            <li>
                                                                <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                                involves
                                                            </li>
                                                        </ul>
                                                        <a href="services.html" class="btn btn-style-one">Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Tab>
                                <Tab eventKey="sonogram" title="Sonogram" class="nav-link" id="sonogram-tab" data-toggle="tab" href="#hello" role="tab"
                                    aria-controls="sonogram" aria-selected="true">
                                    <div class="tab-content" id="aboutTab">
                                        <div class="service-box tab-pane fade show active" id="sonogram">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <img loading="lazy" class="img-fluid" src={service3} alt="service-image" />
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="contents">
                                                        <div class="section-title">
                                                            <h3>Sonogram</h3>
                                                        </div>
                                                        <div class="text">
                                                            <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                                then a dental prosthetic is added.
                                                                then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                            <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                                then a dental prosthetic is added.
                                                                then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                        </div>
                                                        <ul class="content-list">
                                                            <li>
                                                                <i class="far fa-dot-circle"></i>Whitening is among the most popular dental
                                                            </li>
                                                            <li>
                                                                <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                                involves
                                                            </li>
                                                            <li>
                                                                <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                                involves
                                                            </li>
                                                        </ul>
                                                        <a href="services.html" class="btn btn-style-one">Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Tab>
                                <Tab eventKey="x-ray" title="X-RAY" class="nav-link" id="x-ray-tab" data-toggle="tab" href="#hello" role="tab"
                                    aria-controls="x-ray" aria-selected="true">
                                    <div class="tab-content" id="aboutTab">
                                        <div class="service-box tab-pane fade show active" id="x-ray">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <img loading="lazy" class="img-fluid" src={service4} alt="service-image" />
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="contents">
                                                        <div class="section-title">
                                                            <h3>x-ray</h3>
                                                        </div>
                                                        <div class="text">
                                                            <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                                then a dental prosthetic is added.
                                                                then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                            <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                                                                then a dental prosthetic is added.
                                                                then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                                        </div>
                                                        <ul class="content-list">
                                                            <li>
                                                                <i class="far fa-dot-circle"></i>Whitening is among the most popular dental
                                                            </li>
                                                            <li>
                                                                <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                                involves
                                                            </li>
                                                            <li>
                                                                <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                                                                involves
                                                            </li>
                                                        </ul>
                                                        <a href="services.html" class="btn btn-style-one">Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>

            {/*end of about us area */}
        </>
    )
}

export default AboutArea;