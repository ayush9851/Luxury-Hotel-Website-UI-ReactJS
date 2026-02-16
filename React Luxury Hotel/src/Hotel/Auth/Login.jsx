import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'
function Login() {

    return (
        <div className='auth-loginpage'>
            <div className='auth-logincard'>
                <h2>Login</h2>
                <input type="email" placeholder='Email' className='auth-inputa' /><br /><br />
                <input type="password" placeholder='Password' className='auth-inputa' /><br /><br />
                <button className='auth-ba'>Login</button><br /><br />
                <Link to={'/Reset'}><p className='auth-forgot'>Forgot Password</p></Link>
                <p className='auth-click'>Don't have account? <Link to={'/Signup'}>Click Here</Link> <br />for Signup</p>

            </div>
        </div>

    )
}

export default Login