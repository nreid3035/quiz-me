import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import config from '../config'
import QuizMeContext from '../QuizMeContext'

// LOGIN PAGE FOR THE QUIZ ME APP CURRENTLY MAKING NO REQUESTS

class Login extends React.Component {
    static contextType = QuizMeContext

    handleSubmit = (e) => {
        e.preventDefault()
        const userRequest = {
            username: e.target['username'].value,
            password: e.target['password'].value
        }
        // GET USER BY USERNAME AND PASSWORD VALUE
        fetch(`${config.API_BASE_URL}/users/user-validation/${userRequest.username}`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(responseJson => {
                if (userRequest.password !== responseJson.user_password) {
                    throw new Error
                } else {
                    this.context.setUserInfo(responseJson)
                    this.props.history.push('/home')
                }
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