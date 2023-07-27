import React from 'react'
import { Helmet } from 'react-helmet';
import style from './Ourproject.module.css'
import PHOTO1 from './../../Images/Ourproject/Photo1.png';
import PHOTO2 from './../../Images/Ourproject/Photo2.png';
import PHOTO3 from './../../Images/Ourproject/Photo3.png';
import PHOTO4 from './../../Images/Ourproject/Photo4.png';
import PHOTO5 from './../../Images/Ourproject/Photo5.png';
import PHOTO6 from './../../Images/Ourproject/Photo6.png';
import icon from './../../Images/Ourproject/icon.png';
import Footer from "../../Compontent/Footer/Footer";
import Vector1 from './../../assets/Services/Vector.png';
import Rec from './../../assets/Services/Rec.png';
import add from './../../assets/Services/add.png';
import Elp from './../../assets/Services/Elp.png';
import icon1 from './../../assets/Services/Icon.png';
import { NavLink } from 'react-router-dom';


export default function Ourproject() {
  return <>

    <div className='pt-5 mt-5 '>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Home" />
        <title>Projects</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>



      <div className='container'>
      <img src={Vector1} alt="logo" className={`${style.Vectorr1} `} />

        <div className=' row gx-5'>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO1} alt="logo" className='w-100 ms-3 ' />
            <h3 className={`${style.Title} text-black `}>Food Delivery App</h3>
            <p className={`${style.Prg} text-black `}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <NavLink className='nav-link' aria-current="page" to='/projectsdetails'>
            <a className={`${style.acon} text-danger ms-3 `}>View<img src={icon} alt="logo" /></a>
          </NavLink>
           <h1> <img src={Rec} alt="logo" className={`${style.Rec} `} /></h1>
          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO2} alt="logo" className='w-100 ms-3 ' />
            <h3 className={`${style.Title} text-black `}>Service Provider App </h3>
            <p className={`${style.Prg} text-black `}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <NavLink className='nav-link' aria-current="page" to='/projectsdetails'>
            <a className={`${style.acon} text-danger ms-3 `}>View<img src={icon} alt="logo" /></a>
          </NavLink>             
           <h1><img src={add} alt="logo" className={`${style.add} `} /></h1>
          </div>
          
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO3} alt="logo" className='w-100 mt-5 ms-3 ' />
            <h3 className={`${style.Title} text-black `}>Podcast App</h3>
            <p className={`${style.Prg} text-black `}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <NavLink className='nav-link' aria-current="page" to='/projectsdetails'>
            <a className={`${style.acon} text-danger ms-3 `}>View<img src={icon} alt="logo" /></a>
          </NavLink>          
          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO4} alt="logo" className='w-100 mt-5 ms-3 ' />
            <h3 className={`${style.Title} text-black `}>E-Pay App</h3>
            <p className={`${style.Prg} text-black `}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <NavLink className='nav-link' aria-current="page" to='/projectsdetails'>
            <a className={`${style.acon} text-danger ms-3 `}>View<img src={icon} alt="logo" /></a>
          </NavLink>           
            <h1><img src={Elp} alt="logo" className={`${style.Elp} `} /></h1>
          </div>

          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO5} alt="logo" className='w-100 mt-5 ms-3 ' />
            <h3 className={`${style.Title} text-black `}>Travel Website Design</h3>
            <p className={`${style.Prg} text-black `}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <NavLink className='nav-link' aria-current="page" to='/projectsdetails'>
            <a className={`${style.acon} text-danger ms-3 `}>View<img src={icon} alt="logo" /></a>
          </NavLink>           
           <h1> <img src={Rec} alt="logo" className={`${style.Rec} `} /></h1>
          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO6} alt="logo" className='w-100 mt-5 ms-3 ' />
            <h3 className={`${style.Title} text-black `}>Travel Website Design</h3>
            <p className={`${style.Prg}text-black  `}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <NavLink className='nav-link' aria-current="page" to='/projectsdetails'>
            <a className={`${style.acon} text-danger ms-3 `}>View<img src={icon} alt="logo" /></a>
          </NavLink>        
            </div>


          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO5} alt="logo" className='w-100 mt-5 ms-3 ' />
            <h3 className={`${style.Title} text-black `}>Travel Website Design</h3>
            <p className={`${style.Prg} text-black `}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <NavLink className='nav-link' aria-current="page" to='/projectsdetails'>
            <a className={`${style.acon} text-danger ms-3 `}>View<img src={icon} alt="logo" /></a>
          </NavLink>         
           </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO6} alt="logo" className='w-100 mt-5 ms-3 ' />
            <h3 className={`${style.Titlele} text-black`}>Travel Website Design</h3>
            <p className={`${style.Prg} text-black `}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <NavLink className='nav-link' aria-current="page" to='/projectsdetails'>
            <a className={`${style.acon} text-danger ms-3 `}>View<img src={icon} alt="logo" /></a>
          </NavLink>          
            <h1><img src={Elp} alt="logo" className={`${style.Elp} `} /></h1>

          </div>

          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
          <h1><img src={Vector1} alt="logo" className={`${style.Vectorr1} `} /></h1>
            <img src={PHOTO5} alt="logo" className='w-100 mt-5 ms-3 ' />
            <h3 className={`${style.Title} text-black `}>Travel Website Design</h3>
            <p className={`${style.Prg} text-black `}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <NavLink className='nav-link' aria-current="page" to='/projectsdetails'>
            <a className={`${style.acon} text-danger ms-3 `}>View<img src={icon} alt="logo" /></a>
          </NavLink>         
           </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO6} alt="logo" className='w-100 mt-5 ms-3 ' />
            <h3 className={`${style.Title} text-black `}>Travel Website Design</h3>
            <p className={`${style.Prg} text-black `}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <NavLink className='nav-link' aria-current="page" to='/projectsdetails'>
            <a className={`${style.acon} text-danger ms-3 `}>View<img src={icon} alt="logo" /></a>
          </NavLink>      
              </div>
              <NavLink className='nav-link' aria-current="page" to='/buttonprojectdetails'>
          <button className={`${style.bttnn} rounded-2 border-0  mt-5 `}>Show more</button>
          </NavLink>      


        </div>

      </div>

      <div className='mt-5 pt-5'>
        <Footer />
      </div>
    </div>

  </>
}