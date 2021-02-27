import React from 'react'
import { Link } from 'react-router-dom'
import QuizMeContext from '../QuizMeContext'

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
            <div>
                <h2>Quiz Start</h2>
                <h3>{quiz.name}</h3>
                <p>Number of Questions: {quiz.flashcardIds.length}</p>
                <Link to={`/quiz-active/${quiz.quizId}`}>
                <button>Start</button>                
                </Link>
            </div>
        )
    }
}

export default QuizStart