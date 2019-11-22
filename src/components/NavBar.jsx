import React, { Component } from 'react'

const ulStyle = {
    width: "100%",
    float: "left",
    margin: "0 0 3em 0",
    padding: 0,
    listStyle: "none",
}

const liStyle = {
    float: "left",
    padding: "8px 15px",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#069",
}

const aStyle = {
    textDecoration: "none",
    color: "#468CDE"
}

const divStyle = {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -50,
    marginLeft: -50,
}

export class NavBar extends Component {
    render() {
        return(
            <div style={divStyle}>
                <ul style={ulStyle}>
                    <li style={liStyle}><a style={aStyle} href="https://pdfhost.io/v/Nuz@b4MT_phelan_resumepdf.pdf">Resume</a></li>
                    <li style={liStyle}><a style={aStyle} href="https://www.github.com/phelanjo">Github</a></li>
                </ul>
            </div>
        )
    }
}