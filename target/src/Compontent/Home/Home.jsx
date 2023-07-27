import React from 'react'
import { Helmet } from 'react-helmet';
import IntroHome from "./../../assets/Home/IntroHome.png";
import portfolio1 from '../../assets/Home/image-28.png';
import portfolio2 from '../../assets/Home/image-29.png';
import portfolio3 from '../../assets/Home/image-30.png';
import style from './Home.module.css';
import Footer from '../../Compontent/Footer/Footer';
import Slider from "react-slick";
import arrow from '../../assets/Home/arrow.png';
import Pluse from '../../assets/Home/Pluse.png';
import { NavLink } from 'react-router-dom';


export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
      <div className='pt-5'>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Home" />
          <title>Home</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div>

          {/* whoWeAre  / introHome*/}
          <div className={`${style.WhoeWeArw} `}>
            <div className={` container-fluid`}>
              <div className="row">
                <div className="col-md-12 col-lg-6 px-0 ">
                  <div className={`${style.contentText}  d-flex align-items-center h-100`}>
                    <div className='w-75 mx-auto '>
                      <div className="contentText">
                        <h1>Build Your Awesome Platform</h1>
                        <p>Target studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
                        <NavLink className='nav-link' aria-current="page" to='/services'>
                        <button className={`${style.bttn} rounded-2 border-0`}>Our Services</button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className={`${style.contentImg}  d-flex justify-content-center align-items-center`}>
                    <img src={IntroHome} className='w-100 ' alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="container">

            {/* why goldenBox */}
            <div className="row my-5 pt-5">
              <div className="col-md-6  ">
                <div className="contentText text-white">
                  <h1 className=' w-100 text-black'>Why Target Is The Best Choice?</h1>
                </div>
              </div>

              <div className="col-md-6 ">
                <div className="contentImg text-white">
                  <p className='text-black w-75'>Watch this one minute video so you understand why you should use our services!</p>
                </div>
              </div>
            </div>

            {/* vedio */}
            <div className="row my-5">
              <div className="col-md-12   ">
                <div className="contentText">
                <iframe  width="100%" height="400" src="https://www.youtube.com/embed/w7xZl0N9ey8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
            </div>

            {/* Service */}
            <div className="row my-5">
              <h1 className={`${style.Titlee} text-center text-black my-3 mb-5 w-75 m-auto pt-5 ms-5 `}><img src={arrow} className={`${style.arrow}`} alt="..." />The Service We Provide For You </h1>
              <span><img src={Pluse} className={`${style.Pluse}`} alt="..." /></span>
              <div className={`${style.services}`}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4  ">
                      <div className="content text-center text-white">
                        <div className={`${style.serchIcon} m-auto my-3 d-flex align-items-center justify-content-center `}>
                          {/* <i className=" fa-2xl  my-3 fa-solid fa-magnifying-glass"></i> */}
                          <i className="fa-sharp fa-xl  fa-solid fa-code"></i>
                        </div>
                        <h3 className={`${style.TITLE} py-2 `} >Development</h3>
                        <p className='text-muted'>Create a platform with the best and coolest quality from us.</p>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="content text-center text-white">
                        <div className={`${style.capIcon} m-auto my-3 d-flex align-items-center justify-content-center `}>
                        <i class="fa-xl fa-solid fa-layer-group"></i>                      
                        </div>
                        <h3 className={`${style.TITLE} py-2 `} >UI/UX Designer</h3>
                        <p className='text-muted'>We provide UI/UX Design services, and of course with the best quality.</p>
                      </div>
                    </div>
                    <div className="col-md-4  ">
                      <div className="content text-center text-white">
                        <div className={`${style.medalIcon} m-auto my-3 d-flex align-items-center justify-content-center `}>
                        <i class="fa-sharp fa-xl  fa-solid fa-code"></i>
                        </div>
                        <h3 className={`${style.TITLE} py-2 `} >Graphik Designer</h3>
                        <p className='text-muted'>We provide Graphic Design services, with the best designers</p>
                      </div>
                    </div>
                    <div className="col-md-4  ">
                      <div className="content text-center text-white">
                        <div className={`${style.medalIcon} m-auto my-3 d-flex align-items-center justify-content-center `}>
                          {/* <i className=" fa-2xl  my-3 fa-solid fa-magnifying-glass"></i> */}
                          <i className="fa-sharp fa-xl  fa-solid fa-code"></i>
                        </div>
                        <h3 className={`${style.TITLE} py-2 `} >Motion Graphik</h3>
                        <p className='text-muted'>Create a platform with the best and coolest quality from us.</p>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="content text-center text-white">
                        <div className={`${style.serchIcon} m-auto my-3 d-flex align-items-center justify-content-center `}>
                        <i class="fa-xl fa-solid fa-camera "></i>                      
                        </div>
                        <h3 className={`${style.TITLE} py-2 `} >Photography</h3>
                        <p className='text-muted'>We provide UI/UX Design services, and of course with the best quality.</p>
                      </div>
                    </div>
                    <div className="col-md-4  ">
                      <div className="content text-center text-white">
                        <div className={`${style.capIcon} m-auto my-3 d-flex align-items-center justify-content-center `}>
                        <i class="fa-sharp fa-xl  fa-solid fa-video-camera"></i>
                        </div>
                        <h3 className={`${style.TITLE} py-2 `} >Videography</h3>
                        <p className='text-muted'>We provide Graphic Design services, with the best designers</p>
                      </div>
                    </div>
                    <NavLink className='nav-link' aria-current="page" to='servicesdetails'>
               <button className={`${style.btttn} rounded-2 border-0  mt-5 `}>Show more</button>
               </NavLink>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Our Awesome Portofolio */}
          <div  className={`${style.contt1} container `}>
            <h1 className={`${style.Titlel}  text-black mt-5 pt-5 `}> Our Awesome Portofolio</h1>
            <div className='py-5 mb-5 '>
              <Slider {...settings} >
              <NavLink className='nav-link' aria-current="page" to='sliderdetails'>
               <div className="card bg-transparent border-0 " >
               <img src={portfolio1} className="card-img-top w-100 " alt="..." />
                 </div>
                </NavLink>

                <NavLink className='nav-link' aria-current="page" to='sliderdetails'>
                <div className="card bg-transparent border-0" >
                  <img src={portfolio2} className="card-img-top w-100 mt-2" alt="..." />
                </div>
                </NavLink>


                <NavLink className='nav-link' aria-current="page" to='sliderdetails'>
                <div className="card bg-transparent border-0" >
                  <img src={portfolio3} className="card-img-top w-100 mt-4" alt="..." />
                </div>
                </NavLink>

                <NavLink className= 'nav-link' aria-current="page" to='sliderdetails'>
                <div className="card bg-transparent border-0" >
                  <img src={portfolio1} className="card-img-top w-100 mt-5" alt="..." />
                </div>
                </NavLink>

              </Slider>
            </div>

            <NavLink className= 'nav-link' aria-current="page" to='portofoliodetails'>
            <button className={`${style.bttnn} rounded-2 border-0  `}>Show more</button>
            </NavLink>
            
          </div>

          {/* footer */}
          <Footer />
</div>
</div>
    </>
  )
}
