import React from 'react';
import data from './Data';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import IosShareIcon from '@mui/icons-material/IosShare';

const Work = () => {
  return (
    <>
      <section className="work">
        <div className="heading">
          <h3>MY WORKS</h3>
          <h1>Some of My Competed Projects</h1>
        </div>
          <div className="content">
            {data.map((value) => {
              return (
                <>
                  <div className="box">
                    <div className="img">
                      <img src={value.cover} alt="image" />
                    </div>
                    <div className="overlay">
                      <div className="text">
                        <h2>{value.title}</h2>
                        <p>{value.desc}</p>
                      </div>
                      <div className="icon">
                        <FullscreenIcon className='iconWork' />
                        <IosShareIcon className='iconWork' />
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
      </section>


    </>
  )
}

export default Work

