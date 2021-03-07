import React from "react"
import { Link } from "react-router-dom"
import './Home.css'

// HOME PAGE FOR THE QUIZ ME APP

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <h2>Hello, User</h2>
                {/*NAVIGATION*/}
                <nav className="home-nav">
                    <ul className="nav-list">
                          <Link to={'/quizzes-list'} className="nav-link">
                            <li className="nav-li">
                              Quizzes
                            </li>
                          </Link>
                        
                          <Link to={'/flashcards-list'} className="nav-link">
                            <li className="nav-li">
                              Flashcards                        
                            </li>
                          </Link>
                    </ul>
                </nav>
                {/* LINK TO ADD FLASHCARD ROUTE */}
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