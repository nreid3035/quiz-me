import React from 'react'
import QuizMeContext from '../QuizMeContext'
import Quiz from '../Quiz/Quiz'
import { Link } from 'react-router-dom'
import './QuizzesList.css'
import config from '../config'

// QUIZZES LIST COMPONENT OF QUIZ ME APP

class QuizzesList extends React.Component {
    // DECLARE CONTEXT TYPE
    static contextType = QuizMeContext   

    // MOUNT A GET FETCH REQUEST OF ALL QUIZZES
    componentDidMount() {
      fetch(`${config.API_BASE_URL}/quizzes`, {
        headers: {
          'session_token': localStorage.getItem('session_token')
        }
      })
      .then(response => response.json())
      .then(responseJson => {
        // PASS RESPONSE INTO HANDLER TO ADD QUIZZES TO STATE
        this.context.setQuizzes(responseJson)
      })

    }
   
    render() {
        

        // ARRAY OF LIST ELEMENTS CONTAINING QUIZ COMPONENTS
        const quizElements = this.context.quizzes.map(quiz => {
            return <li className="quiz-li">
                     <Quiz quiz={quiz}/>
                   </li>
        })
        return (
            <div className="quizzes-list-container">
              <h2 className="quizzes-list-title">Quizzes</h2>
              <ul className="quiz-list">
                {quizElements}
              </ul>
              <Link to="/make-quiz">
                <button className="make-button">Make Quiz</button>            
              </Link>
            </div>
        )
    }
}

export default QuizzesList