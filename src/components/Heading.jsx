import React from "react"
import Card from "./Card"
import "./Heading.css"

function Heading(){
    return(
        <div className="heading">
            <div className="title">
                <Card className="title" header="Hi, I'm Veer!" header2="I'm a Student, Tech Enthusiast, Digital Artist, and Web Developer"/>
                </div>
            
            <div className="arrow">
                <a href="#Skills" class="scroll-down-icon"> <span class="material-icons-outlined material-icons">expand_more</span> </a>
            </div>
        </div>
    )
}

export default Heading