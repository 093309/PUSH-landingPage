import React from 'react';

const Skill = () => {

  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div
          className="progress-done"
          style={{ opacity: 1, width: `${done}%` }}
        >
        </div>
        <h4>{title}</h4>
        <h4>{done} %</h4>

      </div>
    )
  }

  const data = [
    {
      title: 'Every day is a New Chalenge',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, veniam, aut hic quaerat facilis reprehenderit nesciunt expedita exercitationem voluptatum sunt odio aspernatur. At quod minus asperiores sequi corrupti ea!',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quae, veniam, aut hic quaerat facilis reprehenderit nesciunt expedita exercitationem voluptatum sunt odio aspernatur. At quod minus asperiores sequi corrupti ea!'
    }
  ]

  return (
    <>

      <section className="skill">
        <div className="container">
          <div className="heading">
            <h3>WHY CHOOSE US</h3>
            <h1>Some Of My Skills</h1>
          </div>

          <div className="content flex">
            <div className="left topMargin">
              <Progress done='70' title='HTML' />
              <Progress done='70' title='CSS' />
              <Progress done='50' title='JavaScript' />
              <Progress done='45' title='React' />
            </div>
            <div className="right mtop">
              {data.map((value) => {
                return (
                  <>
                    <h1>{value.title}</h1>
                    <p>{value.para}</p>
                    <p>{value.para}</p>
                    <button className="primary-btn">Hire Me</button>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill