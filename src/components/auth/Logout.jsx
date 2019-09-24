import React from 'react'
import { Link } from 'react-router-dom'


export default function Logout() {
    return (
        <div>
            <h1>You have been logged out</h1>
            <Link to="/login">Login</Link>
        </div>
    )
}
