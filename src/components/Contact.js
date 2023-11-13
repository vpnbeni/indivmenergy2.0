import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="contact">
                <div className="contactUsIntro pt-lg-5"><div className="pt-lg-5 text-white text-center pt-5 fw-bold" style={{ fontSize: '52px' }}>Contacts</div><div className="fs-6 text-white  d-flex align-items-center justify-content-center"><a className="text-white text-center" href="/">Home</a> &nbsp; &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; &nbsp; Contacts</div></div>
                <div className="contactUsBody">
                    <div className="row m-3 m-md-5 p-3   p-md-5">
                        <div className="col-12 col-lg-3"><h6  style={{color:'rgb(111, 177, 79)'}}>| get in touch</h6>
                            <h2 className="fw-bold">Contacts</h2>
                            <div className="d-flex ">
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fs-3 fa-location-dot"  style={{color:'rgb(237, 121, 63)'}}></i>
                                </div>
                                <div className="p-2 "  style={{fontSize:'17px'}}>Sonepat Ganaur Road, Opposite Sakar Kui Mandir Sonepat - 131001</div>
                            </div><div className="d-flex "><div className="d-flex align-items-center justify-content-center">
                                <i className="fa-solid fs-3 fa-at"  style={{color:'rgb(237, 121, 63)'}}></i>
                            </div><div className="p-2 " style={{fontSize:'18px'}}>
                                    <div className="email">
                                        <a className="text-dark" href="mailto:indivmenergy@gmail.com"> indivmenergy@gmail.com</a>
                                    </div>
                                    <div className="email"><a className="text-dark" href="mailto:indivmenergy@gmail.com"> indivmenergy@outlook.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex ">
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="fa-solid fs-3 fa-phone" style={{color:'rgb(237, 121, 63)'}}></i>
                                </div>
                                <a className="p-2 phone" target="_blank" rel="noreferrer" href="tel:+919518220044" style={{fontSize:'18px',color:'black'}}>+91 9518220044</a>

                            </div>
                        </div>

                        <div className="col-lg-9 col-12 contactForm  bg-white p-lg-5 p-3">
                            <form action="https://formsubmit.co/vpnbeniwal123@gmail.com" method="POST">
                                <h1 className=" ">Send Inquiry</h1>
                                <input className="my-2 p-2 w-100" id="name" type="text" name="Name" placeholder="Name" required="" fdprocessedid="tuvm2s" />
                                <input className="my-2 p-2 w-100" type="email" id="email" name="Email" placeholder="E-Mail adress" required="" fdprocessedid="6dmr98" />
                                <input className=" my-2 p-2 w-100" type="number" name="Number" id="phone" placeholder="Phone Number" required="" fdprocessedid="nd0v8r" />

                                <textarea className=" my-2 p-2 w-100" id="message" type="message" name="Message" placeholder="How can we help you?" required="">
                                </textarea>
                                <button className="border-0 px-4 py-2 bg-success text-white fw-bold" type="submit" id="send" fdprocessedid="y8x669">Send</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
