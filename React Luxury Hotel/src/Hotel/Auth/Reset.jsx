import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Reset({ gotologin }) {
    return (
        <div className='auth-loginpage'>
            <div className='auth-logincard'>
                <h2>Reset Password</h2>
                <p>Enter your email and we'll send you a password reset link</p>
                <input type="email" placeholder='Email address' className='auth-inputc' /><br /><br />
                <button className='bc'>Send Reset Link</button>
                <p>Back to <Link to='/Login'>Login</Link></p>


            </div>

        </div>
    )
}

export default Reset