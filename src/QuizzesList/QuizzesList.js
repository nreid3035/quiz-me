import React from 'react'
import QuizMeContext from '../QuizMeContext'
import Quiz from '../Quiz/Quiz'
import { Link } from 'react-router-dom'

// QUIZZES LIST COMPONENT OF QUIZ ME APP

class QuizzesList extends React.Component {
    // DECLARE CONTEXT TYPE
    static contextType = QuizMeContext
   
    render() {
        // QUIZZES ARRAY FROM CONTEXT
        const { quizzes=[] } = this.context

        // ARRAY OF LIST ELEMENTS CONTAINING QUIZ COMPONENTS
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