import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import ParticlesStar from '../../components/ParticlesStar';
import Nav from '../../components/nav/Nav'
import FormBooking from '../../components/form search booking/Formbooking';
import Footer from '../../components/footer/Footer'
// SCSS
import './home.scss'

// images
import img1a from '../../assets/images/home/populations/1a.webp'
import img1b from '../../assets/images/home/populations/1b.webp'
import img2 from '../../assets/images/home/populations/2a.jpeg'
import img3 from '../../assets/images/home/populations/3a.webp'
// images Ecosystem
import imgE1 from '../../assets/images/home/ecosystem/nghiduong.webp'
import imgE2 from '../../assets/images/home/ecosystem/vuichoi.jpg'
import imgE3 from '../../assets/images/home/ecosystem/golf.webp'
import imgE4 from '../../assets/images/home/ecosystem/hoihop.jpg'
import imgE5 from '../../assets/images/home/ecosystem/amthuc.jpg'
// Awards
import awards1 from '../../assets/images/Awards/005.webp'
import awards2 from '../../assets/images/Awards/001.webp'
import awards3 from '../../assets/images/Awards/002.webp'
import awards4 from '../../assets/images/Awards/003.webp'
import awards5 from '../../assets/images/Awards/004.webp'
// logo Bottom -- Hotel
import Hotel1 from '../../assets/images/Awards/hotel001.webp'
import Hotel2 from '../../assets/images/Awards/hotel002.webp'
import Hotel3 from '../../assets/images/Awards/hotel003.webp'
import Hotel4 from '../../assets/images/Awards/hotel004.webp'
import Hotel5 from '../../assets/images/Awards/hotel005.webp'
import Hotel6 from '../../assets/images/Awards/hotel006.webp'
// -- Meeting & Even
import Meeting1 from '../../assets/images/Awards/meeting001.webp'
import Meeting2 from '../../assets/images/Awards/meeting002.webp'
import Meeting3 from '../../assets/images/Awards/meeting003.webp'
// -- entertainment
import Entertainment1 from '../../assets/images/Awards/entertainment001.svg'
import Entertainment2 from '../../assets/images/Awards/entertainment002.svg'
import Entertainment3 from '../../assets/images/Awards/entertainment003.svg'
import Entertainment4 from '../../assets/images/Awards/entertainment004.svg'
import Entertainment5 from '../../assets/images/Awards/entertainment005.svg'

