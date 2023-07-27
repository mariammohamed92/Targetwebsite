import React from 'react'
import { Helmet } from 'react-helmet';
import Rectangle1 from './../../Images/Services/Rectangle 1.png';
import Rectangle2 from './../../Images/Services/Rectangle 2.png';
import Rectangle3 from './../../Images/Services/Rectangle 3.png';
import Rectangle4 from './../../Images/Services/Rectangle 4.png';
import Rectangle5 from './../../Images/Services/Rectangle 5.png';
import Rectangle6 from './../../Images/Services/Rectangle 6.png';
import Rectangle7 from './../../Images/Services/Rectangle 7.png';
import Rectangle8 from './../../Images/Services/Rectangle 8.png';
import style from './Services.module.css'
import Footer from "../../Compontent/Footer/Footer";
import Vector1 from './../../assets/Services/Vector.png';
import Rec from './../../assets/Services/Rec.png';
import add from './../../assets/Services/add.png';
import Elp from './../../assets/Services/Elp.png';
import icon from './../../assets/Services/Icon.png';
import { NavLink } from 'react-router-dom';


export default function Services() {
  return <>
    <div className='pt-5 mt-5'>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Home" />
        <title>Services</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>


      <div  className= 'container' >
   
      <img src={Vector1} alt="logo" className={`${style.Vectorr1} `} />

        <div className="row gx-5">
              <div className={`${style.conttext} row `}>
          <div className= 'col-md-6 col-sm-12 col-xl-6 col-xxl-6' >
            <img src={Rectangle1} alt="logo" className={`${style.Photo1} w-100 border-1 ms-3 `} />

          </div>
          <div className=  'col-md-6 col-sm-12 col-xl-6 col-xxl-6' >
            <h5 className={`${style.Text1}   text-black  ms-3`}>1. Big Data & Business Analytics</h5>
            <p className={`${style.Prg} text-black ms-3`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            <NavLink className='nav-link' aria-current="page" to='/readmoredetails' >
            <button className={`${style.Read} rounded-3  border-0 ms-3 `}>Read more</button> 
            </NavLink>          </div>
</div>
              <img src={Rec} alt="logo" className={`${style.Rec} `} />

                <div className={`${style.conttext} row `}>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <h5 className={`${style.Text} mt-5 text-black ms-3 `}>2. IoT/ AI/ Robotics</h5>
            <p className={`${style.Prg} text-black ms-3 `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            <NavLink className='nav-link' aria-current="page" to='/readmoredetails' >
            <button className={`${style.Read} rounded-3  border-0  ms-3 `}>Read more</button> 
            </NavLink>
          </div>

          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle2} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 ms-3 `} />
          </div>
           </div>
           <img src={add} alt="logo" className={`${style.add} `} />

          <div className={`${style.conttext} row `}>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle3} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 ms-3 `} />
          </div>

          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5 text-black ms-3 `}>3. Game Development and AR/VR</h5>
            <p className={`${style.Prg} text-black ms-3 `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            <NavLink className='nav-link' aria-current="page" to='/readmoredetails' >
            <button className={`${style.Read} rounded-3  border-0 ms-3 `}>Read more</button> 
            </NavLink>          </div>
         </div>
         <img src={Elp} alt="logo" className={`${style.Elp}  `} />

         <div className={`${style.conttext} row `}>
          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5 text-black ms-3 `}>4. Web and Software Development</h5>
            <p className={`${style.Prg} text-black ms-3 `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            <NavLink className='nav-link' aria-current="page" to='/readmoredetails' >
            <button className={`${style.Read} rounded-3  border-0 ms-3 `}>Read more</button> 
            </NavLink>          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle4} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 ms-3 `} />
          </div>
          </div>
          <img src={icon} alt="logo" className={`${style.icon} `} />

          <div className={`${style.conttext} row `}>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle5} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 ms-3 `} />
          </div>
          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5 text-black ms-3 `}>5. Mobile Application Development</h5>
            <p className={`${style.Prg} text-black ms-3 `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            <NavLink className='nav-link' aria-current="page" to='/readmoredetails' >
            <button className={`${style.Read} rounded-3  border-0 ms-3 `}>Read more</button> 
            </NavLink>          </div>
           </div>
           <img src={Elp} alt="logo" className={`${style.Elp} `} />

           <div className={`${style.conttext} row `}>
          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5 text-black ms-3 `}>6.SEO</h5>
            <p className={`${style.Prg} text-black ms-3 `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            <NavLink className='nav-link' aria-current="page" to='/readmoredetails' >
            <button className={`${style.Read} rounded-3  border-0 ms-3 `}>Read more</button> 
            </NavLink>          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle6} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 ms-3 `} />
          </div>
           </div>
           <img src={Vector1} alt="logo" className={`${style.Vectorr1} `} />

           <div className={`${style.conttext} row `}>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle7} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 ms-3 `} />
          </div>
          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5 text-black ms-3 `}>7. Digital Marketing</h5>
            <p className={`${style.Prg} text-black ms-3 `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            <NavLink className='nav-link' aria-current="page" to='/readmoredetails' >
            <button className={`${style.Read} rounded-3  border-0 ms-3  `}>Read more</button> 
            </NavLink>          </div>
           </div>
           <img src={Elp} alt="logo" className={`${style.Elp} `} />

           <div className={`${style.conttext} row `}>
          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5 text-black ms-3`}>8. Cyber Security</h5>
            <p className={`${style.Prg} text-black ms-3 `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            <NavLink className='nav-link' aria-current="page" to='/readmoredetails' >
            <button className={`${style.Read} rounded-3  border-0 ms-3 `}>Read more</button> 
            </NavLink>
          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle8} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 ms-3 `} />
          </div>
          </div>
        </div>

      </div>
      <div className='mt-5 pt-5'>
      <Footer/>
      </div>
    </div>
  </>
}
