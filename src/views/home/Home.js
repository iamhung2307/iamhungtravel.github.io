import React from 'react'
import Slider from "react-slick";

import ParticlesStar from '../../components/ParticlesStar';
import Nav from '../../components/nav/Nav'
import Formbooking from '../../components/form search booking/Formbooking'
import SliderTravel from '../../components/slider/SliderTravel';
// SCSS
import './home.scss'
import FormBooking from '../../components/form search booking/Formbooking';


function Home() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000
    }
    let sliderTravel = {
        ...settings,
        dots:true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplaySpeed:3000
    }
    let discount = {
        ...sliderTravel,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1800,
        autoplaySpeed:5000
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
                    <h2>Điểm Đến Yêu Thích</h2>
                    <div className='travelFavouriteChild'>
                    <div className='sliderTravel' >
                    <Slider {...sliderTravel}>
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
                        <div className='slideChild slide12'></div>

                    </Slider>
        
                    </div>
                    </div>
                </div>
                <div className='discount mt-5'>
                    <h2>Ưu đãi khuyến mãi</h2>
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
                    <h2>Trải nghiệm hệ sinh thái Vinpearl</h2>
                    <div className='Ecosystem mt-3'>
                        <div className='EcosystemChild Ecosystem1'>
                            <p>Nghỉ dưỡng</p>
                        </div>
                        <div className='EcosystemChild Ecosystem2'>
                            <p>Vui chơi giải trí</p>
                        </div>
                        <div className='EcosystemChild Ecosystem3'>
                            <p>Vinpearl Golf</p>
                        </div>
                        <div className='EcosystemChild Ecosystem4'>
                            <p>Hội họp và sự kiện</p>
                        </div>
                        <div className='EcosystemChild Ecosystem5'>
                            <p>Ẩm thực</p>
                        </div>
                    </div>
                </div>
                <div className='populations text-center'>
                    <h2>Siêu Quần Thể Vinpearl</h2>
                    <p>Siêu quẩn thể nghỉ dưỡng, vui chơi giải trí, mua sắm và ẩm thực tại các điểm đến hàng đầu Việt Nam</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home