import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer'
import portfolio1 from '../../assets/Home/work-1.jpg'
import portfolio2 from '../../assets/Home/work-2.jpg'
import portfolio3 from '../../assets/Home/work-3.jpg'
import style from './SliderDetails.module.css'

export default function SliderDetails() {

  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>SliderDetails</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className= {`${style.card1} container`} >
            <div className=' row'>
          
             <h1 className={`${style.Title} `}>ReadmoreDetails</h1>
                
                <div className="card bg-transparent border-0 col-md-4 " >
               <img src={portfolio1} className= 'card-img-top w-100  ' alt="..." />
                </div>

                <div className="card bg-transparent border-0 col-md-4" >
                <img src={portfolio2} className= 'card-img-top w-100 ' alt="..." />

                </div>

                <div className="card bg-transparent border-0 col-md-4" >
                <img src={portfolio3} className= 'card-img-top w-100  ' alt="..." />
                </div>
                </div>
                </div>

    {/* footer */}
<Footer />
  </>
}
