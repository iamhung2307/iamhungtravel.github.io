import React from 'react'

// scss
import './style.scss'


export default function FormBooking() {
  return (
    <div className='header'>
        <div className='Form-booking'>
          
          <div className='btn-content'>
            <button className='btn'><i class="fa-solid fa-hotel"></i>Khách sạn</button>
            <button className='btn'><i class="fa-solid fa-plane-departure"></i>Vé máy bay</button>
            <button className='btn'><i class="fa-solid fa-ticket"></i>Khách sạn + vé máy bay</button>
            <button className='btn'><i class="fa-solid fa-camera-retro"></i>Tour & Trải nghiệm</button>
          </div>
          {/* block content 1 */}
          <div className='form-detail '>
            <div className='dot'>
              <p><i class="fa-solid fa-location-dot"></i> Địa điểm</p>
              <input placeholder='Nhập khách sạn '></input>
            </div >
            <div className='dot'>
              <p><i class="fa-regular fa-calendar-days"></i>Ngày nhận - Trả phòng</p>
              <p>08/10/2022 - 10/10/2022</p>
            </div>
            <div className='dot'>
              <p><i class="fa-solid fa-bed"></i>Số phòng</p>
              <p>1 Phòng - 1 Người lớn - O Trẻ em</p>
            </div>
            <div>
              <p><i class="fa-solid fa-ticket"></i>Mã giảm giá</p>
              <input placeholder='Nhập mã giảm giá'></input>
            </div>
            <div><button className='btn-search'>Tìm Kiếm</button></div>
          </div>
          {/* block content 2 */}
            <div className='form-detail detail-bookings'>
            <div className='radio'>
              <input type='radio'></input>
              <p>Một chiều</p>
              <input type='radio'></input>
              <p>Khứ hồi</p>
            </div>
            <div className='detail-booking'>
                <div className='fromTo dot' >
                    <div>
                    <p><i class="fa-solid fa-plane-departure"></i>Từ</p>
                    <input placeholder='Điểm khởi hành'></input>
                    </div>

                    <div>
                    <p><i class="fa-solid fa-plane-arrival"></i>Đến</p>
                    <input placeholder='Điểm đến'></input>
                    </div>
                </div>
                <div className='dot'>
                    <p><i class="fa-regular fa-calendar-days"></i>Ngày đi - Ngày về</p>
                    <p>08/10/2022 - 10/10/2022</p>
                </div>
                <div className='dot'>
                    <p><i class="fa-solid fa-user"></i>Số lượng khách</p>
                    <p>1 người lớn - 0 Trẻ em - 0 Em bé</p>
                </div>
                <div>
                    <p><i class="fa-solid fa-ticket"></i>Mã giảm giá</p>
                    <input placeholder='Nhập mã giảm giá'></input>
                </div>
              <div><button className='btn-search'>Tìm Kiếm</button></div>
            </div>
            </div>
            {/* block content 3 */}
            <div className='form-detail detail-booking'>
                <div className='fromTo dot'>
                        <div>
                        <p><i class="fa-solid fa-plane-departure"></i>Từ</p>
                        <input placeholder='Điểm khởi hành'></input>
                        </div>

                        <div>
                        <p><i class="fa-solid fa-plane-arrival"></i>Đến</p>
                        <input placeholder='Điểm đến'></input>
                        </div>
                    </div>
                    <div className='dot'>
                        <p><i class="fa-regular fa-calendar-days"></i>Ngày đi - Ngày về</p>
                        <p>08/10/2022 - 10/10/2022</p>
                    </div>
                    <div className='dot'>
                        <p><i class="fa-solid fa-user"></i>Số lượng khách</p>
                        <p>1 người lớn - 0 Trẻ em - 0 Em bé</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-ticket"></i>Mã giảm giá</p>
                        <input placeholder='Nhập mã giảm giá'></input>
                    </div>
                <div><button className='btn-search'>Tìm Kiếm</button></div>
            </div>
            {/* block content 4 */}
            <div className='form-detail form-search'>
              <div className='top'>
                <p><i class="fa-solid fa-magnifying-glass"></i>Tìm kiếm</p>
                <input placeholder='Nhập điểm đến, tên sản phẩm hoặc tên ưu đãi ...'></input>
              </div>
              <div><button className='btn-search'>Tìm Kiếm</button></div>
            </div>
            <div className='text-content-header'>
              <p>Đảm bảo giá tốt nhất Hoàn hủy linh hoạt Hỗ trợ 24/7</p>
            </div>
    </div>
    </div>
  )
}
