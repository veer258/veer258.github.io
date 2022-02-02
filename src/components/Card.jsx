import React from "react"

function Card(props) {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <h2>{props.titleh2}</h2>
            <p>{props.body}</p>
        </div>
    )
}

export default Card