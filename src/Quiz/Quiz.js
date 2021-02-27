import React from 'react'
import { Link } from 'react-router-dom'

class Quiz extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>{this.props.quiz.name}</h3>
                <Link to={`/quiz-start/${this.props.quiz.quizId}`}>
                  <button>Take Quiz</button>                
                </Link>
                <Link to={`/quizzes/${this.props.quiz.quizId}`}>
                  <button>View Quiz</button>                
                </Link>
            </div>
        )
    }
}

export default Quiz