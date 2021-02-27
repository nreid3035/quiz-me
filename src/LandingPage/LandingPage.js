import React from 'react'
import { Link } from 'react-router-dom'

// LANDING PAGE FOR THE QUIZ ME APP  

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                {/* HERO IMAGE */}
                <div>
                    <img src="" alt="hero-img"/>
                </div>
                {/* TITLE AND CONTENT */}
                <h1>Quiz Me!</h1>
                <p>Quiz me allows you to make flashcards for yourself!
                    These flashcards can be saved and grouped together into quizzes that you can take anytime anywhere!
                    Whether you're trying to learn a new language or study for a test Quiz Me will allow you to challenge yourself and prepare.
                    Signup or Login below, for a hassle free experience just click the home button above.
                    You will be able to use most of the features, but we will not be able to save anything.
                </p>
                {/* WE STILL CAN'T SAVE ANYTHING IN THE STATIC CLIENT ANYWAY, BUT THIS IS THE INTENDED USABILITY */}
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