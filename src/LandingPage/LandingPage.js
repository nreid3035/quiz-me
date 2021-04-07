import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import img from '../resources/hero.jpg'

// LANDING PAGE FOR THE QUIZ ME APP  

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                {/* HERO IMAGE */}
                <div className="hero-container">
                    <img src={img} alt="hero-img" className="hero-img"/>
                </div>
                {/* TITLE AND CONTENT */}
                <h1 className="landing-title">Quiz Me!</h1>
                <p className="landing-intro">Quiz me allows you to make flashcards for yourself!
                    These flashcards can be saved and grouped together into quizzes that you can take anytime anywhere!
                    Whether you're trying to learn a new language or study for a test Quiz Me will allow you to challenge yourself and prepare.
                    Signup or Login below!
                </p>
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