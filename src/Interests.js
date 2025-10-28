import React from "react";
import "./App.css";
import "./mycss.css";
import { Link } from "react-router-dom";

function Interests() {
  return (
    <div style={{ backgroundColor: "rgb(39, 27, 54)", padding: "20px"}}>
      {/* Navigation */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link className="active" to="/Interests">Interests</Link></li>
        <li><Link to="/Contacts">Contact</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
      </ul>

      {/* Page Title */}
      <div style={{ color: "rgb(233, 215, 255)" }}>
        <h1
          style={{
            fontFamily: "Major Mono Display",
            fontSize: "120px",
            textAlign: "center",
          }}
        >
          My Interests
        </h1>
      </div>

      {/* Music Section */}
      <div className="container">
        <article
          style={{
            backgroundColor: "rgb(233, 215, 255)",
            padding: "30px",
            margin: "30px",
            borderRadius: "15px",
          }}
        >
          <h1
            style={{
              fontFamily: "Major Mono Display",
              fontSize: "60px",
              textAlign: "center",
            }}
          >
            Music
          </h1>
          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            Music has always been a huge passion of mine. Over the years, I've
            learned to play <b>piano, guitar, clarinet (+ bass clarinet), mallet
            percussion,</b> and I'm currently learning the <b>harmonica!</b>
          </p>

          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            I also love to <b>create music</b> — here are some samples of songs
            I’ve worked on:
          </p>

          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            <b>Whimsy Quarters:</b>
          </p>
          <audio controls>
            <source src="/whimsyquarters.mp3" type="audio/mpeg" />
          </audio>

          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            <b>Trusty:</b>
          </p>
          <audio controls>
            <source src="/Trusty.mp3" type="audio/mpeg" />
          </audio>
        </article>

        {/* Dance Section */}
        <article
          style={{
            backgroundColor: "rgb(233, 215, 255)",
            padding: "30px",
            margin: "30px",
            borderRadius: "15px",
          }}
        >
          <h1
            style={{
              fontFamily: "Major Mono Display",
              fontSize: "60px",
              textAlign: "center",
            }}
          >
            Dance
          </h1>
          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            I’ve done classical dance for over 7–8 years, mainly focusing on
            <b> Kuchipudi!</b>
          </p>

          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            Here's a brief history of my dance journey:
          </p>

          <ul style={{ color: "rgb(117, 62, 184)", fontFamily: "Verdana" }}>
            <li style={{ fontSize: "25px" }}>1st–3rd grade: Bharathanatyam</li>
            <li style={{ fontSize: "25px" }}>
              5th–11th grade: Kuchipudi + Bollywood lessons
            </li>
          </ul>

          <p style={{ fontFamily: "Verdana", fontSize: "30px" }}>
            I had to stop formal lessons in junior year, but I still continue
            practicing on my own and now perform with <b>MAYA</b> — UC
            Berkeley’s Indian classical and Bollywood fusion dance club!
          </p>
        </article>
      </div>
    </div>
  );
}

export default Interests;
