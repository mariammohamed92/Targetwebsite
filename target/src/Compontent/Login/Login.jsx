import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Joi from 'joi';
import photo from './../../Images/Sin/Character.png';
import { Helmet } from 'react-helmet';
import style from './Login.module.css';


export default function Login({ saveUserDate }) {
    let navigate = useNavigate();
    const [errorList, seterrorList] = useState([])
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    function getUserDate(eventInfo) {
        let myUser = { ...user };
        myUser[eventInfo.target.name] = eventInfo.target.value;
        setUser(myUser);
        console.log(myUser);
    }

    async function sendloginDateToApi() {
        let { data } = await axios.post(`https://sticky-note-fe.vercel.app/signin`, user);
        if (data.message === 'success') {
            localStorage.setItem('userToken', data.token);
            saveUserDate();
            setisLoading(false);
            navigate("/");
        }
        else {
            setisLoading(false);
            setError(data.message)
        }
    }
    function submitloginForm(e) {
        e.preventDefault();
        setisLoading(true);
        let validation = validateloginForm();
        if (validation.error) {
            setisLoading(false);
            seterrorList(validation.error.details)
        }
        else {
            sendloginDateToApi();

        }
    }
    function validateloginForm() {
        let scheme = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().pattern(/^[A-Z][a-z]{3,6}/).min(3).max(10).required(),

        });
        return scheme.validate(user, { abortEarly: false });
    }
    return (
        <>
      <div className='pt-5'>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>Login Page</title>
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
                                <Link className={`${style.acon} ms-2 text-danger text-decoration-none `} to="/register">Register here! </Link>
                            </div>
                            <div className='col-md-5'>
                                <img src={photo} alt="photo" className='w-100 bg-opacity ' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 bg-register-image  col-sm-12 col-xxl-4 col-xl-4 col-lg-4">


                        {error.length > 0 ? (
                            <div className=' alert alert-danger my-2'>{error}</div>
                        ) : (
                            ""
                        )}

                        <form onSubmit={submitloginForm}>

                            <label htmlFor='email' className={`${style.Sign}`} >Email:</label>
                            <input onChange={getUserDate} type="email" className=' form-control my-input my-2' name="email" id="email"></input>
                            {
                                errorList.filter((err) => err.context.label === 'email')[0] ? <div className=' alert alert-danger my-1'>
                                    <p>"email" must be a valid email</p>
                                </div> : ''
                            }
                            <label htmlFor='password' className={`${style.Sign}`} >Password :</label>
                            <input onChange={getUserDate} type="password" className=' form-control my-input my-1' name="password" id="password"></input>

                            {errorList.filter((err) => err.context.label === 'password')[0] ? <div className=' alert alert-danger my-1'>
                                <p>Password invalid must be start char captial or small </p>
                            </div> : ''
                            }
                            <p className=' text-danger  mt-3 left'>Recover Password ?</p>
                            <button type='submit' className={`${style.btn} btn btn-danger text-white  w-100 mb-3 py-2 `} >{isLoading === true ? <i className=' fas fa-spinner fa-spin'></i> : 'Login'}</button>
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
                                <div className=' col-4'>
                                    <button className=' btn btn-outline-danger rounded-3 ms-5'> <i className=' fab mx-1 fa-google  '></i></button>
                                </div>
                                <div className=' col-3'>
                                    <button className=' btn btn-outline-danger rounded-3  '><i className=' fab mx-1 fa-apple '></i></button>
                                </div>
                                <div className=' col-3'>
                                    <button className=' rounded-3  btn btn-outline-danger '> <i className=' fab mx-1 fa-facebook '></i></button>
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
