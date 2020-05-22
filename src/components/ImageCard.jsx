import React, { Component } from 'react'
import Photo from '../assets/photo.jpg'
import '../stylesheets/ImageCard.css'

export class ImageCard extends Component {
    render() {
        return (
            <div class="ic">
                <img class="ic" src={Photo} alt="johnny.png" />
                <text class="name">Johnny Phelan</text>
                <text class="info">Software Developer</text>
                <text class="info">Student, OSU-Cascades</text>
            </div>
        )
    }
}