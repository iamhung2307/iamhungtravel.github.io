import React from 'react'
import Slider from "react-slick";

function SliderTravel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay:true,
        autoplaySpeed:3000
    }
  return (
    <div className='sliderTravel' >
        <Slider {...settings}>
            <div className='slideChild slide1'>1</div>
            <div className='slideChild slide2'>2</div>
            <div className='slideChild slide3'>3</div>
            <div className='slideChild slide4'>4</div>
            <div className='slideChild slide5'>5</div>
            <div className='slideChild slide6'>6</div>
            <div className='slideChild slide7'>7</div>
            <div className='slideChild slide8'>8</div>
            <div className='slideChild slide9'>9</div>
            <div className='slideChild slide10'>10</div>
            <div className='slideChild slide11'>11</div>
            <div className='slideChild slide12'></div>

        </Slider>
        
    </div>
  )
}

export default SliderTravel