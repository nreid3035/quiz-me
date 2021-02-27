import React from 'react'
import { Link } from 'react-router-dom'

class QuizResults extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>{this.props.stats.quiz.name}</h2>
                <p>Final Score: {this.props.stats.score}/{this.props.stats.numOfQuestions}</p>
                <button onClick={() => this.props.stats.handleRestart()}>Retake Quiz</button>
                <Link to="/home">
                <button>Home</button>                
                </Link>
            </div>
        )
    }
}

export default QuizResults