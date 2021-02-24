import React from 'react'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    render() {
        return (
            <div>
                <h2>Login Page</h2>
                <form>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username"/>
                    <label for="password">Password</label>
                    <input type="text" name="password" id="password"/>
                    <Link to={'/home'}>
                    <button>Submit</button>
                    </Link>                    
                </form>
            </div>
        )
    }
}

export default Login