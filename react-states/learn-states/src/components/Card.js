import React from 'react'
import newStyle from './newStyle.css'

function Card(Props) {

    return (
        <>
            <div className="card" style={{ width: '350px', height: '400px', marginLeft: '2rem', marginTop: '2rem' }}>
                <img src={Props.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" >{Props.title}</h5>
                    <p className="card-text">{Props.data}</p>
                    <a href={Props.newUrl} className="btn btn-primary" target='blank'>Read More</a>
                </div>
            </div>
        </>
    )
}

export default Card