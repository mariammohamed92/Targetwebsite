import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer'
import style from './ServicesDetails.module.css'

export default function ServicesDetails() {

  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>ServicesDetails</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className=  'container' >
            <div className=' row'>
             <h1 className={`${style.Title} `}>ServicesDetails</h1>
                </div>
                </div>

    {/* footer */}
<Footer />
  </>
}