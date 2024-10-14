import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
function ErrorPage() {
    return (
        <div className='container-error'>
            <h1>Página no encontrada</h1>
            <Link to='/'>Click aquí para ir al Inicio</Link>
        </div>
    )
}

export default ErrorPage
