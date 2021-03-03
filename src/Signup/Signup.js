import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

// SIGNUP FORM FOR THE QUIZ ME APP CURRENTLY MAKING NO REQUESTS

class Signup extends React.Component {
    render() {
        return (
            <div>
              <h1>Signup Page</h1>
                {/*MUST ADD REQUIREMENTS, VALIDATIONS, AND ERRORS TO FIELDS */}
                <form className="signup-form">
                    <label htmlFor="first-name" className="signup-label">First Name</label>
                    <input type="text" name="first-name" id="first-name" className="signup-input"/>
                    <label htmlFor="last-name" className="signup-label">Last Name</label>
                    <input type="text" name="last-name" id="last-name" className="signup-input"/>
                    <label htmlFor="username" className="signup-label">Username</label>
                    <input type="text" name="username" id="username" className="signup-input"/>
                    <label htmlFor="email" className="signup-label">Email</label>
                    <input type="text" name="email" id="email" className="signup-input"/>
                    <label htmlFor="password" className="signup-label">Password</label>
                    <input type="text" name="password" id="password" className="signup-input"/>
                    <label htmlFor="confirm-password" className="signup-label">Confirm Password</label>
                    <input type="text" name="confirm-password" id="confirm-password" className="signup-input"/>
                    <Link to={'/home'}>
                    <button type="submit" className="signup-submit">Submit</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default Signup