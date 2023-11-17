import React from 'react'
import img1 from './../img/pexels-andrew-neel-2312369.jpg'
import { Link } from 'react-router-dom'
export default function Blog() {
    return (
        <div>
            <div class="contactUsIntro pt-lg-5" >
                <div class="pt-lg-5 text-white text-center pt-5 fw-bold" style={{ fontSize: '52px' }}>Blog</div>
                <div class="fs-6 text-white  d-flex align-items-center justify-content-center">
                    <a class="text-white text-center" href="/">Home</a> &nbsp; &nbsp; <i class="fa-solid fa-angle-right"></i> &nbsp; &nbsp; Blog
                </div>
            </div>
            <Link to={'/blog1'} className='blogPageBody'>
                <div className="blogPageCard">
                    <img className='blogCardImg' src={img1} alt="" />
                    <div className='blogPageBodyDiv'>
                        <h4 className='text-muted'>Politics</h4>
                        <h2 className='fw-bold text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing ...</h2>
                        <div className='d-flex'>
                            <div className='blogCardProfileImg'>
                                <img className='m-2' src={img1} alt="" />
                            </div>
                            <div>
                                <div className='text-dark m-0 p-0'>Maria Doe</div>
                                <div className='text-muted fs-6 m-0 p-0'>Jan 1, 2022</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="blogPageCard">
                    <img className='blogCardImg' src={img1} alt="" />
                    <div className='blogPageBodyDiv'>
                        <h4 className='text-muted'>Politics</h4>
                        <h2 className='fw-bold text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing ...</h2>
                        <div className='d-flex'>
                            <div className='blogCardProfileImg'>
                                <img className='m-2' src={img1} alt="" />
                            </div>
                            <div>
                                <div className='text-dark m-0 p-0'>Maria Doe</div>
                                <div className='text-muted fs-6 m-0 p-0'>Jan 1, 2022</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="blogPageCard">
                    <img className='blogCardImg' src={img1} alt="" />
                    <div className='blogPageBodyDiv'>
                        <h4 className='text-muted'>Politics</h4>
                        <h2 className='fw-bold text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing ...</h2>
                        <div className='d-flex'>
                            <div className='blogCardProfileImg'>
                                <img className='m-2' src={img1} alt="" />
                            </div>
                            <div>
                                <div className='text-dark m-0 p-0'>Maria Doe</div>
                                <div className='text-muted fs-6 m-0 p-0'>Jan 1, 2022</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="blogPageCard">
                    <img className='blogCardImg' src={img1} alt="" />
                    <div className='blogPageBodyDiv'>
                        <h4 className='text-muted'>Politics</h4>
                        <h2 className='fw-bold text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing ...</h2>
                        <div className='d-flex'>
                            <div className='blogCardProfileImg'>
                                <img className='m-2' src={img1} alt="" />
                            </div>
                            <div>
                                <div className='text-dark m-0 p-0'>Maria Doe</div>
                                <div className='text-muted fs-6 m-0 p-0'>Jan 1, 2022</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="blogPageCard">
                    <img className='blogCardImg' src={img1} alt="" />
                    <div className='blogPageBodyDiv'>
                        <h4 className='text-muted'>Politics</h4>
                        <h2 className='fw-bold text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing ...</h2>
                        <div className='d-flex'>
                            <div className='blogCardProfileImg'>
                                <img className='m-2' src={img1} alt="" />
                            </div>
                            <div>
                                <div className='text-dark m-0 p-0'>Maria Doe</div>
                                <div className='text-muted fs-6 m-0 p-0'>Jan 1, 2022</div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </Link>

        </div>
    )
}
