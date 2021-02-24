import React from "react"
import { Link } from "react-router-dom"

class Home extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <Link to={'/quizzes'}>
                          <li>Quizzes</li>
                        </Link>
                        <Link to={'/home'}>
                          <li>Home</li>                        
                        </Link>
                        <Link to={'/flashcards'}>
                          <li>Flashcards</li>                        
                        </Link>
                    </ul>
                </nav>
                <h2>Hello, User</h2>
                <Link to={'/add-flashcard'}>
                <button>Add Flashcard</button>                
                </Link>
                <Link to={'/make-quiz'}>
                <button>Make Quiz</button>                
                </Link>
            </div>
        )
    }
}

export default Home