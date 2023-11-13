import React from 'react'
import img from './../img/PolyCrystalline66Cell.png'
import img2 from './../img/PolyCrystalline72Cell.png'
import img3 from './../img/MonoCrystalline72Cell.png'
import img4 from './../img/MonoCrystalline144Cell.png'
export default function PolyCrystalline66Cell() {
  return (
    <>
        <div className="productsIntro pt-lg-5"><div className="pt-lg-5 text-white text-center pt-5 fw-bold" style={{fontSize:'52px'}}>Products</div><div className="fs-6 text-white text-center d-md-flex align-items-center justify-content-center"><div className="px-2"><a className="text-white text-center" href="/">Home</a> &nbsp; &nbsp; <i className="fa-solid fa-angle-right"></i></div><div className="px-2"><a className="text-white text-center" href="/solarPanel">Solar Panel</a> &nbsp; &nbsp; <i className="fa-solid fa-angle-right"></i></div><div className="px-2">Poly Crystalline 66Cell 300Wp</div></div></div>

        <div className="productBody row"><div className="col-lg-6 d-flex"><div className="productImg m-auto ">
            <img className="" id="productImage" alt="" src={img}/>
                </div></div><div className="col-lg-6 py-lg-4"><h1 className="fw-bold">Solar Panel 66Cell 300Wp</h1><table className="fs-4 fw-bold "  style={{color:'rgb(111, 177, 79)'}}><tr><td className="p-2">DCR:</td><td className="p-2"> ₹7,800.00</td></tr><tr><td className="p-2">NON DCR:</td><td className="p-2">₹7,500.00</td></tr></table><div className="fs-5">Our solar panels are low-profile and durable quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimal aesthetic. (ALMM approved)</div><hr className="w-25 text-muted bg-muted" /><div className="fs-5"><div className="my-lg-3"><span className="fw-bold">SKU:</span>solar-panel-300wp</div><div className="my-lg-3"><span className="fw-bold">Catagory:</span> Solar Panels</div><div className="my-lg-3"><span className="fw-bold">Tags:</span> capacity, innovation, solar energy</div></div><div className="my-3 my-lg-3"><a className="text-white fw-bold px-3 py-2  getInquiry" href="/contact"  style={{backgroundColor:'rgb(87, 179, 62)'}}>Get Inquiry</a></div></div></div>

                <div className="relatedProduct "><h2>Related Products</h2><div className="galleryRow"><div className="galleryColumn"><a className=" solarPanelCard  text-dark" href="/productPC72"><div className="relatedProductImg d-flex align-items-center justify-content-center"><img className="mx-auto my-3" src={img2} alt=""/></div><hr/><div className="fw-bold text-center p-2 py-3"><div className="fs-5">PolyCrystalline 72Cell</div></div></a></div><div className="galleryColumn"><a className=" solarPanelCard  text-dark" href="/productMC66"><div className="relatedProductImg d-flex align-items-center justify-content-center">
                    <img className="mx-auto my-3" src={img3} alt=""/></div><hr/><div className="fw-bold text-center p-2 py-3"><div className="fs-5">MonoCrystalline 66Cell</div></div></a></div><div className="galleryColumn"><a className="relatedProductImg solarPanelCard  text-dark" href="/productMC144"><div className=" d-flex align-items-center justify-content-center"><img className="mx-auto my-3" src={img4} alt=""/></div><hr /><div className="fw-bold text-center p-2 py-3"><div className="fs-5">MonoCrystalline 144Cell</div></div></a></div></div></div>

    </>
  )
}
