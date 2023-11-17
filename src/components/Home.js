import React from 'react'
import { Link } from 'react-router-dom';
import project1 from './../img/project1.png'
import project2 from './../img/project2.png'
import project3 from './../img/project3.png'
import project4 from './../img/project4.png'
export default function Home() {
    return (
        <>
            <div className='home'>
                {/* intro to indivm */}
                <div className='introToINDIVM  d-flex' >
                    <span className='solar' style={{ fontSize: '180px', color: '#f7f7f7' }}>SOLAR</span>
                    <div className='investingIsClean'>
                        <div className="h1 fw-bold" style={{ color: "#232323", fontSize: '57px', }}>Investing in Clean <br />
                            Energy Generation</div>
                        <div className='w-50'>Our Investment in emission-free and clean generation has reduced our impact on the air we breathe and demonstrates our commitment.</div>
                        <div className='d-flex'>
                            <button className='learnMoreBtn mt-3 me-2'>Learn More</button>
                            <button className=' mt-3 ms-2 border-0 contactWhatsappBtn' style={{ backgroundColor: 'inherit', fontWeight: 'bold' }}><i className="fa-brands fa-whatsapp fa-lg text-success"></i> Contact on WhatsApp</button>
                        </div>
                    </div>
                    <div className=' p-0 m-0 introImg' ><img alt="" src={require("../img/pngimg.com - solar_panel_PNG18.png")} /></div>
                </div>
                {/* about us */}
                <div className="aboutBody d-lg-flex">
                    <div className="">
                        <div className='d-flex align-items-center my-5'>
                            <img className='aboutUsImg ' src={require("../img/man-worker-firld-by-solar-panels.png")} style={{ width: '480px', height: '480px' }} alt="" />
                        </div>
                        <img className='megawattsOfCapacity ' src={require("../img/MEGAWATTS OF CAPACITY.png")} alt="" />
                    </div>
                    <div className="">
                        <span className='about' style={{ color: 'white' }}>ABOUT</span>

                        <div className='col-lg-7 p-0 m-0 '>
                            <div className='aboutContainer'>
                                <div style={{ color: '#57b33e', fontSize: "18px" }}>| who we are</div>
                                <div className="h1 fw-bold" style={{ color: "#232323", fontSize: '36px', }}>We are the Best-In-Class Products & Solutions</div>
                                <div className='my-2'>iRecco is among the world’s leading renewable energy solutions provider that is revolutionising and redefining the way sustainable energy sources are harnessed across the world. Present in 18 countries across Asia, Australia, Europe, Africa and the Americas, Veztaz is powering a greener tomorrow.</div>
                                <div className='aboutDownlaodBtn d-flex justify-items-strat align-items-center'>
                                    <button className=' border-0 mt-3 me-2 d-flex align-items-center justify-items-center'><i className="fa-solid  fa-circle-down " style={{ color: '#ff7029', fontSize: '55px' }}></i> &nbsp;&nbsp;<span className='fw-bold'> Download Brochoure </span></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* why choose us */}
                <div className="container my-lg-5 d-block">
                    <div className=" row mb-5">

                        <div className="col-lg-6 ">
                            <span className='whyUs' style={{ fontSize: '150px', color: 'white' }}>WHY US</span>

                            <div className='whyContainer'>
                                <div style={{ color: '#57b33e', fontSize: "18px" }}>| why choose us</div>
                                <div className="h1 fw-bold" style={{ color: "#232323", fontSize: '36px', }}>We are Building
                                    a Sustainable Future
                                </div>

                                <div className='my-5 py-lg-3'>
                                    <div className="row my-lg-2 whyUsData">
                                        <div className="col-2 d-flex justify-items-center"><div className='shadow d-flex align-items-center justify-items-center' style={{ width: '40px', height: '40px', borderRadius: '50%' }}> <i className="fa-solid mx-auto  fa-check " style={{ fontSize: '18px', color: '#ff7029' }}></i></div></div>
                                        <div className="col-10">
                                            <div className="fw-bold">Best Energy Solutions</div>
                                            <div className="my-2" style={{ color: '#616161' }}>Over two decades of rich experience in the wind energy sector. Over 17,900 MW capacity.</div>
                                        </div>
                                    </div>
                                    <div className="row my-lg-2 whyUsData">
                                        <div className="col-2 d-flex justify-items-center"><div className='shadow d-flex align-items-center justify-items-center' style={{ width: '40px', height: '40px', borderRadius: '50%' }}> <i className="fa-solid mx-auto  fa-check " style={{ fontSize: '18px', color: '#ff7029' }}></i></div></div>
                                        <div className="col-10">
                                            <div className="fw-bold">End-To-End Services</div>
                                            <div className="my-2" style={{ color: '#616161' }}>Vast experience in power evacuation, land pro curement, liaisoning and working with state.</div>
                                        </div>
                                    </div>
                                    <div className="row my-lg-2 whyUsData">
                                        <div className="col-2 d-flex justify-items-center"><div className='shadow d-flex align-items-center justify-items-center' style={{ width: '40px', height: '40px', borderRadius: '50%' }}> <i className="fa-solid mx-auto  fa-check " style={{ fontSize: '18px', color: '#ff7029' }}></i></div></div>
                                        <div className="col-10">
                                            <div className="fw-bold">Global Expertise</div>
                                            <div className="my-2" style={{ color: '#616161' }}>A perfect blend of global experience and expertise to further our focus on technology. advancement.</div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 ">

                            <img className='enhancedServices' src={require("../img/Enhanced Services.png")} alt="" />
                            <img className='man-worker-firld-by-solar' src={require("../img/man-worker-firld-by-solar.png")} style={{ width: '285px', height: '285px' }} alt="" />
                            <img className='group-people-working-out-business-plan-office' src={require("../img/group-people-working-out-business-plan-office.png")} style={{ width: '285px', height: '285px' }} alt="" />
                            <img className='maintenanceServices' src={require("../img/Maintenance Services.png")} alt="" />
                        </div>

                    </div>
                </div>

                {/* works recent projects */}

                <div className='recentProjects'>
                    <div className="text-center works" style={{ fontSize: '150px', color: '#f8f8f8' }}>WORKS</div>

                    <div className="text-center recentProjectsHeading" style={{ zIndex: '1', height: '200px' }}>
                        <div className="" style={{ color: '#57b33e', fontSize: "18px" }}>recent projects</div>
                        <div className="fw-bold " style={{ color: "#232323", fontSize: '36px', }}>Our Latest Case Studies</div>
                        <div className="my-2 " style={{ color: '#616161' }}>All functions including supply chain, value chain, project scheduling, manufacturing, services and <br /> spares, technology, R&D, etc. are integrated to give a complete solutions package.</div>
                    </div>
                    <div className="flex-container my-lg-5 my-2">
                        <img className='w-lg-25' src={project1} alt="" />
                        <img className='w-lg-25' src={project2} alt="" />
                        <img className='w-lg-25' src={project3} alt="" />
                        <img className='w-lg-25' src={project4} alt="" />
                    </div>

                </div>


                <div className=" someBasics text-center w-100 " style={{ color: 'white' }}>Basics </div>
                < div className="someBasicsOnSolarSystem" style={{ display: 'block' }}>
                    <div className="text-center mt-lg-0  mt-2  basicSolarSystem" style={{ zIndex: '1' }}>
                        <div className="" style={{ color: 'rgb(87, 179, 62)', fontSize: '18px' }}>Solar System</div>
                        <div className="fw-bold " style={{ color: ' rgb(35, 35, 35)', fontSize: '36px' }} >All You Need To Know
                        </div>
                    </div>
                    <ul className="someBasicsBody">
                        <li>Solar technology is fast developing like several other such as Mobile phones, Computers etc. There are new products/Systems every day in the market.</li>
                        <li>Power generated from Solar System is directly proportional to the sun shine/rays falling on Solar panels. This results in less power generation in cloudy sky, mornings and evenings as compared noon time.</li>
                        <li>Presently there are three types of Solar Systems:
                            <ol>
                                <li>Off-grid means you are not connected in any way to your grid’s power System. This is appealing because you are 100% self-sustaining your energy use. This is suitable for small capacity Solar Systems. Disadvantage: Requires back-up battery/cells which can be expensive, bulky, and not very environmentally friendly. Batteries/ Cells require replacement after charge cycles used up.</li>
                                <li>On-grid/grid tied means your Solar System is tied to your local electric company’s System. If you are producing energy with your Solar System more than you are using, the excess energy is sent to your grid, allowing you to build credit that can be use in a certain period of time, in a process called net metering. This is suitable for large capacity Solar Systems. Disadvantage: No power from Solar System when grid fails. DG is required to run at about 30% of capacity to get power from solar system during grid failure.</li>
                                <li>Hybrid Systems combine both the concept of off grid and on grid together. Hybrid System helps reduce your peak electricity consumption from grid during the day by supplying/supplementing power generated from Solar System. This is suitable for large and small capacity Solar Systems. Keep getting power from Solar System when grid fails. Disadvantage: This System is slightly expensive and large capacity Hybrid single inverters are not available. External small power supply other than Solar power is required to make the Hybrid inverter work in the event of grid failure. DG will share the load in excess to the power generation from Hybrid System. Some saving on diesel consumption can be expected.</li>
                            </ol>
                        </li>
                        <li>A combination of grid tied and Hybrid System can be designed based on
                            <ol>
                                <li>duration and number of grid failures</li>
                                <li>preferred type of electricity supply to some loads etc.
                                </li>
                            </ol>
                        </li>
                        <li>If funds are not a constraint, Solar System capacity should be designed based on units consumed in a month/year to bring the electric bill to the minimum. Otherwise, a lower capacity Solar System may be installed to reduce peak electricity consumption from grid during the day time by supplementing power generated from Solar System.</li>
                        <li>One step Financing from govt banks, private banks and other institutions are available on attractive terms and conditions for Solar System.</li>
                        <li>100% depreciation is permitted. 40% 1st year, 40% on remaining value in 2nd year and 20% on remaining value for the following years till 100% of value is reached. 8. Prevailing GST on actual basis is applicable and it is not included in the price. Earthing and Lightening arrester costs included.</li>
                        <li>Departmental official: Rs 1000 processing fee. Net Meter formalities unofficial charges in the range of Rs 1/watt of capacity.</li>
                        <li>There will be additional cost of:
                            <ol>
                                <li>AC cable from Solar System to customer’s Distribution panel/Net Meter.</li>
                                <li>Net Meter, CT etc. for 10 kw System: about Rs 5200 net meter +Rs 660 for meter testing. Cost will be different for other capacities.</li>
                                <li>Civil work, if any. </li>
                            </ol>
                        </li>
                        <li>Attractive insurance terms and conditions are available.</li>
                    </ul>
                </div >
                {/* clients */}
                <div div className="clientsbody" style={{ minHeight: '1vh', display: 'block', overflow: 'none', height: '130vh' }
                }>

                    <div className=" clients" style={{ fontSize: '150px', color: 'white' }}>CLIENTS</div>
                    <div className='d-lg-flex  w-100'>
                        <img className='clientReviewing' src={require("../img/clients reviewing.png")} alt="" />
                        <div className="someFacts p-5">
                            <div className="my-5">
                                <div className="fw-bold" style={{ color: '#57b33e', fontSize: "18px" }}>| some facts</div>
                                <div className="fw-bold " style={{ color: "white", fontSize: '36px', }}>Clients Testimonials</div>
                            </div>
                            <div className="my-2 " style={{ color: '#cfd1d7', fontSize: "19px" }}>All functions including supply chain, value chain, project scheduling, manufacturing, services and <br /> spares, technology, R&D, etc. are integrated to give a complete solutions package.</div>
                            <div className='my-5'>
                                <div className="fw-bold" style={{ color: 'white', fontSize: "18px" }}>Arnold Wilson</div>
                                <div className="my-2 " style={{ color: '#cfd1d7', fontSize: "19px" }}>Client Of Company</div>
                            </div>
                            <div className="someFactsPages">
                                <button className='border-0 py-2 px-3' style={{ backgroundColor: '#ff7029' }}><i className="fa-solid fa-lg fa-angle-left" style={{ color: 'white' }}></i></button>
                                <button className='border-0 py-2 px-3' style={{ backgroundColor: '#ff7029' }}><i className="fa-solid fa-lg fa-angle-right" style={{ color: 'white' }}></i></button>
                            </div>
                        </div>
                    </div>
                    <div className=" say" style={{ fontSize: '150px', color: 'white' }}>SAY</div>
                    {/* <img className='turbineSketch' src={require('../img/turbine sketch.png')} alt="" /> */}
                </div >

                <div className='contactUsTag d-flex'>
                    <div className="parallax parallax-home p-lg-5 text-white d-block d-lg-flex d-md-flex align-items-center justify-content-center">
                        <div className="mx-auto ">
                            <h2 className="fw-bold ">Have Questions? We are Here to Help You!</h2>
                            <h6 className="">IRecco is among the world’s leading renewable energy solutions provider.</h6>
                        </div>
                        <div className="mx-auto ">
                            <a className="text-black bg-white  contactUsBtnOnHome border-0 px-4 py-3 fs-6  fw-bold" href="/contact">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div >





        </>
    )
}
