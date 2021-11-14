import React from 'react';
import "./About.css";

export default function About() {
  return (
    <div>
      <article className="about-body">
        <h2>About Me</h2>
        <div className="about-me-top">
          <img className="boobash" src="./Assets/Disboobash19.jpeg" alt="My family at Disney" width="300"></img>
          <p>
            Welcome! I am a full-stack developer looking to break into the field of Educational Software development.
            After spending several years as a veterinary technician, I found my calling teaching theatre to middle school students.
            After losing the funding for my teaching position, I researched ways I could use my former IT skills in a new way and continue pursuing my passion of educating our future.
            I have found my next step in development, and I really enjoy the creative front-end work as well as the more logic driven back-end.
          </p>
        </div>
        <p> 
          Professionally, I have several years of customer service, IT, and leadership skills. I am an excellent communicator and collaborator
          while equally comfortable working independently. I have built empathetic listening skills through multiple leadership positions
          and clinical work. I am an agile problem solver and unafraid to make mistakes or admit when I need help. I am organized, proficient in time management, and adaptable to change.
          My Google skills are growing rapidly!
        </p>
        <p>
          In my personal life, I am father to a beautiful son named Ronan. I love to travel and look forward to being able to show my son the world.
          I love reading, creating stories with my son, cooking, and gaming. Thursdays are family Roblox nights so you can often find me there
          playing with my son and wife.
        </p>
        <div className="bottom-img">
        <img className="fazbear" src="./Assets/Fazbear21.jpg" alt="Halloween bear 2021" width="400" />
        <img className="wedding" src="./Assets/Mom&Bug.jpg" alt="My wife kissing my son at our wedding" width="400" />
        <img className="chilling" src="./Assets/ChillingDC.jpg" alt="Chilling at a fire pit in Door County" width="400" />
        </div>

      </article>
    </div>
  );
}