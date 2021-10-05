import React from 'react'

const ContactSection = () => {
    return (
        <>
            {/* <!-- Contact Section --> */}
            <section class="appoinment-section section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="accordion-section">
                                <div class="section-title">
                                    <h3>FAQ</h3>
                                </div>
                                <div class="accordion-holder">
                                    <div class="accordion" id="accordionGroup" role="tablist" aria-multiselectable="true">
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingOne">
                                                <h4 class="card-title">
                                                    <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                        Why Should I choose Medical Health
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne"
                                                data-parent="#accordionGroup">
                                                <div class="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    3 wolf moon
                                                    officia aute,
                                                    non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                    moon
                                                    tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                    anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                                    butcher
                                                    vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                    probably
                                                    haven't
                                                    heard of them accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingTwo">
                                                <h4 class="card-title">
                                                    <a class="collapsed" role="button" data-toggle="collapse" href="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                        What are the Centre’s visiting hours?
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo"
                                                data-parent="#accordionGroup">
                                                <div class="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    3 wolf moon
                                                    officia aute,
                                                    non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                    moon
                                                    tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                    anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                                    butcher
                                                    vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                    probably
                                                    haven't
                                                    heard of them accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingThree">
                                                <h4 class="card-title">
                                                    <a class="collapsed" role="button" data-toggle="collapse" href="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                        How many visitors are allowed?
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree"
                                                data-parent="#accordionGroup">
                                                <div class="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    3 wolf moon
                                                    officia aute,
                                                    non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                    moon
                                                    tempor,
                                                    sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil
                                                    anim keffiyeh
                                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                                    butcher
                                                    vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                    probably
                                                    haven't
                                                    heard of them accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="contact-area pl-0 pl-lg-5">
                                <div class="section-title">
                                    <h3>Request
                                        <span>Appointment</span>
                                    </h3>
                                </div>
                                <form name="contact_form" class="default-form contact-form" action="!#" method="post">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input class="form-control" type="text" name="Name" placeholder="Name" required="" />
                                            </div>
                                            <div class="form-group">
                                                <input class="form-control" type="email" name="Email" placeholder="Email" required="" />
                                            </div>
                                            <div class="form-group">
                                                <select class="form-control" name="subject">
                                                    <option>Departments</option>
                                                    <option>Diagnostic</option>
                                                    <option>Psychological</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input class="form-control" type="text" name="Phone" placeholder="Phone" required="" />
                                            </div>
                                            <div class="form-group">
                                                <input class="form-control" type="text" name="Date" placeholder="Date" required="" id="datepicker"
                                                />
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                            </div>

                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea class="form-control" name="form_message" placeholder="Your Message"
                                                    required=""></textarea>
                                            </div>
                                            <div class="form-group text-center">
                                                <button type="submit" class="btn-style-one">submit now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Contact Section --> */}

        </>
    )
}

export default ContactSection;