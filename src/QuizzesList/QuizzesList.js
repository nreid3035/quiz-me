import React from 'react'
import QuizMeContext from '../QuizMeContext'
import Quiz from '../Quiz/Quiz'
import { Link } from 'react-router-dom'

class QuizzesList extends React.Component {
    static contextType = QuizMeContext
    render() {
        const { quizzes=[] } = this.context
        const quizElements = quizzes.map(quiz => {
            return <li>
                <Quiz quiz={quiz}/>
            </li>
        })
        return (
            <>
            <h1>Quizzes</h1>
            <ul>
            {quizElements}
            </ul>
            <Link to="/make-quiz">
            <button>Make Quiz</button>            
            </Link>
            </>
        )
    }
}

export default QuizzesList