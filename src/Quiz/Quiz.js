import React from 'react'
import { Link } from 'react-router-dom'
import './Quiz.css'

// QUIZ COMPONENT ON THE QUIZ ME APP
// RENDERED BY QUIZZESLIST

class Quiz extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h3>{this.props.quiz.name}</h3>
                {/* ROUTE TO THE QUIZ TAKING MODE */}
                <Link to={`/quiz-start/${this.props.quiz.quizId}`}>
                  <button>Take Quiz</button>                
                </Link>
                { /* ROUTE TO LIST VIEW OF ALL FLASHCARDS */}
                <Link to={`/quizzes/${this.props.quiz.quizId}`}>
                  <button>View Quiz</button>                
                </Link>
            </div>
        )
    }
}

export default Quiz