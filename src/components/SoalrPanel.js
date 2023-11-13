import React from 'react'
import PolyCrystalline66Cell from './../img/PolyCrystalline66Cell.png'
import PolyCrystalline72Cell from './../img/PolyCrystalline72Cell.png'
import MonoCrystalline72Cell from './../img/MonoCrystalline72Cell.png'
import MonoCrystalline144Cell from './../img/MonoCrystalline144Cell.png'
export default function SoalrPanel() {
    return (
        <>
  
  <div class="productSolarPanel pt-lg-5"><div class="pt-lg-5 text-white text-center pt-5 fw-bold"  style={{fontSize:'52px'}}>Products</div><div class="fs-6 text-white  d-flex align-items-center justify-content-center"><a class="text-white text-center" href="/">Home</a> &nbsp; &nbsp; <i class="fa-solid fa-angle-right"></i> &nbsp; &nbsp; Solar Panel</div></div>
            <div class="row m-md-5 m-2">
                <div class="col-md-3 sideBarForSolarPanel">
                    <div class="fw-bold"><h1 class="">Categories</h1>
                        <ul class="">

                            <li><a class="text-dark" href="/solarPanel">Solar Panel</a>
                            </li><li><a class="text-dark" href="/liBattery">Lithium Battery</a></li>
                            <li><a class="text-dark" href="/solarWaterHeater">Solar Water Heater</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="">
                        <div class="galleryRow">
                            <div class="galleryColumn">
                                <a class=" solarPanelCard  text-dark" href="/productPC66">
                                    <div class="relatedProductImg d-flex align-items-center justify-content-center">
                                        <img class="mx-5 my-3" src={PolyCrystalline66Cell} alt="" />
                                    </div><hr /><div class="fw-bold text-center p-2 py-3">
                                        <div class="fs-5">PolyCrystalline 66Cell</div>
                                    </div>
                                </a>
                            </div>
                            <div class="galleryColumn">
                                <a class=" solarPanelCard  text-dark" href="/productPC72">
                                    <div class="relatedProductImg d-flex align-items-center justify-content-center">
                                        <img class="mx-auto my-3" src={PolyCrystalline72Cell} alt="" />
                                    </div><hr /><div class="fw-bold text-center p-2 py-3">
                                        <div class="fs-5">PolyCrystalline 72 Cell</div>
                                    </div>
                                </a></div><div class="galleryColumn">
                                <a class="relatedProductImg solarPanelCard  text-dark" href="/productMC66">
                                    <div class=" d-flex align-items-center justify-content-center">
                                        <img class="mx-auto my-3" src={MonoCrystalline72Cell} alt="" />
                                    </div>
                                    <hr /><div class="fw-bold text-center p-2 py-3"><div class="fs-5">MonoCrystalline 72Cell</div>
                                    </div>
                                </a>
                            </div>
                            <div class="galleryColumn">
                                <a class="relatedProductImg solarPanelCard  text-dark" href="/productMC144">
                                    <div class=" d-flex align-items-center justify-content-center">
                                        <img class="mx-auto my-3" src={MonoCrystalline144Cell} alt="" />
                                    </div><hr /><div class="fw-bold text-center p-2 py-3">
                                        <div class="fs-5">MonoCrystalline 144Cell</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
