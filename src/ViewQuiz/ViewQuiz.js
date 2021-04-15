import React from 'react'
import { Link } from 'react-router-dom'
import Flashcard from '../Flashcard/Flashcard'
import QuizMeContext from '../QuizMeContext'
import './ViewQuiz.css'
import API_BASE_URL from '../config'

class ViewQuiz extends React.Component {
    static contextType = QuizMeContext

    constructor(props) {
        super(props)
        this.state = {
            quiz_name: '',
            questions: []
        }
    }

    setQuizState = (quiz) => {
        this.setState({
            quiz_name: quiz[0].quiz_name,
            questions: quiz
        })
    }

    componentDidMount() {
        fetch(`${API_BASE_URL}/quizzes/${this.props.match.params.quizId}`, {
            headers: {
                'session_token': localStorage.getItem('session_token')
            }
        })
        .then(response => response.json())
        .then(responseJson => {
            this.setQuizState(responseJson)
            return
        })
    }
    
    
    handleDeleteClick = (quizId) => {
        fetch(`${API_BASE_URL}/quizzes/${quizId}`, {
            method: 'DELETE',
            headers: {
                'session_token': localStorage.getItem('session_token')
            }
        })
        .then(response => response.json())
        .then(responseJson => {
            return responseJson
        })
        this.props.history.push('/home')
    }

    

    render() {
        const quizId = Number(this.props.match.params.quizId)
        const flashcardElements = this.state.questions.map((card, i) => {
            return <li className="view-quiz-flash-li">
                <Flashcard card={card} key={i}/>
                   </li>
        })
        return (
            <div className="view-quiz-container">
                <h2 className="view-quiz-name">{this.state.quiz_name}</h2>
                <div className="view-quiz-buttons">
                    <button className="view-quiz-button"
                      onClick={() => this.props.history.goBack()}>Back</button>
                    <button className="view-quiz-button"
                      onClick={() => this.handleDeleteClick(quizId)}>Delete</button>
                </div>
                <ul className="view-quiz-flash-list">
                    {flashcardElements}
                </ul>
                <Link to={`/quiz-start/${this.props.match.params.quizId}`}>
                  <button className="take-quiz-button">Take Quiz</button>                
                </Link>
            </div>
        )
    }
}

export default ViewQuiz