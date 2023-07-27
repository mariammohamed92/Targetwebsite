import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer'
import style from './ReadmoreDetails.module.css'

export default function ReadmoreDetails() {
 
  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>ReadmoreDetails</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    
            <div className=  'container' >
            <div className=' row'>
             <h1 className={`${style.Title} `}>ReadmoreDetails</h1>
                </div>
                </div>

    {/* footer */}
<Footer />
  </>
}