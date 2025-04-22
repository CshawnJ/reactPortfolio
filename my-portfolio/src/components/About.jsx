// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src="./assets/yinyang.png" alt="Profile" />
        </div>
        <div className="about-content">
          <p>
            I'm a passionate full-stack designer who loves crafting beautiful and user-friendly experiences.
            With a background in web and graphic design, I blend creativity and code to bring ideas to life.
          </p>

          <div className="skills-interests">
            <div className="column">
              <h3>Skills</h3>
              <ul>
                <li>Adobe Creative Suite</li>
                <li>HTML, CSS, JavaScript, React</li>
                <li>Responsive Design</li>
                <li>UX/UI Design</li>
                <li>Google Analytics, SEO</li>
              </ul>
            </div>

            <div className="column">
              <h3>Interests</h3>
              <ul>
                <li>Visual Storytelling</li>
                <li>Motion Design</li>
                <li>Playing Trumpet</li>
                <li>Cooking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
