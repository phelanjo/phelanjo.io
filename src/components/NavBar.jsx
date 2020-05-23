import React, { Component } from "react";
import "../stylesheets/NavBar.css";

export class NavBar extends Component {
  render() {
    return (
      <div class="nav">
        <ul class="nav">
          <li class="nav">
            <a
              class="nav"
              href="https://phelan-resume.s3.amazonaws.com/phelan_res.pdf"
            >
              <i class="far fa-file"></i>
              <text class="nav">Resume</text>
            </a>
          </li>
          <li class="nav">
            <a class="nav" href="https://www.github.com/phelanjo">
              <i class="fab fa-github"></i>
              <text class="nav">GitHub</text>
            </a>
          </li>
          <li class="nav">
            <a
              class="nav"
              href="https://www.linkedin.com/in/johnny-phelan-2981491aa/"
            >
              <i class="fab fa-linkedin"></i>
              <text class="nav">LinkedIn</text>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
