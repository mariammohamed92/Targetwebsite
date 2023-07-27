import React, { useState } from 'react';
import photo from './../../Images/Sin/Character.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Joi from 'joi';
import { Helmet } from 'react-helmet';
import style from './Register.module.css';


export default function Register() {

    let navigate = useNavigate();
    const [errorList, seterrorList] = useState([])
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    })
    function getUserDate(eventInfo) {
        let myUser = { ...user };
        myUser[eventInfo.target.name] = eventInfo.target.value;
        setUser(myUser);
        console.log(myUser);
    }

    async function sendRegisterDateToApi() {
        let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signup`, user);
        if (data.message === 'success') {
            setisLoading(false);
            navigate('/login');
        }
        else {
            setisLoading(false);
            setError(data.message)
        }
    }
    function submitRegisterForm(e) {
        e.preventDefault();
        setisLoading(true);
        let validation = validateRegisterForm();
        if (validation.error) {
            setisLoading(false);
            seterrorList(validation.error.details)
        }
        else {
            sendRegisterDateToApi();

        }
    }
    function validateRegisterForm() {
        let scheme = Joi.object({
            first_name: Joi.string().pattern(/^[A-Z]/).min(3).max(10).required(),
            last_name: Joi.string().min(3).max(10).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().pattern(/^[A-Z][a-z]{3,10}/),

        });
        return scheme.validate(user, { abortEarly: false });
    }
    return (
        <>
        <div className='pt-5'>
        <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>Register Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="container my-5 py-5">
                <div className="row">

                    <div className="col-md-12 bg-register-image  col-sm-12 col-xxl-7 col-xl-7 col-lg-7">
                        <h1 className={`${style.Title}`}>Designed for a</h1>
                        <h1 className={`${style.Title}`}>more interesting</h1>
                        <h1 className={`${style.Title}`}>world</h1>
                        <div className='row'>
                            <div className='col-md-3 mt-5'>
                                <h6 className={`${style.prg}`}>if you have an account  </h6>
                                <h6 className={`${style.prg}`}>you can </h6>
                                <Link className={`${style.acon} ms-2 text-danger text-decoration-none `} to="/login">Login here! </Link>
                            </div>
                            <div className='col-md-5'>
                                <img src={photo} alt="photo" className='w-100 bg-opacity' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 bg-register-image  col-sm-12 col-xxl-4 col-xl-4 col-lg-4  ">

                        {
                            errorList.map((err, index) => {
                                if (err.context.label === 'password') {
                                    return <div key={index} className=" alert alert-danger my-2">The password must start with a capital letter and be between 3 and 10 characters long </div>
                                }
                                else {
                                    return <div key={index} className=" alert alert-danger my-2">{err.message}</div>

                                }
                            })
                        }


                        {error ? (<div className=' alert alert-danger my-2'>{error}</div>) : ("")}

                        <form onSubmit={submitRegisterForm}>

                            <label htmlFor='first_name' className={`${style.Sign}`} >First-name :</label>
                            <input onChange={getUserDate} type="text" className=' form-control my-input my-2' name="first_name" id="first_name"></input>
                            <label htmlFor='last_name' className={`${style.Sign}`}>Last-name :</label>
                            <input onChange={getUserDate} type="text" className=' form-control my-input my-2' name="last_name" id="last_name"></input>
                            <label htmlFor='email' className={`${style.Sign}`} >Email:</label>
                            <input onChange={getUserDate} type="email" className=' form-control my-input my-2' name="email" id="email"></input>
                            <label htmlFor='password' className={`${style.Sign}`} >Password :</label>
                            <input onChange={getUserDate} type="password" className=' form-control my-input my-1' name="password" id="password"></input>
                            <p className="text-black small text-center  mt-3">
                                <input value="register" name="gender" type="checkbox" className=' me-2' />
                                By creating an account you agree to the
                                <p className=' text-black'> <a className=" text-danger mx-1" href="https://policies.google.com/terms">terms of use</a>
                                    and our
                                    <a className="text-danger mx-1" href="https://policies.google.com/privacy" > Privacy Policy</a>
                                </p>
                            </p>
                            <button type='submit' className={`${style.btn} btn btn-danger text-white  w-100 mb-3 py-2 `} >{isLoading === true ? <i className=' fas fa-spinner fa-spin'></i> : 'Register'}</button>
                            <div className=' row mt-4'>
                                <div className=' col-3'>
                                    <hr className=" w-100" />
                                </div>
                                <div className=' col-6'>
                                    <p className=' text-danger text-center'>Or continue with</p>
                                </div>
                                <div className=' col-3'>
                                    <hr className="  w-100" />
                                </div>
                            </div>
                            <div className=' row mt-4'>
                                <div className=' col-md-1'></div>
                                <div className=' col-4 '>
                                    <button className=' btn btn-outline-danger  rounded-3 ms-5'> <i className=' fab mx-1 fa-google icon '></i></button>
                                </div>
                                <div className=' col-3'>
                                    <button className=' btn btn-outline-danger rounded-3 '><i className=' fab mx-1 fa-apple icon1'></i></button>
                                </div>
                                <div className='col-3 '>
                                    <button className=' btn btn-outline-danger rounded-3 '> <i className=' fab mx-1 fa-facebook icon2'></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

