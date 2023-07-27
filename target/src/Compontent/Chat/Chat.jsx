import React from 'react'
import { Helmet } from 'react-helmet';
import style from './Chat.module.css'
import Ellipse from './../../Images/Chat/Ellipse 105.png';
import Vector from './../../Images/Chat/Vector.png';
import Ellipse1 from './../../Images/Chat/Ellipse 108.png';
import Rectangle from './../../Images/Chat/Rectangle 1507.png';
import Tel from './../../Images/Chat/Tel.png';
import Target from '../../assets/Home/Group.png';


export default function Chat() {
  return <>
    <div className='mt-3 pt-5'>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Home" />
        <title>Chat</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className={`${style.Chat} container mt-5 col-md-6 col-sm-12 col-xl-6 col-xxl-6`}>
        <div>
          <img src={Ellipse} alt="logo" className={`${style.Ellipse} `} />
          <span className={`${style.gold} fa-1x`}> <img src={Target}  alt="Logo" className='d-inline-block align-text-center w-100'  /></span>
          <h6 className={`${style.golden}`}>ChatBot</h6>
          <img src={Vector} className={`${style.Vector} `} />
          <h1 className={`${style.Line}`}></h1>
          <img src={Ellipse} alt="logo" className={`${style.Ellipse1} `} />
          <div className={`${style.div}`}>
            <p className={`${style.prg}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.</p>
          </div>
          <p className={`${style.prg1}`}>10:15 pm</p>
          <img src={Ellipse1} alt="logo" className={`${style.Ellipse2} `} />
          <div className={`${style.div1}`}>
            <p className={`${style.prgg}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. </p>
          </div>
          <p className={`${style.prgg1}`}>12:15 pm</p>
          <img src={Ellipse} alt="logo" className={`${style.Ellipse3} `} />
          <div className={`${style.div2}`}>
            <p className={`${style.prggg}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.</p>
          </div>
          <p className={`${style.prggg1}`}>12:15 pm</p>

          <div className={`${style.div3}`}>
            <p className={`${style.title}`}>Write a message...</p>

            <img src={Rectangle} alt="logo" className={`${style.Rectangle} `} />
            <img src={Tel} alt="logo" className={`${style.Tel} `} />

</div>
        </div>


      </div>
    </div>
  </>
}
