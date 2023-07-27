import React from 'react'
import { Helmet } from 'react-helmet';
import style from './AboutUs.module.css'
import intro from '../../assets/About/intro.png'
import slider1 from '../../assets/About/slider1.png'
import slider2 from '../../assets/About/slider2.png'
import slider3 from '../../assets/About/slider3.png'
import partner from '../../assets/About/parteners.png'
import partner2 from '../../assets/About/partner2.png'
import partner3 from '../../assets/About/partner3.png'
import doublecircle from '../../assets/About/doublecircle.png'
import Target from '../../assets/Home/Group.png';
import { NavLink } from 'react-router-dom';

import Slider from "react-slick";
import Footer from '../Footer/Footer'


export default function AboutUs() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>About</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className={`${style.about} pt-3`}>

                {/* whoWeAre */}
                <div className={`${style.WhoeWeArw} pt-3`}>
                    <div className={` container-fluid`}>
                        <div className="row">
                            <div className="col-md-12 col-lg-6 px-0">
                                <div className={`${style.contentText}  d-flex align-items-center h-100`}>
                                    <div className='w-75 mx-auto '>
                                        <h1 className=' text-black'>Who <span>we are....</span></h1>
                                        <p  className=' text-black' >Target ,we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with various sets of skill sets varies from Digital Marketing. We have our dedicated team for your project which uses various methods such as Agile Scrum & Agile Kanban. We ensure top-notch quality, on-time delivery, and agility for your project.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className={`${style.contentImg}   d-flex justify-content-center align-items-center`}>
                                    <img src={intro} className='w-75 ' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* slider /// meet */}
                <div className={`${style.meet}  my-5`}>
                    <div className={`${style.content}  py-5`}>
                        <h1 className='w-100 pb-4'>Meet our team</h1>

                        <div>
                        <div>
        <Slider {...settings}>
          <div>
          <div className={`${style.box} card box-work  bg-transparent border-0 `} >
                                <div className={`${style.portitem}`}>
                                    <img src={slider2} className="card-img-top w-100 text-success" alt="..." />
                                    <div className={`${style.imglayer}`}>
                                            <div className={`${style.imginfo}`}>
                                                <h6>Target</h6>
                                                <div  className={`${style.iconport}`}>
                                                    <span>
                                                        <NavLink to="https://www.google.com/search?q=instagram&oq=inst&aqs=chrome.1.69i57j0i131i433i512l3j0i433i512j0i512j0i131i433i512j46i199i465i512j0i131i433i512j0i271.3044j0j15&sourceid=chrome&ie=UTF-8">
                                                            <i  className= 'fab mx-1 fa-instagram' ></i>  
                                                          </NavLink>
                                                        <NavLink to="https://www.google.com/search?q=twitter&oq=tw&aqs=chrome.1.69i57j0i271l3.2326j0j15&sourceid=chrome&ie=UTF-8">
                                                        <i className=' fab mx-1 fa-twitter  '></i>  
                                                        </NavLink> 
                                                        <NavLink to="https://www.google.com/search?q=%D9%81%D9%8A%D8%B3+%D8%A8%D9%88%D9%83&oq=&aqs=chrome.2.35i39i362l4j46i39i199i362i465j35i39i362l3.3945055634j0j15&sourceid=chrome&ie=UTF-8">
                                                        <i className=' fab mx-1 fa-facebook '></i>                                                        </NavLink>
                                                           </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    <div className="w-75">
                                        <p className='text-black px-2 py-2 my-2'>Lorem Ipsum is simply dummy text of the printing and typesettin </p>
                                        <h6 className='text-black px-2 my-0'>(UI UX Designer) <span className=''>Abdallah Adel</span></h6>
                                </div>
                                </div>
                             </div>
          <div>
          <div className={`${style.box} card box-work  bg-transparent border-0 `} >
                                <div className={`${style.portitem}`}>
                                    <img src={slider1} className="card-img-top w-100 text-success" alt="..." />
                                    <div className={`${style.imglayer}`}>
                                            <div className={`${style.imginfo}`}>
                                                <h6>Target</h6>
                                                <div  className={`${style.iconport}`}>
                                                    <span>
                                                        <NavLink to="https://www.google.com/search?q=instagram&oq=inst&aqs=chrome.1.69i57j0i131i433i512l3j0i433i512j0i512j0i131i433i512j46i199i465i512j0i131i433i512j0i271.3044j0j15&sourceid=chrome&ie=UTF-8">
                                                            <i  className= 'fab mx-1 fa-instagram' ></i>  
                                                          </NavLink>
                                                        <NavLink to="https://www.google.com/search?q=twitter&oq=tw&aqs=chrome.1.69i57j0i271l3.2326j0j15&sourceid=chrome&ie=UTF-8">
                                                        <i className=' fab mx-1 fa-twitter  '></i>  
                                                        </NavLink> 
                                                        <NavLink to="https://www.google.com/search?q=%D9%81%D9%8A%D8%B3+%D8%A8%D9%88%D9%83&oq=&aqs=chrome.2.35i39i362l4j46i39i199i362i465j35i39i362l3.3945055634j0j15&sourceid=chrome&ie=UTF-8">
                                                        <i className=' fab mx-1 fa-facebook '></i>                                                        </NavLink>
                                                               </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                 <div className="w-75">
                                        <p className='text-black px-2 py-2 my-2'>Lorem Ipsum is simply dummy text of the printing and typesettin </p>
                                        <h6 className='text-black px-2 my-0'>(UI/UX Designer) <span className=''>Hussein Sawalhi</span></h6>
                                    </div>
                                </div>         
                                 </div>
          <div>

          <div className={`${style.box} card box-work  bg-transparent border-0 `} >
                                <div className={`${style.portitem}`}>
                                    <img src={slider3} className="card-img-top w-100 text-success" alt="..." />
                                    <div className={`${style.imglayer}`}>
                                            <div className={`${style.imginfo}`}>
                                                <h6>Target</h6>
                                                <div  className={`${style.iconport}`}>
                                                    <span>
                                                        <NavLink to="https://www.google.com/search?q=instagram&oq=inst&aqs=chrome.1.69i57j0i131i433i512l3j0i433i512j0i512j0i131i433i512j46i199i465i512j0i131i433i512j0i271.3044j0j15&sourceid=chrome&ie=UTF-8">
                                                            <i  className= 'fab mx-1 fa-instagram' ></i>  
                                                          </NavLink>
                                                        <NavLink to="https://www.google.com/search?q=twitter&oq=tw&aqs=chrome.1.69i57j0i271l3.2326j0j15&sourceid=chrome&ie=UTF-8">
                                                        <i className=' fab mx-1 fa-twitter  '></i>  
                                                        </NavLink> 
                                                        <NavLink to="https://www.google.com/search?q=%D9%81%D9%8A%D8%B3+%D8%A8%D9%88%D9%83&oq=&aqs=chrome.2.35i39i362l4j46i39i199i362i465j35i39i362l3.3945055634j0j15&sourceid=chrome&ie=UTF-8">
                                                        <i className=' fab mx-1 fa-facebook '></i>                                                        </NavLink>
                                                             </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>   
                                    <div className="w-75">
                                        <p className='text-black px-2 py-2 my-2'>Lorem Ipsum is simply dummy text of the printing and typesettin </p>
                                        <h6 className='text-black px-2 my-0'>(UI/UX Designer) <span className=''>Abdallah Adel</span></h6>
                                    </div>
                                </div>        
                                  </div>
          <div>
          <div className={`${style.box} card box-work  bg-transparent border-0 `} >
                                <div className={`${style.portitem}`}>
                                    <img src={slider2} className="card-img-top w-100 text-success" alt="..." />
                                    <div className={`${style.imglayer}`}>
                                            <div className={`${style.imginfo}`}>
                                                <h6>Target</h6>
                                                <div  className={`${style.iconport}`}>
                                                    <span>
                                                        <NavLink to="https://www.google.com/search?q=instagram&oq=inst&aqs=chrome.1.69i57j0i131i433i512l3j0i433i512j0i512j0i131i433i512j46i199i465i512j0i131i433i512j0i271.3044j0j15&sourceid=chrome&ie=UTF-8">
                                                            <i  className= 'fab mx-1 fa-instagram' ></i>  
                                                          </NavLink>
                                                        <NavLink to="https://www.google.com/search?q=twitter&oq=tw&aqs=chrome.1.69i57j0i271l3.2326j0j15&sourceid=chrome&ie=UTF-8">
                                                        <i className=' fab mx-1 fa-twitter  '></i>  
                                                        </NavLink> 
                                                        <NavLink to="https://www.google.com/search?q=%D9%81%D9%8A%D8%B3+%D8%A8%D9%88%D9%83&oq=&aqs=chrome.2.35i39i362l4j46i39i199i362i465j35i39i362l3.3945055634j0j15&sourceid=chrome&ie=UTF-8">
                                                        <i className=' fab mx-1 fa-facebook '></i>                                                        </NavLink>
                                                           </span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>   <div className="w-75">
                                        <p className='text-black px-2 py-2 my-2'>Lorem Ipsum is simply dummy text of the printing and typesettin </p>
                                        <h6 className='text-black px-2 my-0'>(UI / UX Designer) <span className=''>Abdallah Adel</span></h6>
                                    </div>
                                </div>        
                                  </div>
         
        </Slider>
      </div>
                

                        </div>
                    </div>
                </div>

                {/* engaged section */}
                <div className={`${style.engaged} py-5 position-relative`}>
                    <i className="fa-solid fa-xmark  position-absolute"></i>
                    <img src={doublecircle} className={style.doublecircle} alt="" />
                    <div className={`${style.content} container text-center`}>
                        <h1 className='py-2'>Who we are engaged with...</h1>
                        <p className='py-2'>We partner with humble, trusting leaders that think strategically. Businessmen and women who believe in the change they’re making, embrace their mission and want to bring in a partner to accelerate their growth.</p>
                    </div>

                    <div className="container w-75 my-5" >
                        <div className="partner">
                            <div class="row gy-5 gx-2 justify-content-center align-items-center">

                                <div class="col-lg-3 col-md-6">
                                    <img src={partner} className='w-100' alt="" />
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <img src={partner2} className='w-100' alt="" />
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <img src={partner3} className='w-100' alt="" />
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <img src={partner2} className='w-100' alt="" />
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <img src={partner} className='w-100' alt="" />
                                </div>


                            </div>

                        </div>
                    </div>

                </div>

                {/* footer */}
                <Footer />


            </div>

        </>
    )
}
