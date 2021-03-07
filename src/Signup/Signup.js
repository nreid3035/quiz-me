import React from 'react'
import { Link } from 'react-router-dom'
import QuizMeContext from '../QuizMeContext'
import './Signup.css'

// SIGNUP FORM FOR THE QUIZ ME APP CURRENTLY MAKING NO REQUESTS



class Signup extends React.Component {
    static contextType = QuizMeContext
    constructor(props) {
        super(props)
    }


    render() {
        console.log(this.props)
        
        return (
            <div>
              <div className="page-header-container">
                <button className="back-button" 
                onClick={() => this.props.history.goBack()}>Back</button>  
                <h2 className="signup-title">Signup Page</h2>
              </div>
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