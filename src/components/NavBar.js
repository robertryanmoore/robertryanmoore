import React from 'react';
//import styles from '.NavBar.css';

function Navbar() {
  const toggle = () => {
    // Implement your toggle function logic here
  };

  return (
    <nav id="nav">
      <ul className="links">
        <li className="active">
          <a href="index.html">About Me</a>
        </li>
        <li>
          <a href="digitalcv.html">Digital CV</a>
        </li>
        <li>
          <a href="freelance.html">Freelance</a>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a onClick={toggle} className="icon fa-moon">
            <span className="label">Dark Mode / Light Mode</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/robert-moore-474560142/" className="icon brands fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/robertryanmoore" className="icon brands fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://gitlab.com/moorerobertryan" className="icon brands fa-gitlab">
            <span className="label">GitLab</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
