import React from 'react'
import img2 from './../img/liNMC.png'
import img1 from './../img/liLFP.png'
export default function LiLFP() {
    return (
        <>
            <div>

            <div class="productsIntro pt-lg-5"><div class="pt-lg-5 text-white text-center pt-5 fw-bold" style={{ fontSize: '52px' }}>Products</div><div class="fs-6 text-white text-center  d-md-flex align-items-center justify-content-center"><div class="px-2"><a class="text-white text-center" href="/">Home</a> &nbsp; &nbsp; <i class="fa-solid fa-angle-right"></i></div><div class="px-2"><a class="text-white text-center" href="/liBAttery">Li Battery</a> &nbsp; &nbsp; <i class="fa-solid fa-angle-right"></i></div><div class="px-2"> Lithium Battery (LFP)</div></div></div>
            <div class="productBody row"><div class="col-lg-6 d-flex"><div class="productImg m-auto "><img class="w-100" id="productImage" alt="" src={img1}/></div></div><div class="col-lg-6 py-lg-4"><h1 class="fw-bold">Lithium Iron Phosphate (LFP) Battery</h1><div class="fs-5">A Lithium Iron Phosphate (LFP) battery is a lithium-ion battery used in various applications. It is composed of lithium iron phosphate, an environmentally friendly compound. These batteries can charge and discharge at high speeds, making them ideal for applications requiring a lot of power. Due to their chemistry, they are also more stable and safer than other lithium batteries. This makes them an attractive option for electric vehicles, solar energy storage, and consumer electronics applications. LFP batteries offer many advantages over traditional lead-acid batteries, making them an attractive option for various applications.</div><hr class="w-25 text-muted bg-muted"/><div class="fs-5"><div class="my-lg-3"><span class="fw-bold">Catagory:</span> Li Battery</div><div class="my-lg-3"><span class="fw-bold">Tags:</span> capacity, innovation, solar energy</div></div><div class="my-3 my-lg-3"><a class="text-white fw-bold px-3 py-2  getInquiry" href="/contact" style={{backgroundColor:'rgb(87, 179, 62)'}}>Get Inquiry</a></div></div></div>
            <div class="relatedProduct "><h2>Related Products</h2><div class="galleryRow"><div class="galleryColumn"><a class=" solarPanelCard  text-dark" href="/liNMC"><div class="relatedProductImg d-flex align-items-center justify-content-center"><img class="mx-5 my-3" src={img2} alt=""/></div><hr/><div class="fw-bold text-center p-2 py-3"><div class="fs-5">Li Battery (NMC)</div></div></a></div></div></div>
            </div>
        </>
    )
}
