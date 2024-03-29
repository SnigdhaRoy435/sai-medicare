import React from 'react'
import doc1 from '../images/team/doctor-2.jpg'
import doc2 from '../images/team/doctor-lab-2.jpg'
import doc3 from '../images/team/event-2.jpg'

const TeamSection = () => {
    return (
        <>
            {/* <!--team section--> */}
            <section class="team-section section">
                <div class="container">
                    <div class="section-title text-center">
                        <h3>Our Expert
                            <span>  Doctors</span>
                        </h3>
                        <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo, rerum
                            <br></br>natus nobis deleniti doloremque minima odit voluptatibus ipsam animi?
                        </p>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="team-member">
                                <img loading="lazy" src={doc1} alt="doctor" class="img-fluid" />
                                <div class="contents text-center">
                                    <h4>Dr. Robert Barrethion</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur.</p>
                                    <a href="appointment.html" class="btn btn-main">Book Appointment</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="team-member">
                                <img loading="lazy" src={doc2} alt="doctor" class="img-fluid" />
                                <div class="contents text-center">
                                    <h4>Dr. Marry Lou</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur.</p>
                                    <a href="appointment.html" class="btn btn-main">Book Appointment</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="team-member">
                                <img loading="lazy" src={doc3} alt="doctor" class="img-fluid" />
                                <div class="contents text-center">
                                    <h4>Dr. Sansa Stark</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur.</p>
                                    <a href="appointment.html" class="btn btn-main">Book Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--End team section--> */}
        </>
    )
}

export default TeamSection;