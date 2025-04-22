// src/components/Projects.jsx
import React from 'react';
import './Projects.css'; // Optional external styling

const projects = [
  {
    title: "ToDo App",
    description: "A task manager built with React and localStorage.",
    image: "./assets/todo.png", // replace with your image
    link: "https://github.com/yourusername/todoapp"
  },
  {
    title: "Spotify Redesign",
    description: "A mobile UI redesign for the Spotify app.",
    image: "./assets/spotify.png",
    link: "https://yourportfolio.com/spotify-redesign"
  },
  {
    title: "Picture Show",
    description: "Movie dining experience website redesign.",
    image: "./assets/pictureshow.png",
    link: "https://yourportfolio.com/pictureshow"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
