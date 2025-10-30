import React from "react";
import "./App.css";
import "./mycss.css";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div style={{ backgroundColor: "rgb(39, 27, 54)", padding: "20px" }}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Interests">Interests</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link className="active" to="/Contact">Contact</Link></li>
      </ul>

      <div style={{ color: "rgb(233, 215, 255)" }}>
        <h1
          style={{ fontFamily: "Major Mono Display", fontSize: "120px" }}
          align="center"
        >
          Contact Me
        </h1>
      </div>

      <div className="container">
        <article style={{ width: "70%" }}>
          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            Linkedin:{" "}
            <a href="https://www.linkedin.com/in/harshini-pulivarthi-a4076a276">
              harshini-pulivarthi-a4076a276
            </a>
          </p>
          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            Instagram:{" "}
            <a href="https://www.instagram.com/harshini.pulivarthi/">
              harshini.pulivarthi
            </a>
          </p>
          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            GitHub:{" "}
            <a href="https://github.com/harshi-puli">harshi-puli</a>
          </p>
          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            Email:{" "}
            <a href="mailto:harshini.puli28@berkeley.edu">
              harshini.puli28@berkeley.edu
            </a>
          </p>
          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            SoundCloud:{" "}
            <a href="https://soundcloud.com/harshini-pulivarthi">
              harshini.pulivarthi
            </a>
          </p>
          <br />
        </article>

        <article style={{ width: "30%" }}>
          <img
            src="p_butterfly.png"
            width="800"
            height="600"
            alt="Butterfly"
          />
          <br />
        </article>
      </div>
    </div>
  );
}

export default Contacts;
