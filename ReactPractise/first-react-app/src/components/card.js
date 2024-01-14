import React from "react";
import Avatar from './avatar';

function Card(props) {
    const cardStyle = {
        padding: '10x',
        border: '2px solid black',
        margin: '20px',
        boxShadow: '2px 2px 2px gray'
    }
    return (
        <div style={cardStyle}>
            <Avatar image={props.image} ame={props.ame} />
            <h1>{props.ame}</h1>
            <p>{props.email}</p>
        </div>
    );
}


export default Card;