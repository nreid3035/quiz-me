import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

// LANDING PAGE FOR THE QUIZ ME APP  

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                {/* HERO IMAGE */}
                <div>
                    <img alt="hero-img"/>
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
                <div className="buttons">
                  <Link to={'/signup'} className="button-link">
                    <button className="landing-button">Signup</button>                
                  </Link>
                  <Link to={'/login'} className="button-link">
                    <button className="landing-button">Login</button>                
                  </Link>
                </div>
            </div>
        )
    }
}

export default LandingPage