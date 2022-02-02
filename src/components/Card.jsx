import React from "react"

function Card(props) {
    return (
        <div className="card">
            <h1>{props.header}</h1>
            <h2>{props.header2}</h2>
            <p>{props.body}</p>
        </div>
    )
}

export default Card