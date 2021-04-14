import React from 'react'
import './Login.css'
import config from '../config'
import QuizMeContext from '../QuizMeContext'

// LOGIN PAGE FOR THE QUIZ ME APP CURRENTLY MAKING NO REQUESTS

class Login extends React.Component {
    static contextType = QuizMeContext

    // SUBMIT FORM EVENT HANDLER
    handleSubmit = (e) => {
        // PREVENT DEFAULT REFRESH
        e.preventDefault()

        // DECLARE USER OBJECT TO BE SUBMITTED
        const userRequest = {
            username: e.target['username'].value,
            password: e.target['password'].value
        }
        // GET USER BY USERNAME AND PASSWORD VALUE
        fetch(`${config.API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRequest)
        })
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            // ADD JWT TOKEN TO LOCAL STORAGE, ROUTE TO HOME
            localStorage.setItem('session_token', responseJson.token)
            this.props.history.push('/home')
        })
            
    }

    render() {
        return (
            <div className="login-container">
                <div className="page-header-container">
                  <button className="back-button"
                  onClick={() => this.props.history.goBack()}>Back</button>
                  <h2 className="login-title">Login Page</h2>
                </div>
                {/* MUST ADD REQUIREMENTS, VALIDATIONS, ERRORS TO FORM*/}
                <form className="login-form" onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="username" className="login-label">Username</label>
                    <input type="text" name="username" id="username" className="login-input"/>
                    <label htmlFor="password" className="login-label">Password</label>
                    <input type="text" name="password" id="password" className="login-input"/>
                    <button className="login-submit-button">Submit</button>                    
                </form>
            </div>
        )
    }
}

export default Login