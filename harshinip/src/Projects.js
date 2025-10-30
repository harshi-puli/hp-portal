import React from "react";
import "./App.css";
import "./mycss.css";
import { Link } from "react-router-dom";

function Projects() {
    return (
        <div style={{ backgroundColor: "rgb(39, 27, 54)", padding: "20px" }}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Interests">Interests</Link></li>
                <li><Link to="/Contacts">Contact</Link></li>
                <li><Link className="active" to="/Projects">Projects</Link></li>
            </ul>
        <div style={{ color: "rgb(233, 215, 255)" }}><h1 style={{ fontFamily: "Major Mono Display", fontSize: "120px" }} align="center">Projects</h1></div>
        
        <div className="container">
            <article style={{ backgroundColor: "rgb(233, 215, 255)", paddingLeft: "30px", paddingRight: "30px", marginLeft: "30 px", borderRadius: "15px" }}>
            <h1 style={{ fontFamily: "Major Mono Display", fontSize: "60px" }} align="center">What am I working on Currently?</h1>
            <p style={{ fontFamily: "Verdana", fontSize: "30px" }}> Doing good on finals!!</p>
           
            <br></br>
            <br></br>
            </article>

            <article style={{ backgroundColor: "rgb(244, 239, 249)", paddingLeft: "30px", paddingRight: "30px", marginLeft: "30 px", borderRadius: "15px" }}>
                <h1 style={{ fontFamily: "Major Mono Display", fontSize: "60px" }} align="center">Previous Work</h1>
                <p style={{ fontFamily: "Verdana", fontSize: "30px" }}> WiCDS at Berkeley ML/DS Committee Projects:</p>
                <ul style={{ color: "rgb(117, 62, 184)" }}>
                    <li style={{ fontSize: "25px" }}> Machine Learning Analying of Global Security Threats</li>
                    <li style={{ fontSize: "25px" }}> Using Machine Learning to predict the sentiment in an online Food Review!</li>
                </ul> 
                <a style={{ fontFamily: "Verdana", fontSize: "25px", color: "rgb(97, 76, 125)" }} href="https://docs.google.com/presentation/d/10nzGRgAZilNILhNpQLH16jX_vT4BLuMHJZocYDp-B-s/edit?usp=sharing">CyberSecurity Threats Analysis Presentation</a>
                <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>+ Finishing this website.</p>
                <br></br>
                </article>
        </div>
        
    </div>
    );
}

export default Projects;