import React from 'react'
import img1 from './../img/PolyCrystalline72Cell.png'
import img2 from './../img/PolyCrystalline66Cell.png'
import img3 from './../img/MonoCrystalline72Cell.png'
import img4 from './../img/MonoCrystalline144Cell.png'
export default function PolyCrystalline72Cell() {
    return (
        <>
            <div className="PolyCrystalline72Cell">
                <div class="productsIntro pt-lg-5"><div class="pt-lg-5 text-white text-center pt-5 fw-bold" style={{ fontSize: '52px' }}>Products</div><div class="fs-6 text-white text-center d-md-flex align-items-center justify-content-center"><div class="px-2"><a class="text-white text-center" href="/">Home</a> &nbsp; &nbsp; <i class="fa-solid fa-angle-right"></i></div><div class="px-2"><a class="text-white text-center" href="/solarPanel">Solar Panel</a> &nbsp; &nbsp; <i class="fa-solid fa-angle-right"></i></div><div class="px-2"> Poly Crystalline 72Cell 300/350Wp</div></div></div>

                <div class="productBody row"><div class="col-lg-6 d-flex"><div class="productImg m-auto "><img class="" id="productImage" alt="" src={img1} /></div></div><div class="col-lg-6 py-lg-4"><h1 class="fw-bold">Solar Panel 72Cell 300/350Wp</h1><table class="fs-4 fw-bold " style={{ color: 'rgb(111, 177, 79)' }} ><tr><td class="p-2">DCR:</td><td class="p-2"> ₹8,900.00</td></tr><tr><td class="p-2">NON DCR:</td><td class="p-2">₹8,710.00</td></tr></table><div class="fs-5">Our solar panels are low-profile and durable quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimal aesthetic. (ALMM approved)</div><hr class="w-25 text-muted bg-muted" /><div class="fs-5"><div class="my-lg-3"><span class="fw-bold">SKU:</span>solar-panel-300wp</div><div class="my-lg-3"><span class="fw-bold">Catagory:</span> Solar Panels</div><div class="my-lg-3"><span class="fw-bold">Tags:</span> capacity, innovation, solar energy</div></div><div class="my-3 my-lg-3"><a class="text-white fw-bold px-3 py-2  getInquiry" href="/contact" style={{ backgroundColor: 'rgb(87, 179, 62)' }}>Get Inquiry</a></div></div></div>
                <div class="relatedProduct "><h2 class="text-center">Related Products</h2><div class="galleryRow"><div class="galleryColumn"><a class=" solarPanelCard  text-dark" href="/productPC66"><div class="relatedProductImg d-flex align-items-center justify-content-center"><img class="mx-5 my-3" src={img2} alt="" /></div><hr /><div class="fw-bold text-center p-2 py-3"><div class="fs-5">PolyCrystalline 66Cell</div></div></a></div><div class="galleryColumn"><a class=" solarPanelCard  text-dark" href="/productMC66"><div class="relatedProductImg d-flex align-items-center justify-content-center"><img class="mx-auto my-3" src={img3} alt="" /></div><hr /><div class="fw-bold text-center p-2 py-3"><div class="fs-5">MonoCrystalline 66Cell</div></div></a></div><div class="galleryColumn"><a class="relatedProductImg solarPanelCard  text-dark" href="/productMC144"><div class=" d-flex align-items-center justify-content-center"><img class="mx-auto my-3" src={img4} alt="" /></div><hr /><div class="fw-bold text-center p-2 py-3"><div class="fs-5">MonoCrystalline 144Cell</div></div></a></div></div></div>
            </div>
        </>
    )
}
