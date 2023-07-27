import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer'
import style from './ButtonprojectDetails.module.css'

export default function ButtonprojectDetails() {

  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>ButtonprojectDetails</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className=  'container' >
            <div className=' row'>
             <h1 className={`${style.Title} `}>ButtonprojectDetails</h1>

                </div>
                </div>

    {/* footer */}
<Footer />
  </>
}



         
