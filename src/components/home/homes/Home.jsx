import React from 'react';
import home from './../../../img/home.png'

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src={home} alt="home-man" />
            </div>
          </div>
          <div className="right topMargin">
            <h1>I AM A <br /> WEB DESIGNER</h1>
            <div className="socialIcon">
              <i className="fab fa-facebook-f facebook"></i>
              <i className="fab fa-instagram instagram"></i>
              <i className="fab fa-twitter twitter"></i>
              <i className="fab fa-telegram telegram"></i>
              <i className="fab fa-vk vk"></i>
              <i className="fab fa-youtube youtube"></i>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut similique provident enim ipsam ullam maiores omnis consectetur, voluptatum deserunt, quasi veniam cum tempore vero doloribus soluta eaque sapiente doloremque cupiditate! Deleniti repellat blanditiis nam iure, atque deserunt quibusdam qui pariatur eligendi labore voluptate quaerat praesentium iste omnis. Consectetur, beatae fugiat.</p>
            <button className="primary-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;