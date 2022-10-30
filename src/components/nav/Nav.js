import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
// scss
import './nav.scss'

// img
import imgLogo from '../../assets/images/index/logo.svg'
import logoBlack from '../../assets/images/index/logo.png'
export default function Nav() {
  // let [scroll,setscroll] = useState(false)
  
  useEffect(()=>{
    const handleScroll = () =>{
      const nav = document.querySelector('.navbar')
      const formBooking = document.querySelector('.header')
      if(window.scrollY > 50){
        nav.classList.add('active')
      }else{
        nav.classList.remove('active')
      }
      if(window.scrollY>170){
        formBooking.style.display = 'none'
      }else{
        formBooking.style.display = 'block'
      }
    }
    window.addEventListener('scroll',handleScroll)
    return () =>{
      document.removeEventListener('scroll',handleScroll)
    }
  },[])
  return (
    // <></>
    <nav class="navbar navbar-expand-sm">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img className='logo' src={imgLogo}></img>
          <img className='logoBlack' src={logoBlack}></img>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="dich-vu"> Đặt dịch vụ</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="trai-nghiem-vinpearl">Trải Nghiệm Vinpearl</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="uu-dai">Ưu đãi khuyến mãi</Link>
            </li>    
            <li class="nav-item">
              <Link class="nav-link" to="pearl-club">Pearl Club</Link>
            </li>  
          </ul>
          <div className='navbar-right'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <button className='btn-login'>Đăng nhập</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
