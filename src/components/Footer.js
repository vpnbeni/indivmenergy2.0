import React from 'react'
import logo from './../img/logo.png'
export default function Footer() {
    return (
        <>
            <div className="footer text-white d-grid">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="mb-2">
                            <img className="m-auto aline-middle px-lg-4 px-2" src={logo} alt="" style={{ objectFit: 'cover', height: '100px' }} />
                        </div>
                        <div className="bg-muted mb-lg-3 mx-2 mb-2" style={{ width: '190px', height: '2px', backgroundColor: 'rgb(128, 128, 128)' }} >
                        </div>
                        <div className="p-lg-3 p-2">IEPL's extensive range of robust and reliable products backed by its cutting-edge R&amp;D and more than two decades of expertise are designed to performance.
                        </div>
                        <div className="d-flex"><a href="https://www.facebook.com" className="text-white socialIcons-fb fs-5 d-flex align-items-center mx-2 justify-content-center " style={{ width: '38px', height: '38px', borderRadius: '50%' }}>
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                            <a href="www" className="socialIcons-call text-white fs-6 d-flex align-items-center  justify-content-center " style={{ width: '38px', height: '38px', borderRadius: '50%' }} >
                                <i className="fa-solid fa-phone"></i>
                            </a>
                            <div className="socialIcons-whatsapp fs-5 text-white d-flex align-items-center  justify-content-center " style={{ width: '38px', height: '38px', borderRadius: '50%' }}>
                                <i className="fa-brands fa-whatsapp"></i>
                            </div>
                            <div className="socialIcons-instagram fs-5 text-white d-flex align-items-center  justify-content-center " style={{ width: '38px', height: '38px', borderRadius: '50%' }}>
                                <i className=" fa-brands fa-instagram"></i></div></div></div><div className="col-lg-4 col-12 m-lg-0 my-3 text-white"><h3 className="my-2">Our Address</h3><div className="my-3 bg-muted mb-lg-3 mb-2" style={{ width: '190px', height: '2px', backgroundColor: 'rgb(128, 128, 128)' }} ></div><div className="my-lg-2">
                                    <a className="text-white" href="www">
                                        <span className="font-weight-bold">Indivm Energy Private Limited </span>
                                        <br />
                                        {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" className="svg-inline--fa fa-location-dot " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                                    </svg> */}
                                        &nbsp; Sonepat Ganaur Road, Opposite Sakar Kui Mandir Sonepat - 131001 <br />
                                    </a>
                                </div>
                        <div className="my-lg-2"><a className="text-white" href="tel:+91 9518220044">
                            {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" className="svg-inline--fa fa-phone " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                            </svg> */}
                            &nbsp; +91 9518220044 </a>
                        </div>
                        <div className="my-lg-2">
                            <a className="text-white" href="mailto:indivmenergy@gmail.com">
                                {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg> */}
                                &nbsp; indivmenergy@gmail.com</a></div>
                        <div className="my-lg-2"><a className="text-white" href="mailto:indivmenergy@gmail.com">
                            {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg> */}
                            &nbsp; indivmenergy@outlook.com
                        </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 m-lg-0 my-3  ">
                        <h3 className="my-2">Our Products</h3>
                        <div className="my-3 bg-muted mb-lg-3 mb-2" style={{ width: '190px', height: '2px', backgroundColor: 'rgb(128, 128, 128)' }}>
                        </div>
                        <div className="my-lg-2">
                            <a className="text-white" href="/solarmodule">
                                {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                    <path fill="currentColor" d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z">
                                    </path>
                                </svg> */}
                                &nbsp;  Solar PV Module
                            </a>
                        </div>
                        <div className="my-lg-2">
                            <a className="text-white" href="/libattery">
                                {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                    <path fill="currentColor" d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z">
                                    </path>
                                </svg> */}
                                &nbsp;  Lithium Batteries
                            </a>
                        </div>
                        <div className="my-lg-2">
                            <a className="text-white" href="/inverter">
                                {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                    <path fill="currentColor" d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z">
                                    </path>
                                </svg> */}

                                &nbsp; Hybrid Inverters
                            </a>
                        </div>
                        <div className="my-lg-2">
                            <a className="text-white" href="/solarwaterheater">
                                {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                    <path fill="currentColor" d="M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                                </svg>  */}
                                &nbsp;  Solar Water Heater
                            </a>
                        </div>
                    </div>

                </div>
                <hr />
                <p>Copyright © 2022 IEPL. All Rights Reserved</p>
            </div >
        </>
    )
}
