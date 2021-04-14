import React from 'react'
import API_BASE_URL from '../config'
import QuizMeContext from '../QuizMeContext'
import './Signup.css'

// SIGNUP FORM FOR THE QUIZ ME APP CURRENTLY MAKING NO REQUESTS



class Signup extends React.Component {
    static contextType = QuizMeContext

    // HANDLES SUBMIT OF THE SIGNUP FORM PERFORMS FETCH POST REQUEST
    handleSubmit = (e) => {
        // PREVENT DEFAULT REFRESH
        e.preventDefault()

        // REGEX TO CHECK IF EMAIL FORMAT IS VALID
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target['email'].value) === false) {
            return console.log('invalid email')
        }

        // CHECK THAT PASSWORD AND CONFIRM PASSWORD MATCH
        if (e.target['password'].value !== e.target['confirm-password'].value) {
            return console.log('error: password and confirm password must match')
        }

        // DECLARE INFO OF NEW USER TO BE POSTED
        const newUser = {
            first_name: e.target['first-name'].value,
            last_name: e.target['last-name'].value,
            username: e.target['username'].value,
            email: e.target['email'].value,
            password: e.target['password'].value
        }

        // REQUEST OPTIONS OBJECT
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }
        // POST REQUEST TO API/SIGNUP
        fetch(`${API_BASE_URL}/signup`, requestOptions)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            // REROUTE TO LOGIN ON SUCCESS
            this.props.history.push('/login')
            return responseJson
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        
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
                    <input type="text" name="first-name" id="first-name" className="signup-input" required/>
                    <label htmlFor="last-name" className="signup-label">Last Name</label>
                    <input type="text" name="last-name" id="last-name" className="signup-input" required/>
                    <label htmlFor="username" className="signup-label">Username</label>
                    <input type="text" name="username" id="username" className="signup-input" required/>
                    <label htmlFor="email" className="signup-label">Email</label>
                    <input type="text" name="email" id="email" className="signup-input" required/>
                    <label htmlFor="password" className="signup-label">Password</label>
                    <input type="text" name="password" id="password" className="signup-input" required/>
                    <label htmlFor="confirm-password" className="signup-label">Confirm Password</label>
                    <input type="text" name="confirm-password" id="confirm-password" className="signup-input" required/>
                    <button type="submit" className="signup-submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup