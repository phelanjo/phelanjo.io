import React, { Component } from 'react'
import '../stylesheets/NavBar.css'

export class NavBar extends Component {
    render() {
        return(
            <div class="nav">
                <ul class="nav">
                    <li class="nav">
                        <a class="nav" href="https://phelanjo-io.s3.amazonaws.com/phelan_res.pdf">Resume</a>
                    </li>
                    <li class="nav">
                        <a class="nav" href="https://www.github.com/phelanjo">GitHub</a>
                    </li>
                    <li class="nav">
                        <a class="nav" href="http://spootify.s3-website-us-east-1.amazonaws.com">Spootify</a>
                    </li>
                </ul>
            </div>
        )
    }
}