import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import ParticlesStar from '../../components/ParticlesStar';
import Nav from '../../components/nav/Nav'
import Formbooking from '../../components/form search booking/Formbooking'

// SCSS
import './home.scss'
import FormBooking from '../../components/form search booking/Formbooking';

// images
import img1a from '../../assets/images/home/populations/1a.webp'
import img1b from '../../assets/images/home/populations/1b.webp'
import img2 from '../../assets/images/home/populations/2a.jpeg'
import img3 from '../../assets/images/home/populations/3a.webp'

function Home() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
        // fade: true,
	    // fadeSpeed: 1000
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
                    <div className='content'>
                        <section>
                            <div className='img'>
                                <img src={img1a}></img>
                            </div>
                            <div className='text'>
                                <h1>Phú Quốc</h1>
                                <p>Hưởng trọn vẻ đẹp của thiên nhiên hoang sơ trải rộng trên diện tích hơn 1.000 ha phía Bắc đảo ngọc, Phú Quốc United Center mở ra cánh cửa đến với Vũ trụ nghỉ dưỡng, vui chơi giải trí bất tận.</p>
                                <Link to='#'>Khám phá ngay <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                            <div className='img'>
                                <img src={img1b}></img>
                            </div>
                        </section>
                        <section>
                            <div className='text'>
                                <h1>Nha Trang</h1>
                                <p>Vinpearl Nha Trang - Quần thể du lịch nghỉ dưỡng, vui chơi và khám phá biển hàng đầu Đông Nam Á, top 10 vịnh biển đẹp nhất hành tinh tạo nên vạn trải nghiệm nghỉ dưỡng đỉnh cao.</p>
                                <Link to='#'>Khám phá ngay <i class="fa-solid fa-arrow-right"></i></Link>
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
                                <h1>Nam Hội An</h1>
                                <p>Là tâm điểm của con đường di sản miền Trung, Quần thể Vinpearl Nam Hội An làm nên một thiên đường nghỉ dưỡng – giải trí đa sắc văn hóa, muôn màu trải nghiệm.</p>
                                <Link to='#'>Khám phá ngay <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>
                            
                        </section>
                    </div>
                    {/* <div>
                        <div>
                            <img></img>
                        </div>
                        <div>
                            <img></img>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Home