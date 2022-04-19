import { KeyboardDoubleArrowRight } from '@mui/icons-material';
import React from 'react';
import BlogData from './BlogData';

const Blog = () => {
  return (
    <>
      <section className="blog services">
        <div className="container topMargin">
          <div className="heading">
            <h3>LATEST BLOG</h3>
            <h1>Read Inspirational Story Every Week</h1>
          </div>
          <div className="contain grid topMargin">
            {BlogData.map((value) => {
              return (
                <>
                  <div className="box">
                    <div className="img">
                      <img src={value.cover} alt="" />
                    </div>
                    <div className="text">
                      <span>{value.date}</span>
                      <h2>{value.title}</h2>
                      <div className="link">
                        <a href="/">
                          Read More
                        </a>
                        <a href="/">
                          <KeyboardDoubleArrowRight className="icon" />
                        </a>
                      </div>

                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog