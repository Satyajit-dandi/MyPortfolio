import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active navbar-brand" aria-current="page" to="/">Satyajit D Dandi</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/education">Education</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/experience">Experience</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/projects&skills">Projects & Skills</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
