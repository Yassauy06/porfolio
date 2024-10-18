import React from 'react';
import { Link } from 'react-scroll';
import AboutMe from '../components/AboutMe';
import Contacts from '../components/Contacts'
import Education from '../components/Education';
import Experience from '../components/Experience'
import Skills from '../components/Skills';
import Clients from '../components/Clients';

import { Layout, theme } from 'antd';


const  Main = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider>

    <div className='global-div '>
      
      <nav className="navbar">
        <div className='userInfo'>
      <img style={{width:'50px',height:'50px',borderRadius:'50px'}} src="../аватарка.jpg" alt="" />
      <h5 className='userName'> Yassauy</h5>
    </div>
        <ul>
        <Link className='link-text'  to="/Aboutme"  spy={true}  smooth='true' offset={-50} duration={700}> 
          <li style={{paddingBottom:'20px',display:'flex',alignItems:'center'}}> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>   
          <p className='navbar-text'>  About Me</p>
           </li>

           </Link> 

           <Link className='link-text'  to="/Education"  spy={true}  smooth='true' offset={-50} duration={700}>
          <li style={{paddingBottom:'20px',display:'flex',alignItems:'center'}}> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path></svg>  
          <p className='navbar-text'>Education </p> </li>
          </Link> 
          <Link className='link-text'  to="/Skills"  spy={true}  smooth='true' offset={-50} duration={700}>
          <li style={{paddingBottom:'20px',display:'flex',alignItems:'center'}}> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m35.42 188.21 207.75 269.46a16.17 16.17 0 0 0 25.66 0l207.75-269.46a16.52 16.52 0 0 0 .95-18.75L407.06 55.71A16.22 16.22 0 0 0 393.27 48H118.73a16.22 16.22 0 0 0-13.79 7.71L34.47 169.46a16.52 16.52 0 0 0 .95 18.75zM48 176h416"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 64-48 112-96-128M112 64l48 112 96-128m0 400-96-272m96 272 96-272"></path></svg> <p className='navbar-text'>Skills</p> </li>
          </Link>
          <Link className='link-text' to="/Clients"  spy={true}  smooth='true' offset={-50} duration={700}>
          <li style={{paddingBottom:'20px',display:'flex',alignItems:'center'}}> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"></path></svg><p className='navbar-text'>Clients</p></li>
          </Link> 
          <Link  className='link-text' to="/Contacts"  spy={true}  smooth='true' offset={-50} duration={700}>
          <li style={{paddingBottom:'20px',display:'flex',alignItems:'center'}}> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.002 9.538c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.645a.997.997 0 0 0-.686.893z"></path></svg><p className='navbar-text'>Contacts </p> </li>
          </Link>
          <Link  className='link-text' to="/Experience"  spy={true}  smooth='true' offset={-50} duration={700}>
          <li style={{paddingBottom:'20px',display:'flex',alignItems:'center'}}> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path></svg><p className='navbar-text'>Experience</p>  </li>
          </Link>
        </ul>
      </nav>

      <div className="content">
        <section id="/Aboutme">
          <AboutMe />
        </section>
        <section id="/Education">
          <Education />
        </section>
        <section id="/Skills">
          <Skills />
        </section>
        <section id="/Clients">
          <Clients/>
        </section>
        <section id="/Contacts">
          <Contacts />
        </section>
        <section id="/Experience">
          <Experience />
        </section>
      </div>
    </div>
 
      <Layout
        
      >
      </Layout>
    </Layout>
   
  );
};
export default Main;