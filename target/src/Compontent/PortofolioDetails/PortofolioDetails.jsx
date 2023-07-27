import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer'
import style from './PortofolioDetails.module.css'

export default function PortofolioDetails() {

  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>portofoliodetails</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className=  'container' >
            <div className=' row'>
             <h1 className={`${style.Title} `}>PortofolioDetails</h1>
                </div>
                </div>

    {/* footer */}
<Footer />
  </>
}