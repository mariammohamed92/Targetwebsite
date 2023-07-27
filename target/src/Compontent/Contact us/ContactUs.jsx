import React from 'react'
import style from './ContactUs.module.css'
import { Helmet } from 'react-helmet';


export default function ContactUs() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>Contact</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className={`${style.contact} py-5`}>

                <h1 className='b text-center pt-5 mb-1 text-danger'>Contact Us</h1>

                <div className={`${style.bg} pb-4 mt-5 pt-0 px-5`}>
                    <div className={`${style.container}`}>
                        <div className="h-100">
                            <form action="" className='' >
                                <div className='my-3'>
                                    <label htmlFor="name" className='py-1'>Name</label>
                                    <input type="text" name="" id="name" className={`form-control ${style.customFormControl}`} placeholder='Name' />
                                </div>

                                <div className="my-3">
                                    <label htmlFor="email" className='py-1'>Email Adress</label>
                                    <input type="text" name="" id="email" className={`form-control ${style.customFormControl}`} placeholder='Email' />
                                </div>

                                <div className="my-3">
                                    <label htmlFor="message" className='py-1'>Message</label>
                                    <textarea name="" id="message" cols="30" rows="6" className={`form-control ${style.customFormControl}`} placeholder='Placeholder' ></textarea>
                                </div>

                                <button className={`${style.btn} btn btn-primary form-control`}>Send Message</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
