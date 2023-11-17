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
            <div class="aboutUsContainer  mb-5">
                <div class="aboutUsBody">
                    <span class="aboutUs" style={{ fontSize: '150px', color: 'white' }}>ABOUT</span>
                    <div style={{ color: 'rgb(87, 179, 62)', fontSize: '18px' ,position:'relative'}}>| welcome to IEPL</div>
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
                <div class="contactUsImg">
                    <img className='enhancedServices img1' src={require("../img/Enhanced Services.png")} alt="" />
                    <img className='man-worker-firld-by-solar img2' src={require("../img/man-worker-firld-by-solar.png")} style={{ width: '285px', height: '285px' }} alt="" />
                    <img className='group-people-working-out-business-plan-office img2' src={require("../img/group-people-working-out-business-plan-office.png")} style={{ width: '285px', height: '285px' }} alt="" />
                    <img className='maintenanceServices img1' src={require("../img/Maintenance Services.png")} alt="" />
                    
                </div>
            </div>
        </>
    )
}
