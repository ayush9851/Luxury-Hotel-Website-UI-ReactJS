import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Signup() {
    return (
        <div className='auth-loginpage'>
            <div className='auth-logincard'>
                <h2>Create Account</h2><br />
                <input type="text" placeholder='Username' className='auth-inputb' /><br /><br />
                <input type="email" placeholder='Email' className='auth-inputb' /><br /><br />
                <input type="password" placeholder='Password' className='auth-inputb' /><br /><br />
                <input type="password" placeholder='Confirm Password' className='auth-inputb' /><br /><br />
                <button className='auth-bb'>Signup</button><br />
                <p> Already have a account? <br /><Link to='/Login'>Login</Link></p>




            </div>

        </div>
    )
}

export default Signup