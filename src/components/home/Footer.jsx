import React from 'react';
import logo from './../../img/logo-foot.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid1">
          <div className="box">
            <img src={logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a recusandae quisquam, deleniti hic eius ea adipisci aspernatur qui, possimus esse ullam tempora blanditiis soluta sed, nostrum nulla fugit sequi est odio expedita magnam ut. Similique quaerat dolor minus enim doloremque voluptatum cum a molestias!</p>
            <div className="socialIcon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram "></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-telegram"></i>
              <i className="fab fa-vk"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
          <div className="box">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="box">
            <h2>Recent Post</h2>
            <div className="text">
              <p>The Most Popular New top Business Apps</p>
              <span>26 Feb, 2019</span>
              <p>The Best Marketing top Management Tools</p>
              <span>27 Feb, 2019</span>
              <p>3 WooCommerce Plugins to Boost Sales</p>
              <span>28 Feb 2022</span>
            </div>
          </div>
          <div className="box">
            <h2>Get in Touch</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ad inventore, blanditiis neque necessitatibus nesciunt corrupti molestias voluptatum molestiae repellendus.</p>
            <div className="icon">
              <i className='fa fa-location-dot'></i>
              <label htmlFor="">Location: 27 Division St, New York</label>
            </div>
            <div className="icon">
              <i className="fa fa-phone"></i>
              <label htmlFor="">Phone: +1490 83827 34898</label>
            </div>
            <div className="icon">
              <i className="fa fa-envelope"></i>
              <label htmlFor="">Email: kuuk@mail.com</label>
            </div>
          </div>
        </div>
        <div className="legal container">
          <p>@2022. I`ll be back</p>
        </div>
      </footer>
    </>
  )
}

export default Footer