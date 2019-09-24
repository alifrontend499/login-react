import React from 'react';
import { Link } from 'react-router-dom'


export default function MyAccount() {
    return (
        <div>
            <h1>Hello <span>User</span></h1>
            <Link to="/logout">Logout</Link>
        </div>
    )
}
