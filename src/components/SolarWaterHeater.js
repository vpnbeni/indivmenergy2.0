import React from 'react'
import img1 from './../img/solarwaterheaterFPC.png'
import img2 from './../img/solarwaterheaterETC.png'
export default function SolarWaterHeater() {
  return (
    <>
        <div>
        <div class="productSolarPanel pt-lg-5"><div class="pt-lg-5 text-white text-center pt-5 fw-bold" style={{fontSize:'52px'}}>Products</div><div class="fs-6 text-white  d-flex align-items-center justify-content-center"><a class="text-white text-center" href="/">Home</a> &nbsp; &nbsp; <i class="fa-solid fa-angle-right"></i> &nbsp; &nbsp; Solar Water Heater</div></div>
        <div class=" row m-md-5 m-2 "><div class="col-lg-3 sideBarForSolarPanel"><div class="fw-bold"><h1 class="">Categories</h1><ul class=""><li><a class="text-dark" href="/solarPanel">Solar Panel</a></li><li><a class="text-dark" href="/liBattery">Lithium Battery</a></li><li><a class="text-dark" href="/solarWaterHeater">Solar Water Heater</a></li></ul></div></div><div class="col-lg-9"><div class="d-lg-flex justify-content-start"><div class=" "><div class="galleryRow"><div class="galleryColumn"><a class=" solarPanelCard  text-dark" href="/heaterFPC"><div class="relatedProductImg d-flex align-items-center justify-content-center"><img class="mx-5 my-3" src={img1} alt=""/></div><hr/><div class="fw-bold text-center p-2 py-3"><div class="fs-5">Solar Water Heater (FPC)</div></div></a></div><div class="galleryColumn"><a class=" solarPanelCard  text-dark" href="/heaterETC"><div class="relatedProductImg d-flex align-items-center justify-content-center"><img class="mx-5 my-3" src={img2} alt=""/></div><hr/><div class="fw-bold text-center p-2 py-3"><div class="fs-5">Solar Water Heater (ETC)</div></div></a></div></div></div></div></div></div>
        </div>
    </>
  )
}
