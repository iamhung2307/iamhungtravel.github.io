import React from 'react'
import { Link } from 'react-router-dom'

// scss
import './footer.scss'

//img
import logo from '../../assets/images/index/logo.svg'
import contentTop from '../../assets/images/footer/imgContentTop.png'

function Footer() {
  return (
    <div className='footer pt-5'>
        <div className='footerTop flex mga'>
            <h3>ĐĂNG KÝ NHẬN THÔNG TIN</h3>
            <input placeholder='Nhập email của quý khách'></input>
            <button>GỬI</button>
        </div>
        <div className='contentTop mga mt-5'>
            <div className='contentTop1'>
                <img src={logo}></img>
                <span className='text'>
                    <p><i class="fa-solid fa-location-dot mt-4"></i>Đảo Hòn Tre,</p>
                    <p>Phường Vĩnh Nguyên,</p>
                    <p>Thành phố Nha Trang,</p>
                    <p>Tỉnh Khánh Hòa, Việt Nam</p>
                </span>
                <Link to='#'><i class="fa-solid fa-envelope"></i>callcenter@vinpearl.com</Link>
                <br /><Link to='#'><i class="fa-solid fa-phone"></i>1900 23 23 89 (Nhánh số 3)</Link>
                <img src={contentTop}></img>
            </div>
            <div className='contentTop2'>
                <h5>GIỚI THIỆU</h5>
                <Link to='#'>Về chúng tôi</Link>
                <Link to='#'>Thành tựu</Link>
                <Link to='#'>Liên hệ</Link>
                <Link to='#'>Tuyển dụng</Link>
                <Link to='#'>Câu hỏi thường gặp</Link>
                <Link to='#'>Bản đồ trang</Link>
            </div>
            <div className='contentTop3 '>
                <h5>TIN TỨC & SỰ KIỆN</h5>
                <Link to='#'>Tin công ty</Link>
                <Link to='#'>Cẩm nang du lịch</Link>
                <br></br>
                <Link to='#'><h5>THƯ VIỆN ẢNH</h5></Link>
                
            </div>
            <div className='contentTop4'>
                <h5>ĐIỀU KHOẢN & QUY ĐỊNH</h5>
                <Link to='#'>Điều khoản chung</Link>
                <Link to='#'>Quy định chung</Link>
                <Link to='#'>Quy định về thanh toán</Link>
                <Link to='#'>Quy định về xác nhận thông tin</Link>
                <Link to='#'>đặt phòng</Link>
                <Link to='#'>Chính sách giải quyết tranh chấp</Link>
                <Link to='#'>Chính sách quyền riêng tư</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer