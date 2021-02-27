import React from "react"
import { Link } from "react-router-dom"

// HOME PAGE FOR THE QUIZ ME APP

class Home extends React.Component {
    render() {
        return (
            <div>
                {/*NAVIGATION*/}
                <nav>
                    <ul>
                        <Link to={'/quizzes-list'}>
                          <li>Quizzes</li>
                        </Link>
                        <Link to={'/flashcards-list'}>
                          <li>Flashcards</li>                        
                        </Link>
                    </ul>
                </nav>
                {/* LINK TO ADD FLASHCARD ROUTE */}
                <h2>Hello, User</h2>
                <Link to={'/add-flashcard'}>
                <button>Add Flashcard</button>                
                </Link>
                {/* LINK TO MAKE QUIZ ROUTE */}
                <Link to={'/make-quiz'}>
                <button>Make Quiz</button>                
                </Link>
            </div>
        )
    }
}

export default Home