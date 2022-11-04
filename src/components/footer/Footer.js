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
        <div className='footerTop flex mga flexWrap'>
            <h3>ĐĂNG KÝ NHẬN THÔNG TIN</h3>
            <div className='mt-2'>
                <input placeholder='Nhập email của quý khách'></input>
                <button>GỬI</button>
            </div>
        </div>
        <div className='content mga'>
        <div className='contentTop mt-5 flex flexWrap'>
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
        <div className='contentMid flex mt-3 '>
            <Link to='#'><i class="fa-brands fa-facebook-f"></i></Link>
            <Link to='#'><i class="fa-brands fa-youtube"></i></Link>
            <Link to='#'><i class="fa-brands fa-instagram"></i></Link>
        </div>
        <div className='contentBot mt-3'>
            <div>
                <p><b>Số ĐKKD:</b></p>
                <p>4200456848. ĐK lần đầu 26/7/2006.<br /> ĐK thay đổi lần thứ 50: 3/3/2020</p>
            </div>
            <div>
                <p><b>Nơi cấp:</b></p>
                <p>Sở kế hoạch và đầu tư tỉnh Khánh Hòa</p>
                <p><b>Lĩnh vực kinh doanh:</b></p>
                <p>Khách sạn, biệt thự hoặc căn hộ kinh doanh dịch vụ lưu trú ngắn ngày; khu du lịch sinh thái</p>
            </div>
            <div>
                <p><b>Chủ tài khoản:</b></p>
                <p>Công ty cổ phần Vinpearl<br /> Tài khoản ngân hàng số: 9124412488166 (VND)</p>
                <p>Ngân hàng thương mại cổ phần Kỹ Thương Việt Nam (Techcombank) – Hội sở</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer