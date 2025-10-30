import React from "react";
import "./App.css";
import "./mycss.css";
import me from "./Me.jpg";
import berkeley from "./Berkeley.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Interests from "./Interests"; 
import Contacts from "./Contacts"; 
import Projects from "./Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" className = "active" element={<Home />} />
        <Route path="/Interests" element={<Interests />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="App" style={{ backgroundColor: "rgb(39, 27, 54)", padding: "20px" }}>
      {/* Navigation Bar */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Interests">Interests</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>

      {/* Header */}
      <div style={{ color: "rgb(233, 215, 255)" }}>
        <h1
          style={{
            fontFamily: "Major Mono Display",
            fontSize: "120px",
            textAlign: "center",
          }}
        >
          Harshini Pulivarthi's Portal
        </h1>
      </div>

      {/* About Me Section */}
      <div className="container">
        <article>
          <h1
            style={{
              fontFamily: "Major Mono Display",
              fontSize: "60px",
              textAlign: "center",
            }}
          >
            About Me
          </h1>
          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            My name is <b>Harshini Pulivarthi!</b> I'm a current freshman Data
            Science Major @ UC Berkeley!
          </p>

          <img src={me} width="800" height="450" alt="Harshini" />
        </article>

        {/* Commitments Section */}
        <article style={{ backgroundColor: "rgb(244, 239, 249)" }}>
          <h1
            style={{
              fontFamily: "Major Mono Display",
              fontSize: "60px",
              textAlign: "center",
            }}
          >
            My Commitments:
          </h1>
          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            I am currently a part of UC Berkeley's...
          </p>
          <ul
            style={{
              fontFamily: "Verdana",
              fontSize: "30px",
              color: "rgb(44, 21, 71)",
            }}
          >
            <li>CS KickStart</li>
            <li>Maya: Indian Classical Dance and Bollywood Fusion</li>
            <li>Underwater Robotics @ Berkeley</li>
            <li>Women in Computing and Data Science (ML/DS Committee)</li>
          </ul>

          <img
            src={berkeley}
            width="500"
            height="280"
            alt="UC Berkeley"
            style={{ paddingLeft: "10%" }}
          />
        </article>
      </div>
    </div>
  );
}

export default App;
