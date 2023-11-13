import React from 'react'
import { Link } from 'react-router-dom';
import logo from './../img/logo.png'
export default function Navbar() {

    return (
        <>
            {/* <!-- Navbar --> */}

            <nav className=" text-dark m-0 p-0 w-100 navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className=" d-flex align-item-center m-0 p-0  container-fluid">
                    <a className="navbar-brand " href="/">
                        <img className="m-auto aline-middle p-2 px-lg-4 px-2" src={logo} alt="" style={{ objectFit: 'cover', height: '70px' }} />
                    </a>
                    <div className="d-lg-block d-none" style={{ maxHeight: '80px' }}>
                        <ul className="text-center navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: '17px', color: 'black' }}>
                            <li className="nav-item d-flex align-item-center justify-content-center">
                                <Link to={'/'} className="nav-link mx-2 contact fw-bold text-center " style={{ margin: 'auto' }} href="/">
                                    <span className="activeButtonDash ">
                                        <i className="fa-solid fa-minus fa-lg"></i>
                                    </span>
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item d-flex align-item-center justify-content-center">
                                <Link to={'/about'} className="nav-link mx-2 contact fw-bold" style={{ margin: 'auto' }} >
                                    <span className="activeButtonDash">
                                        <i className="fa-solid fa-minus fa-lg"></i>
                                    </span>
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item d-flex align-item-center justify-content-center">
                                <div style={{margin:'auto'}} className="nav-link mx-2 contact fw-bold" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="activeButtonDash ">
                                        <i className="fa-solid fa-minus fa-lg"></i>
                                    </span>
                                    Products
                                </div>
                                <div className="dropdown text-center ">
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link to={'/solarPanel'} className="dropdown-item" >Solar Panel</Link></li>

                                        <li><Link  to={'/liBattery'} className="dropdown-item" >Lithium Battery</Link></li>
                                        <li><Link to={'/solarWaterHeater'} className="dropdown-item" >Solar Water Heater</Link></li>
                                    </ul></div></li>
                            <li className="nav-item">
                                <Link to={'/gallery'} className="nav-link mx-2 contact fw-bold" >
                                    <span className="activeButtonDash"><i className="fa-solid fa-minus fa-lg"></i></span>  Gallery </Link></li>
                            <li className="nav-item">
                                <Link to={'/contact'} className="nav-link mx-2 contact fw-bold" >
                                    <span className="activeButtonDash"><i className="fa-solid fa-minus fa-lg"></i>
                                    </span>  Contacts </Link></li></ul></div><div className="d-flex d-lg-none justify-content-center align-items-center " data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{ backgroundColor: 'rgb(237, 121, 63)', width: '80px', height: '80px' }}>
                        <i className="fa-sharp text-center text-white fa-solid fa-bars fs-3"></i></div>
                    <div className="d-lg-flex d-none align-items-center " style={{ backgroundColor: 'rgb(32, 36, 43)', height: '80px' }}><a href="https://www.facebook.com" className="text-white socialIcons-fb fs-5 d-flex align-items-center mx-2 justify-content-center " style={{ width: '38px', height: '38px', borderRadius: '50%' }}>
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                        <a href="www" className="socialIcons-call text-white fs-6 mx-2 d-flex align-items-center  justify-content-center " style={{ width: '38px', height: '38px', borderRadius: '50%' }}>
                            <i className="fa-solid fa-phone"></i></a><div className="socialIcons-whatsapp fs-5 text-white mx-2 d-flex align-items-center  justify-content-center " >
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                        <div className="socialIcons-instagram fs-5 text-white mx-2 d-flex align-items-center  justify-content-center " style={{ width: '38px', height: '38px', borderRadius: '50%' }}>
                            <i className=" fa-brands fa-instagram"></i>
                        </div>
                    </div><div className="offcanvas d-lg-none  offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabe" style={{ widows: '60%' }}><div className="offcanvas-header"><a className="navbar-brand " href="/">
                        <img className="m-auto aline-middle p-2 px-lg-4 px-2" src="/static/media/INDIVM_LOGO.4c36855ec3539fcc2f3b.png" alt="" style={{ objectFit: 'cover', height: '70px' }} />
                    </a><button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close">
                        </button></div><div className="offcanvas-body"><div className="d-flex justify-content-between fw-bold fs-4">
                            <div> <a className="text-dark fw-bold " href="/"> Home</a>
                            </div>
                        </div>
                            <a className="text-dark" data-bs-toggle="collapse" href="#collapseProducts" role="button" aria-expanded="false" aria-controls="collapseProducts">
                                <div className="d-flex justify-content-between fw-bold fs-4">
                                    <div className=""> Products</div>
                                    <div>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                </div></a><div className="collapse" id="collapseProducts">
                                <div className="card card-body">
                                    <a className="text-dark my-2 fw-bold" href="/solarPanel">Solar Panel</a>


                                    <a className="text-dark my-2 fw-bold" href="/liBattery">Lithium Battery</a>
                                    <a className="text-dark my-2 fw-bold" href="/solarWaterHeater">Solar Water Heater</a>
                                </div>
                            </div><div className="fw-bold fs-4"> <Link className="text-dark " to={'/about'}> About Us</Link>
                            </div>
                            <div className="fw-bold fs-4"> <a className="text-dark " href="/gallery"> Gallery</a>
                            </div>
                            <div className="fw-bold fs-4"> <a className="text-dark " href="/contact"> Contact Us</a>
                            </div>
                            <div className=""><div className="d-lg-none d-flex align-items-center my-5 rounded " style={{ backgroundColor: 'rgb(32, 36, 43)', height: '80px' }}>
                                <a href="https://www.facebook.com" className="text-white socialIcons-fb fs-5 d-flex align-items-center mx-2 justify-content-center " style={{ width: '38px', height: '38px', borderRadius: '50%' }}>
                                    <i className="fa-brands fa-facebook"></i>
                                </a><a href="tel:+919518220044" className="socialIcons-call text-white fs-6 mx-2 d-flex align-items-center  justify-content-center " style={{ width: '38px', height: '38px', borderRadius: '50%' }}>
                                    <i className="fa-solid fa-phone"></i>
                                </a>
                                <a target="_blank" href="https://wa.me/+919518220044" className="socialIcons-whatsapp fs-5 text-white mx-2 d-flex align-items-center  justify-content-center " style={{ width: '38px', height: '38px', borderRadius: '50%' }}>
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                                <div className="socialIcons-instagram fs-5 text-white mx-2 d-flex align-items-center  justify-content-center " style={{ width: '38px', height: '38px', borderRadius: '50%' }}>
                                    <i className=" fa-brands fa-instagram">
                                    </i>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar --> */}


        </>
    )
}