function Home() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,   
    }

    let sliderTravel = {
        ...settings,
        dots:true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplaySpeed:3000,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
            },
            {
            breakpoint: 900,
            settings: {
                slidesToShow: 3
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }} 
        ]
    }
    let discount = {
        ...sliderTravel,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1800,
        autoplaySpeed:5000,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
            },
            {
            breakpoint: 700,
            settings: {
                slidesToShow: 1
            }
            }
        ]
    }
  return (
    <>
        <div className='home'>
            <Nav />
            <FormBooking />
            <div className='sliderTop' >
                <Slider {...settings}>
                    <div className='slideTopChild slideOne'></div>
                    <div className='slideTopChild slideTwo'></div>
                    <div className='slideTopChild slideThree'></div>
                </Slider>
                <ParticlesStar />
            </div>
            
            <div className='main'>
                <div className='travelFavourite mt-3'>
                    <h2>??i???m ?????n Y??u Th??ch</h2>
                    <div className='travelFavouriteChild'>
                    <div className='sliderTravel' >
                    <Slider {...sliderTravel}>
                        <div className='text'>
                            <div className='slideChild slide1'></div>
                            <p>PH?? QU???C</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide2'></div>
                            <p>B?? R???A - V??NG T??U</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide3'></div>
                            <p>PHAN THI???T</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide4'></div>
                            <p>???? L???T</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide5'></div>
                            <p>???? L???T</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide6'></div>
                            <p>???? N???NG</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide7'></div>
                            <p>NHA TRANG</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide8'></div>
                            <p>SAPA</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide9'></div>
                            <p>TR??NG AN</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide10'></div>
                            <p>V???NH H??? LONG</p>
                            </div>
                    </Slider>
                    </div>
                    </div>
                </div>
                <div className='discount mt-5'>
                    <h2>??u ????i khuy???n m??i</h2>
                    <Slider {...discount}>
                        <div className='slideChild slide1'></div>
                        <div className='slideChild slide2'></div>
                        <div className='slideChild slide3'></div>
                        <div className='slideChild slide4'></div>
                        <div className='slideChild slide5'></div>
                        <div className='slideChild slide6'></div>
                        <div className='slideChild slide7'></div>
                        <div className='slideChild slide8'></div>
                        <div className='slideChild slide9'></div>
                        <div className='slideChild slide10'></div>
                        <div className='slideChild slide11'></div>
                    </Slider>
                </div>
                <div className='mt-5 mb-5'>
                    <h2>Tr???i nghi???m h??? sinh th??i Vinpearl</h2>
                    <div className='Ecosystem mt-3'>
                        <div className='EcosystemChild'>
                            <div className='img'><img src={imgE1}></img></div>
                            <p>Ngh??? d?????ng</p>
                        </div>
                        <div className='EcosystemChild'>
                            <div className='img'><img src={imgE2}></img></div>
                            <p>Vui ch??i gi???i tr??</p>
                        </div>
                        <div className='EcosystemChild'>
                            <div className='img'><img src={imgE3}></img></div>
                            <p>Vinpearl Golf</p>
                        </div>
                        <div className='EcosystemChild'>
                            <div className='img'><img src={imgE4}></img></div>
                            <p>H???i h???p v?? s??? ki???n</p>
                        </div>
                        <div className='EcosystemChild'>
                            <div className='img'><img src={imgE5}></img></div>
                            <p>???m th???c</p>
                        </div>
                    </div>
                    
                </div>
                <div className='populations text-center'>
                    <h2>Si??u Qu???n Th??? Vinpearl</h2>
                    <p>Si??u qu???n th??? ngh??? d?????ng, vui ch??i gi???i tr??, mua s???m v?? ???m th???c t???i c??c ??i???m ?????n h??ng ?????u Vi???t Nam</p>
                    <div className='content'>
                        <section>
                            <div className='img'>
                                <img src={img1a}></img>
                            </div>
                            <div className='text'>
                                <h1>Ph?? Qu???c</h1>
                                <p>H?????ng tr???n v??? ?????p c???a thi??n nhi??n hoang s?? tr???i r???ng tr??n di???n t??ch h??n 1.000 ha ph??a B???c ?????o ng???c, Ph?? Qu???c United Center m??? ra c??nh c???a ?????n v???i V?? tr??? ngh??? d?????ng, vui ch??i gi???i tr?? b???t t???n.</p>
                                <Link to='#'>Kh??m ph?? ngay <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                            <div className='img imgNone'>
                                <img src={img1b}></img>
                            </div>
                        </section>
                        <section>
                            <div className='text'>
                                <h1>Nha Trang</h1>
                                <p>Vinpearl Nha Trang - Qu???n th??? du l???ch ngh??? d?????ng, vui ch??i v?? kh??m ph?? bi???n h??ng ?????u ????ng Nam ??, top 10 v???nh bi???n ?????p nh???t h??nh tinh t???o n??n v???n tr???i nghi???m ngh??? d?????ng ?????nh cao.</p>
                                <Link to='#'>Kh??m ph?? ngay <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                            <div className='img'>
                                <img src={img2}></img>
                            </div>
                        </section>
                        <section>
                            <div className='img'>
                                <img src={img3}></img>
                            </div>
                            <div className='text'>
                                <h1>Nam H???i An</h1>
                                <p>L?? t??m ??i???m c???a con ???????ng di s???n mi???n Trung, Qu???n th??? Vinpearl Nam H???i An l??m n??n m???t thi??n ???????ng ngh??? d?????ng ??? gi???i tr?? ??a s???c v??n h??a, mu??n m??u tr???i nghi???m.</p>
                                <Link to='#'>Kh??m ph?? ngay <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                            
                        </section>
                    </div>
                </div>
                <div className='travelGuide'>
                    <div className='text-top mt-5' >
                        <h2>C???m nang du l???ch</h2>
                        <Link to="#">Xem t???t c??? <i class="fa-solid fa-angles-right"></i></Link>
                    </div>
                    <p>C??ng Vinpearl kh??m ph?? tr???n v???n v??? ?????p Vi???t Nam qua tr???n b??? kinh nghi???m du l???ch, ngh??? d?????ng, vui ch??i c???c h???p d???n!</p>
                    <Slider {...discount}>
                        <section>
                            <div className='img'><div className='slideChild slide1'></div></div>
                            <p>Tr???n b??? kinh nghi???m, ??i???m ?????n & combo du l???ch Ph?? Qu???c t??? A - Z 2022</p>
                        </section>
                        <section>
                            <div className='img'><div className='slideChild slide2'></div></div>

                            <p>Kinh nghi???m du l???ch Nha Trang t??? t??c SI??U TI???T KI???M - BAO VUI 2022</p>
                        </section>
                        <section>
                            <div className='img'><div className='slideChild slide3'></div></div>

                            <p>Kinh nghi???m du l???ch H???i An TR???N B??? th???i gian, ??i l???i, ??n ???, vui ch??i</p>
                        </section>
                        <section>
                            <div className='img'><div className='slideChild slide4'></div></div>

                            <p>Du l???ch ???? N???ng vui qu??n l???i v??? tr???n b??? c???m nang A-Z</p>
                        </section>
                    </Slider>
                </div>
                <div className='QRcode mt-5'>
                    <div className='content-text'>
                        <h3>T???i ???ng d???ng <span>MyVinpearl</span></h3>
                        <p><i class="fa-solid fa-circle-check mt-3"></i> ??u ????i h???p d???n d??nh ri??ng cho ???ng d???ng</p>
                        <p><i class="fa-solid fa-circle-check"></i> Checkin tr???c tuy???n nhanh ch??ng, thu???n ti???n</p>
                        <p><i class="fa-solid fa-circle-check"></i> Tr??? l?? ???o xuy??n su???t to??n b??? h??nh tr??nh</p>
                    </div>
                </div>
                
            </div>
            <div className='awards'>
                <div className='content flex mga'>
                    <p>Gi???i th?????ng & th??nh t???u</p>
                    <div>
                        <img src={awards1}></img>
                        <img src={awards2}></img>
                        <img src={awards3}></img>
                        <img src={awards4}></img>
                        <img src={awards5}></img>
                    </div>
                </div> 
            </div>
            <div className='logoBottom'>
                <div className='hotel contentBot mt-5'>
                    <p>KH??CH S???N & NGH??? D?????NG</p>
                    <div className='img'>
                        <Link to='#'><img src={Hotel1}></img></Link>
                        <Link to='#'><img src={Hotel2}></img></Link>
                        <Link to='#'><img src={Hotel3}></img></Link>
                        <Link to='#'><img src={Hotel4}></img></Link>
                        <Link to='#'><img src={Hotel5}></img></Link>
                        <Link to='#'><img src={Hotel6}></img></Link>
                    </div>  
                </div>
                <div className='Meeting contentBot'>
                    <p>H???I H???P & S??? KI???N</p>
                    <div className='img'>
                        <Link to='#'><img src={Meeting1}></img></Link>
                        <Link to='#'><img src={Meeting2}></img></Link>
                        <Link to='#'><img src={Meeting3}></img></Link>
                    </div>
                </div>
                <div className='entertainment contentBot'>
                    <p>VUI CH??I & GI???I TR??</p>
                    <div className='img'>
                        <Link to='#'><img src={Entertainment1}></img></Link>
                        <Link to='#'><img src={Entertainment2}></img></Link>
                        <Link to='#'><img src={Entertainment3}></img></Link>
                        <Link to='#'><img src={Entertainment4}></img></Link>
                        <Link to='#'><img src={Entertainment5}></img></Link>  
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </>
  )
}

export default Home