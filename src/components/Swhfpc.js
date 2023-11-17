import React from 'react'
import img1 from './../img/solarwaterheaterFPC.png'
import img2 from './../img/solarwaterheaterETC.png'
export default function Swhfpc() {
  return (
    <div>
        <div class="productsIntro pt-lg-5"><div class="pt-lg-5 text-white text-center pt-5 fw-bold" style={{fontSize:'52px'}}>Products</div><div class="fs-6 text-white  d-md-flex text-center align-items-center justify-content-center"><div class="px-2"><a class="text-white text-center" href="/">Home</a> &nbsp; &nbsp; <i class="fa-solid fa-angle-right"></i></div><div class="px-2"><a class="text-white text-center" href="/solarWaterHeater">Solar Water Heater</a> &nbsp; &nbsp; <i class="fa-solid fa-angle-right"></i></div><div class="px-2">Solar Water Heater (FPC)</div></div></div>
        <div class="productBody row"><div class="col-lg-6 d-flex"><div class="productImg m-auto "><img class="w-100" id="productImage" alt="" src={img1}/></div></div><div class="col-lg-6 py-lg-4"><h1 class="fw-bold">Solar Water Heater (FPC)</h1><div class="fs-5">Solar water heating systems that use Flat Plate Collectors (FPC) as thermal collectors, convert the energy received from the sun to heat energy, transfers the Solar heat energy which is then transferred to heat the water. This heated water reaches your tap through your pipelines. Flat Plate Collectors act as heat exchangers making use of nature’s greenhouse effect. The large heat absorbing flat plate made of copper or aluminum which collects heat justifies the name – Flat Plate Collector (FPC).</div><hr class="w-25 text-muted bg-muted"/><div class="fs-5"><div class="my-lg-3"><span class="fw-bold">Catagory:</span> Solar Water Heater</div><div class="my-lg-3"><span class="fw-bold">Tags:</span> capacity, innovation, solar energy</div></div><div class="my-3 my-lg-3"><a class="text-white fw-bold px-3 py-2  getInquiry" href="/contact" style={{backgroundColor:'rgb(87, 179, 62)'}}>Get Inquiry</a></div></div></div>
        <div class="relatedProduct "><h2>Related Products</h2><div class="galleryRow"><div class="galleryColumn"><a class=" solarPanelCard  text-dark" href="/heaterETC"><div class="relatedProductImg d-flex align-items-center justify-content-center"><img class="mx-5 my-3" src={img2} alt=""/></div><hr/><div class="fw-bold text-center p-2 py-3"><div class="fs-5">Solar Water Heater (ETC)</div></div></a></div></div></div>
    </div>
  )
}
