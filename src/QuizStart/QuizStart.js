import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import QuizMeContext from '../QuizMeContext'
import './QuizStart.css'

class QuizStart extends React.Component {
    static contextType = QuizMeContext
    // STATE HOLDS QUIZ NAME AND THE NUMBER OF QUESTIONS
    constructor(props) {
        super(props)
        this.state = {
            quiz_name: '',
            numOfQs: 0
        }
    }

    // SETS STATE OF QUIZ START FROM THE FETCH RESPONSE
    setQuizStartState = (quizInfo) => {
        this.setState({
            quiz_name: quizInfo[0].quiz_name,
            numOfQs: quizInfo.length
        })
    }

    // MOUNT COMPONENT TO FETCH QUIZ BY ID
    componentDidMount() {
        fetch(`${config.API_BASE_URL}/quizzes/${this.props.match.params.quizId}`, {
            headers: {
                'session_token': localStorage.getItem('session_token')
            }
        })
        .then(response => response.json())
        .then(responseJson => {
            // PASS RESPONSE TO QUIZSTART HANDLER
            this.setQuizStartState(responseJson)
        })
    }

    render() {
        const quizId = Number(this.props.match.params.quizId)
        return (
            <div className="quiz-start-container">
                <div className="page-header-container">
                    <button className="back-button"
                    onClick={() => this.props.history.goBack()}>Back</button>
                    <h2 className="quiz-start-title">Quiz Start</h2>
                </div>
                <div className="quiz-card">
                  <h3>{this.state.quiz_name}</h3>
                  <p>Number of Questions: {this.state.numOfQs}</p>
                </div>

                <Link to={`/quiz-active/${quizId}`}>
                <button className="start-button">Start</button>                
                </Link>
            </div>
        )
    }
}

export default QuizStart