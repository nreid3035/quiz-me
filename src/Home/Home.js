import React from "react"
import { Link } from "react-router-dom"
import './Home.css'

// HOME PAGE FOR THE QUIZ ME APP

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                {/*NAVIGATION*/}
                <nav className="home-nav">
                    <ul className="nav-list">
                        <li className="nav-li">
                          <Link to={'/quizzes-list'} className="nav-link">
                            Quizzes
                          </Link>
                        </li>
                        <li className="nav-li">
                          <Link to={'/flashcards-list'} className="nav-link">
                            Flashcards                        
                          </Link>
                        </li>
                    </ul>
                </nav>
                {/* LINK TO ADD FLASHCARD ROUTE */}
                <h2>Hello, User</h2>
                <p>Access Quizzes and Flashcards you have made above, or add more with the buttons below</p>
                <Link to={'/add-flashcard'}>
                <button className="action-button">Add Flashcard</button>                
                </Link>
                {/* LINK TO MAKE QUIZ ROUTE */}
                <Link to={'/make-quiz'}>
                <button className="action-button">Make Quiz</button>                
                </Link>
            </div>
        )
    }
}

export default Home