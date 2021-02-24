import React from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src="" alt="hero-img"/>
                </div>
                <h1>Quiz Me!</h1>
                <p>Quiz me allows you to make flashcards for yourself!
                    These flashcards can be saved and grouped together into quizzes that you can take anytime anywhere!
                    Whether you're trying to learn a new language or study for a test Quiz Me will allow you to challenge yourself and prepare.
                </p>
                <Link to={'/signup'}>
                <button>Signup</button>                
                </Link>
                <Link to={'/login'}>
                <button>Login</button>                
                </Link>
            </div>
        )
    }
}

export default LandingPage