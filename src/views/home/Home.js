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
    // const [screenWidth,setScreenWidth] = useState(screen.width)
    // console.log(screenWidth)
    // useEffect(()=>{
    //     setScreenWidth(screenWidth)
    // },[screenWidth])
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
                        <div className='text'>
                            <div className='slideChild slide1'></div>
                            <p>PHÚ QUỐC</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide2'></div>
                            <p>BÀ RỊA - VŨNG TÀU</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide3'></div>
                            <p>PHAN THIẾT</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide4'></div>
                            <p>ĐÀ LẠT</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide5'></div>
                            <p>ĐÀ LẠT</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide6'></div>
                            <p>ĐÀ NẴNG</p>
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
                            <p>TRÀNG AN</p>
                            </div>
                        <div className='text'>
                            <div className='slideChild slide10'></div>
                            <p>VỊNH HẠ LONG</p>
                            </div>
                        
                        {/* <div className='slideChild slide11'></div>
                        <div className='slideChild slide12'></div> */}
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
                        <div className='EcosystemChild'>
                            <div className='img'><img src={imgE1}></img></div>
                            <p>Nghỉ dưỡng</p>
                        </div>
                        <div className='EcosystemChild'>
                            <div className='img'><img src={imgE2}></img></div>
                            <p>Vui chơi giải trí</p>
                        </div>
                        <div className='EcosystemChild'>
                            <div className='img'><img src={imgE3}></img></div>
                            <p>Vinpearl Golf</p>
                        </div>
                        <div className='EcosystemChild'>
                            <div className='img'><img src={imgE4}></img></div>
                            <p>Hội họp và sự kiện</p>
                        </div>
                        <div className='EcosystemChild'>
                            <div className='img'><img src={imgE5}></img></div>
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
                            <div className='img imgNone'>
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
                </div>
                <div className='travelGuide'>
                    <div className='text-top mt-5' >
                        <h2>Cẩm nang du lịch</h2>
                        <Link to="#">Xem tất cả <i class="fa-solid fa-angles-right"></i></Link>
                    </div>
                    <p>Cùng Vinpearl khám phá trọn vẹn vẻ đẹp Việt Nam qua trọn bộ kinh nghiệm du lịch, nghỉ dưỡng, vui chơi cực hấp dẫn!</p>
                    <Slider {...discount}>
                        <section>
                            <div className='img'><div className='slideChild slide1'></div></div>
                            <p>Trọn bộ kinh nghiệm, điểm đến & combo du lịch Phú Quốc từ A - Z 2022</p>
                        </section>
                        <section>
                            <div className='img'><div className='slideChild slide2'></div></div>

                            <p>Kinh nghiệm du lịch Nha Trang tự túc SIÊU TIẾT KIỆM - BAO VUI 2022</p>
                        </section>
                        <section>
                            <div className='img'><div className='slideChild slide3'></div></div>

                            <p>Kinh nghiệm du lịch Hội An TRỌN BỘ thời gian, đi lại, ăn ở, vui chơi</p>
                        </section>
                        <section>
                            <div className='img'><div className='slideChild slide4'></div></div>

                            <p>Du lịch Đà Nẵng vui quên lối về trọn bộ cẩm nang A-Z</p>
                        </section>
                    </Slider>
                </div>
                <div className='QRcode mt-5'>
                    <div className='content-text'>
                        <h3>Tải ứng dụng <span>MyVinpearl</span></h3>
                        <p><i class="fa-solid fa-circle-check mt-3"></i> Ưu đãi hấp dẫn dành riêng cho ứng dụng</p>
                        <p><i class="fa-solid fa-circle-check"></i> Checkin trực tuyến nhanh chóng, thuận tiện</p>
                        <p><i class="fa-solid fa-circle-check"></i> Trợ lý ảo xuyên suốt toàn bộ hành trình</p>
                    </div>
                </div>
                
            </div>
            <div className='awards'>
                <div className='content flex mga'>
                    <p>Giải thưởng & thành tựu</p>
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
                    <p>KHÁCH SẠN & NGHỈ DƯỠNG</p>
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
                    <p>HỘI HỌP & SỰ KIỆN</p>
                    <div className='img'>
                        <Link to='#'><img src={Meeting1}></img></Link>
                        <Link to='#'><img src={Meeting2}></img></Link>
                        <Link to='#'><img src={Meeting3}></img></Link>
                    </div>
                </div>
                <div className='entertainment contentBot'>
                    <p>VUI CHƠI & GIẢI TRÍ</p>
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