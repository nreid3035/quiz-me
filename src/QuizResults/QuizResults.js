import React from 'react'
import { Link } from 'react-router-dom'
import './QuizResults.css'

class QuizResults extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="quiz-results-container">
                <h2 className="results-title">Results</h2>
                <div className="results">
                  <h3>{this.props.stats.quiz.name}</h3>
                  <p>Final Score: {this.props.stats.score}/{this.props.stats.numOfQuestions}</p>
                </div>
                <button onClick={() => this.props.stats.handleRestart()} className="results-button">Retake Quiz</button>
                <Link to="/home" className="quiz-results-button-container">
                <button className="results-button">Home</button>                
                </Link>
            </div>
        )
    }
}

export default QuizResults