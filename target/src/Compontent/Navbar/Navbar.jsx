import React from 'react'
import style from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
import Target from '../../assets/Home/Group.png';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-xxl py-2 w-100 fixed-top shadow">
                <div className={`${style.frameNav} container-fluid`}>

                    <a className={` navbar-brand ${style.textLogo} me-3 ms-3  `} href="#">
                    <img src={Target}  alt="Target" className= {`${style.Target}  w-50 `} />

                    </a>
                    <button class="navbar-toggler border-danger border-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-sliders text-danger "></i>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">

                        <ul className=  'navbar-nav  me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center px-5'>
                            <li className="nav-item px-3">
                                <NavLink className={`${style.navLink} nav-link`} aria-current="page" to=''>Home</NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className={`${style.navLink} nav-link`} to='services'>Services</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={`${style.navLink} nav-link`} to='projects'>Projects</NavLink>
                            </li>

                            <li className="nav-item px-3">
                                <NavLink className={`${style.navLink} nav-link`} to='about'>About</NavLink>
                            </li>

                            <li className="nav-item px-3">
                                <NavLink className={`${style.navLink} nav-link`} to='contact'>Contact</NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">

                            <li className="nav-item m-auto ">
                                <NavLink className={`${style.navLink} nav-link`} to='chat'>
                                    <button className={`${style.btn} btn btn-outline-primary  rounded rounded-5 text-white py-2`}>
                                        Let's Chat
                                        <i class="fa-brands fa-rocketchat ps-2"></i>
                                    </button>
                                </NavLink>
                            </li>

                            <li className="nav-item m-auto ">
                                <NavLink className={`${style.navLink} nav-link`} to='login'>
                                    <button className={`${style.btn} btn btn-outline-primary  rounded  rounded-3 text-white py-2`}>
                                        Login
                                    </button>
                                </NavLink>
                            </li>

                            <li className="nav-item m-auto ">
                                <NavLink className={`${style.navLink} nav-link`} to='register'>
                                    <button className={`${style.btn} btn btn-outline-primary  rounded rounded-3 text-white py-2`}>
                                        Register
                                    </button>
                                </NavLink>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
