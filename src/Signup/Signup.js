import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import QuizMeContext from '../QuizMeContext'
import './Signup.css'

// SIGNUP FORM FOR THE QUIZ ME APP CURRENTLY MAKING NO REQUESTS



class Signup extends React.Component {
    static contextType = QuizMeContext

    handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            first_name: e.target['first-name'].value,
            last_name: e.target['last-name'].value,
            username: e.target['username'].value,
            email: e.target['email'].value,
            user_password: e.target['password'].value
        }

        fetch(`${config.API_BASE_URL}/users`, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(responseJson => {
            return responseJson
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        console.log(this.props)
        
        return (
            <div className="signup-container">
              <div className="page-header-container">
                <button className="back-button" 
                onClick={() => this.props.history.goBack()}>Back</button>  
                <h2 className="signup-title">Signup Page</h2>
              </div>
                {/*MUST ADD REQUIREMENTS, VALIDATIONS, AND ERRORS TO FIELDS */}
                <form className="signup-form" onSubmit={(e) => this.handleSubmit(e)}>
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
                    <button type="submit" className="signup-submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup