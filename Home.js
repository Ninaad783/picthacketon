// Home.js
import React from 'react';
import home from "./home.css";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div id='body' >
      <div id='main'>
        <div>
          <h1 >NAVIGATE THE FUTURE</h1>
          <h2 class='content' ><span>CHOTU....</span></h2>
          <p class='content' >Hey, confused about finding the best career for u</p>
          <Link to="/signup"><button>Try CHOTU</button></Link>
        </div>
        <div >
          <img src="sidebg.png" alt="Your Image" id='img'/>
        </div>
      </div>

      <div id='about'>
        <div >
          <h3>ABOUT</h3>
          <p>Discover Your Dream Career with Our Interactive Chatbot Get personalized career advice, industry insights,
             and skill recommendations with our chatbot. Whether you're a student exploring future career paths or a
             professional seeking new opportunities, our chatbot is here to help you make informed decisions about your future.
          </p>
        </div>
        <div >
          <img src="bulbbg.png" alt="Your Image" id='img'/>
        </div>
      </div>
      <div id='chat'>
        <h3>
          Chat With Me
        </h3>
        <div id="chatwithme">
          <div>
            <p>Match your skills to careers</p>
            <p class='roundbox'>HTML,CSS ,JAVASCRIPT</p>
            <p class="squarebox">
              <li>chatareers that matches</li>
              <ul>
                <li>Web developer</li>
                <li>Software developer</li>
                <li>Devev-ops</li>
              </ul>
            </p>
          </div>
          <div>
            <p>Get to know the roles</p>
            <p class='roundbox'>web developer</p>
            <p class="squarebox">
              <li>what they do</li>
              <ul>
                <li>Frontend developer</li>
                <li>Backend integration</li>
                <li>Performance optimization</li>
                <li>Continuous improvement</li>
              </ul>
            </p>
          </div>
        </div> 
      </div>
    </div>
    
  );
}

export default Home;
