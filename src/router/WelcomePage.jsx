import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
    return(
        <div className="welcomePage">
            <div className="welcome-content">
        <h1 style={{color:"white",fontSize:'60px',textShadow: '0 0 20px rgba(255,255,255,.6)'}}>Welcome</h1>
        <p style={{color:'white',fontSize:'30px',paddingBottom:'10px',textShadow: '0 0 20px rgba(255,255,255,.6)',textAlign:'center'}}>Yassauy</p>
        <Link className="link-main" to='/Main' >continue...</Link>
            </div>
        </div>
    )
}
export default WelcomePage