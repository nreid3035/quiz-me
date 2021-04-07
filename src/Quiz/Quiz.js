import React from 'react'
import { Link } from 'react-router-dom'
import './Quiz.css'

// QUIZ COMPONENT ON THE QUIZ ME APP
// RENDERED BY QUIZZESLIST

class Quiz extends React.Component {
    render() {
        return (
            <div className="quiz-container">
                <h3 className="quiz-name">{this.props.quiz.quiz_name}</h3>
                <div className="quiz-buttons-conatiner">
                {/* ROUTE TO THE QUIZ TAKING MODE */}
                  <Link to={`/quiz-start/${this.props.quiz.prime_quiz_id}`} className="quiz-button-link">
                    <button className="quiz-button">Take Quiz</button>                
                  </Link>
                { /* ROUTE TO LIST VIEW OF ALL FLASHCARDS */}
                  <Link to={`/quizzes/${this.props.quiz.prime_quiz_id}`} className="quiz-button-link">
                    <button className="quiz-button">View Quiz</button>                
                  </Link>
                </div>
            </div>
        )
    }
}

export default Quiz