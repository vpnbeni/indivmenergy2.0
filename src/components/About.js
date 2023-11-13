import React from 'react'
export default function About() {
    return (
        <>
            <div class="contactUsIntro pt-lg-5" >
                <div class="pt-lg-5 text-white text-center pt-5 fw-bold" style={{ fontSize: '52px' }}>About Us</div>
                <div class="fs-6 text-white  d-flex align-items-center justify-content-center">
                    <a class="text-white text-center" href="/">Home</a> &nbsp; &nbsp; <i class="fa-solid fa-angle-right"></i> &nbsp; &nbsp; About
                </div>
            </div>
            <div class="container contactUsBody my-lg-5 d-block">
                <div class=" row mb-5">
                    <div class="col-lg-6">
                        <span class="about" style={{ fontSize: '150px', color: 'white' }}>ABOUT</span>
                        <div class="aboutContainer">
                            <div style={{ color: 'rgb(87, 179, 62)', fontSize: '18px' }}>| welcome to IEPL</div>
                            <div class="h1 fw-bold" style={{ color: 'rgb(35, 35, 35)', fontSize: '36px' }}>WHO WE ARE</div>
                            <div class="pe-3 py-4 text" style={{ textAlign: 'justify' }}>Indivm Energy Private Limited is an organization with a goal of contributing efforts to come out of dark polluted human lifestyle. Harnessing Renewable Green energy to the humanity is our moto.  So we are experienced professionals focused on producing quality work and making a significant impact. We enjoy applying our career experience and skills to managing projects through creative problem solving and innovative thinking. We possess a strong eye for detail and can thrive independently as well as in a team environment. We are confident we have what it takes to make a significant contribution to any business we join, and are always striving to develop and expand our professional skillset. Want to know more about our qualifications? Read about our journey right here. The Company came in to existence in April Month of year 2017.  Now working in PAN India dedicated to Industrial Solar Projects.
                            </div>
                            <div class="d-flex flex-wrap py-3">
                                <div>
                                    <a class="learnMoreBtn " href="/contact">Free Consultancy</a>
                                </div>
                                <div class="d-flex align-items-center justify-content-center px-2">
                                    <a target="_blank" rel="noreferrer" href="https://wa.me/+919518220044" class="text-black border-0 contactWhatsappBtn" style={{ backgroundColor: 'inherit', fontWeight: 'bold' }}>
                                        <i class="fa-brands fa-whatsapp fa-lg text-success">
                                        </i> Contact on WhatsApp</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class=" col-lg-6 col-md-6 aboutUsCol2">
                        <img class="enhancedServices" src="/static/media/Enhanced Services.8577da31437f481e7b2a.png" alt="" />
                        <img class="man-worker-firld-by-solar" src="/static/media/man-worker-firld-by-solar.49f22771860a308ecd61.png" alt="" />
                        <img class="group-people-working-out-business-plan-office" src="/static/media/group-people-working-out-business-plan-office.4885dd6df0122293caf6.png" alt="" />
                        <img class="maintenanceServices" src="/static/media/Maintenance Services.565dcfa1fc89a496c5d9.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
