import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const param = useParams();
    return (
        <div>Profile of {param.UserId}</div>
    )
}

export default User