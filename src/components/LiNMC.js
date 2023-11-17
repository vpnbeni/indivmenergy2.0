import React from 'react'
import img1 from './../img/liNMC.png'
import img2 from './../img/liLFP.png'
export default function LiNMC() {
    return (
        <>
            <div >
                <div class="productsIntro pt-lg-5"><div class="pt-lg-5 text-white text-center pt-5 fw-bold" style={{ fontSize: '52px' }}>Products</div><div class="fs-6 text-white text-center d-md-flex align-items-center justify-content-center"><div class="px-2"><a class="text-white text-center" href="/">Home</a> &nbsp; &nbsp; <i class="fa-solid fa-angle-right"></i></div><div class="px-2"><a class="text-white text-center" href="/liBAttery">Li Battery</a> &nbsp; &nbsp; <i class="fa-solid fa-angle-right"></i></div><div class="px-2"> Lithium Battery (NMC)</div></div></div>
                <div class="productBody row">
                    <div class="col-lg-6 d-flex">
                        <div class="productImg m-auto ">
                            <img class="w-100" id="productImage" alt="" src={img1} />
                        </div>
                    </div>
                    <div class="col-lg-6 py-lg-4">
                        <h1 class="fw-bold">Lithium Battery (NMC)</h1>
                        <div class="fs-5">
                            <p>
                                A lithium-ion battery, also known as the Li-ion battery, is a type of secondary (rechargeable) battery composed of cells in which lithium ions move from the anode through an electrolyte to the cathode during discharge and back when charging.
                                <br />      There are several specific advantages to lithium-ion batteries. The most important advantages are their high cell voltage, high energy density, and no memory effect.
                                <br />    Nickel manganese cobalt (NMC) batteries contain a cathode made of a combination of nickel, manganese, and cobalt. NMC is one of the most successful cathode combinations in Li-ion systems. It can be tailored to serve as energy cells or power cells like Li-manganese. NMC batteries are used for power tools, e-bikes, and other electric powertrains.
                            </p>
                        </div>
                        <hr class="w-25 text-muted bg-muted" />
                        <div class="fs-5">
                            <div class="my-lg-3"><span class="fw-bold">Catagory:</span> Li Battery</div><div class="my-lg-3"><span class="fw-bold">Tags:</span> capacity, innovation, solar energy</div></div><div class="my-3 my-lg-3"><a class="text-white fw-bold px-3 py-2  getInquiry" href="/contact" style={{ backgroundColor: 'rgb(87, 179, 62)' }}>Get Inquiry</a></div></div></div>

                <div class="relatedProduct " ><h2>Related Products</h2><div class="galleryRow"><div class="galleryColumn"><a class=" solarPanelCard  text-dark" href="/liLFP"><div class="relatedProductImg d-flex align-items-center justify-content-center"><img class="mx-5 my-3" src={img2} alt="" /></div><hr /><div class="fw-bold text-center p-2 py-3"><div class="fs-5">Li Battery (LFP)</div></div></a></div></div></div>

            </div>


        </>
    )
}
