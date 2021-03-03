import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

// LOGIN PAGE FOR THE QUIZ ME APP CURRENTLY MAKING NO REQUESTS

class Login extends React.Component {
    render() {
        return (
            <div>
                <h2>Login Page</h2>
                {/* MUST ADD REQUIREMENTS, VALIDATIONS, ERRORS TO FORM*/}
                <form className="login-form">
                    <label htmlFor="username" className="login-label">Username</label>
                    <input type="text" name="username" id="username" className="login-input"/>
                    <label htmlFor="password" className="login-label">Password</label>
                    <input type="text" name="password" id="password" className="login-input"/>
                    <Link to={'/home'}>
                    <button className="login-submit-button">Submit</button>
                    </Link>                    
                </form>
            </div>
        )
    }
}

export default Login