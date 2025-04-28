import React from 'react';

export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Hi, I'm <span className="name">Lubna Febin</span></h1> 
        <p className='description'>Full Stack Developer</p>
      </section>
    </div>
  )
}
