import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from "../src/Compontent/MasterLayout/MasterLayout";
import AboutUs from "../src/Compontent/About us/AboutUs";
import Home from "../src/Compontent/Home/Home";
import ContactUs from "../src/Compontent/Contact us/ContactUs";
import Services from "../src/Compontent/Services/Services";
import Login from "../src/Compontent/Login/Login";
import Register from "../src/Compontent/Register/Register";
import Chat from "../src/Compontent/Chat/Chat";
import Ourproject from '../src/Compontent/Ourproject/Ourproject';
import SliderDetails from './Compontent/SliderDetails/SliderDetails';
import ServicesDetails from './Compontent/ServicesDetails/ServicesDetails';
import PortofolioDetails from './Compontent/PortofolioDetails/PortofolioDetails';
import ProjectsDetails from './Compontent/ProjectsDetails/ProjectsDetails';
import ReadmoreDetails from './Compontent/ReadmoreDetails/ReadmoreDetails';
import ButtonprojectDetails from './Compontent/ButtonprojectDetails/ButtonprojectDetails';
import NotFound from './Compontent/NoFound/NoFound';



export default function App() {
  let routes = createBrowserRouter([{
    path: '/', element: <MasterLayout />,
    children: [
      { index: true, element: <Home /> },
        { path: 'sliderdetails', element: <SliderDetails/> },
        { path: 'servicesdetails', element: <ServicesDetails/> },
        { path: 'portofoliodetails', element: <PortofolioDetails/> },

      { path: 'services', element: <Services /> },
      { path: 'readmoredetails', element: <ReadmoreDetails /> },


      { path: 'projects', element: <Ourproject />},
      { path: 'projectsdetails', element: <ProjectsDetails />},
      { path: 'buttonprojectdetails', element: <ButtonprojectDetails />},


      { path: 'chat', element: <Chat /> },
      { path: 'login', element: <Login/> },
      { path: 'register', element: <Register/> },
      { path: 'about', element: <AboutUs /> },
      { path: 'contact', element: <ContactUs /> },
      {path:'*' ,element:<NotFound/>},

    ]
  }])
  return (
    <>

      <RouterProvider router={routes} />

    </>
  )
}
