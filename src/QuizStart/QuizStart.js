import React from 'react'
import { Link } from 'react-router-dom'
import QuizMeContext from '../QuizMeContext'
import './QuizStart.css'

class QuizStart extends React.Component {
    static contextType = QuizMeContext
    
    constructor(props) {
        super(props)
    }

    render() {
        const { quizzes=[] } = this.context
        const quizId = Number(this.props.match.params.quizId)
        const quiz = quizzes[quizId - 1]
        return (
            <div className="quiz-start-container">
                <h2 className="quiz-start-title">Quiz Start</h2>
                <div className="quiz-card">
                  <h3>{quiz.name}</h3>
                  <p>Number of Questions: {quiz.flashcardIds.length}</p>
                </div>

                <Link to={`/quiz-active/${quiz.quizId}`}>
                <button className="start-button">Start</button>                
                </Link>
            </div>
        )
    }
}

export default QuizStart