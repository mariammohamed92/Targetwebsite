import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer'
import style from './ProjectsDetails.module.css'

export default function ServicesDetails() {

  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>ProjectsDetails</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className=  'container' >
            <div className=' row'>
             <h1 className={`${style.Title} `}>ProjectsDetails</h1>
                </div>
                </div>

    {/* footer */}
<Footer />
  </>
}