import React from 'react';
import About from '../home/about/About';
import Blog from '../home/blog/Blog';
import Branding from '../home/Branding';
import Footer from '../home/Footer';
import Services from '../home/services/Services';
import Skill from '../home/Skill';
import Work from '../home/work/Work';
import Wrapper from '../home/Wrapper';
import WrapperOne from '../home/WrapperOne';
import Home from './../home/homes/Home';
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <Home />
      <Branding />
      <About />
      <Services />
      <Wrapper />
      <Skill />
      <WrapperOne />
      <Work />
      <Blog />
    </>
  )
}

export default HomePage;