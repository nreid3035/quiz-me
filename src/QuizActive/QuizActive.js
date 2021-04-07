import React from 'react'
import config from '../config'
import QuizMeContext from '../QuizMeContext'
import QuizResults from '../QuizResults/QuizResults'
import './QuizActive.css'

class QuizActive extends React.Component {
    static contextType = QuizMeContext
    constructor(props) {
        super(props)
        this.state = {
            quiz: {
                quizName: '',
                questions: [],
                answers: []
            },
            counter: 0,
            questionIdx: 0,
            flipped: false
        }
    }

    componentDidMount() {
        fetch(`${config.API_BASE_URL}/quizzes/${this.props.match.params.quizId}`, {
            headers: {
                'session_token': localStorage.getItem('session_token')
            }
        })
        .then(response => response.json())
        .then(responseJson => {
            this.handleQuizFetch(responseJson)
            return console.log(responseJson)
        })
    }

    handleQuizFetch = (quiz) => {
        const questions = []
        const answers = []
        for (let i = 0; i < quiz.length; i++) {
            questions.push(quiz[i].question)
            answers.push(quiz[i].answer)
        
        }
            
        this.setState({
            quiz: {
                quizName: quiz[0].quiz_name,
                questions: questions,
                answers: answers,
            }
        })
    }

    handleFlip = () => {
        if (this.state.flipped === false) {
            this.setState({
                flipped: true
            })
        } else {
            this.setState({
                flipped: false
            })
        }
        
    }

    handleCorrect = () => {
        this.setState({
            questionIdx: this.state.questionIdx + 1,
            counter: this.state.counter + 1,
            flipped: false
        })
    }

    handleWrong = () => {
        this.setState({
            questionIdx: this.state.questionIdx + 1,
            flipped: false
        })
    }

    handleRestart = () => {
        this.setState({
            questionIdx: 0,
            counter: 0,
            flipped: false   
        })
    }

    render() {
        console.log(this.state)
        const quizId = Number(this.props.match.params.quizId)
        const quiz = this.state.quiz
        console.log(quiz)
        
        if (!quiz.questions[this.state.questionIdx]) {
            return (
                <div className="quiz-active-results-container">
                    <QuizResults stats={{
                        quiz: quiz,
                        score: this.state.counter,
                        numOfQuestions: quiz.questions.length,
                        handleRestart: this.handleRestart
                    }} />
                </div>
            )
        }

            if (this.state.flipped === false) {
                return (
                    <div className="quiz-active-card-container">
                      <div className="quiz-active-card">
                        <h2>{quiz.questions[this.state.questionIdx]}?</h2>
                      </div>
                        <button onClick={() => this.handleFlip()} className="quiz-active-flip">FLIP</button>
                    </div>
                )
            } else {
                return (
                    <div className="quiz-active-card-container">
                      <div className="quiz-active-card">
                          <h2>{quiz.answers[this.state.questionIdx]}</h2>
                      </div>
                          <button onClick={() => this.handleFlip()} className="quiz-active-flip">FLIP</button>
                          <div className="response-button-container">
                              <button onClick={() => this.handleCorrect()} className="response-button" id="correct">Correct</button>
                              <button onClick={() => this.handleWrong()} className="response-button" id="wrong">Wrong</button>
                          </div>
                    </div>
                )
            }
        }
    
}

export default QuizActive