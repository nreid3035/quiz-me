import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
    render() {
        return (
            <div>
              <h1>Signup Page</h1>
                <form>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name="first-name" id="first-name"/>
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" name="last-name" id="last-name"/>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username"/>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password"/>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="text" name="confirm-password" id="confirm-password"/>
                    <Link to={'/home'}>
                    <button type="submit">Submit</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default Signup