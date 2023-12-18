import React from 'react';
import DigitalCV from './DigitalCV';
//import styles from '.NavBar.css';

function Navbar() {

  function CustomLink({href, children}){

    const path = window.location.pathname

    return (
      <li className={path ===  href ? "active" : ""}>
          <a href={href}>{children}</a>
        </li>
    )
  }

  return (
    <nav id="nav">
      <ul className="links">
        <CustomLink href={"/aboutme"}>About Me</CustomLink>
        <CustomLink href={"/digitalcv"}>Digital CV</CustomLink>
    {/** }
        <li>
          <a href="freelance.html">Freelance</a>
        </li> {*/} 
      </ul>
      <ul className="icons">
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
