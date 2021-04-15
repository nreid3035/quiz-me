import React from 'react'
import API_BASE_URL from '../config'
import QuizMeContext from '../QuizMeContext'
import QuizResults from '../QuizResults/QuizResults'
import './QuizActive.css'

class QuizActive extends React.Component {
    static contextType = QuizMeContext
    // STATE HOLDS DETAILS OF THE QUIZ AND INFO ABOUT THE QUESTION #, SCORE, AND 
    // WHETHER OR NOT THE CURRENT CARD IS FLIPPED
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

    // MOUNT A COMPONENT TO GET THE QUIZ BY ID
    componentDidMount() {
        fetch(`${API_BASE_URL}/quizzes/${this.props.match.params.quizId}`, {
            headers: {
                'session_token': localStorage.getItem('session_token')
            }
        })
        .then(response => response.json())
        .then(responseJson => {
            // PASS FETCH RESPONSE IN TO BE ADDED TO STATE
            this.handleQuizFetch(responseJson)
            return responseJson
        })
    }

    // HANDLES ADDING FETCH RESPONSE TO THE STATE
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

    // HANDLES FLIPPING THE CARD FROM Q TO A AND VICE VERSA
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

    // HANDLES A CLICKING OF THE CORRECT BUTTON, ADDS 1 TO QUESTIONIDX AND COUNTER, MAKES FLIPPED FALSE AGAIN
    handleCorrect = () => {
        this.setState({
            questionIdx: this.state.questionIdx + 1,
            counter: this.state.counter + 1,
            flipped: false
        })
    }

    // HANDLES A CLICKING OF THE WRONG BUTTON, ADDS 1 TO QUESTIONIDX AND MAKES FLIPPED FALSE AGAIN
    handleWrong = () => {
        this.setState({
            questionIdx: this.state.questionIdx + 1,
            flipped: false
        })
    }

    // HANDLES A CLICKING OF THE RESTART BUTTON, BRINGS QUESTIONIDX AND COUNTER TO 0, FLIPPED WITLL BE FALSE
    handleRestart = () => {
        this.setState({
            questionIdx: 0,
            counter: 0,
            flipped: false   
        })
    }

    render() {
        const quiz = this.state.quiz

        // IF QUESTION IDX DOESNT EXIST RETURN QUIZ RESULTS
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

            // IF STATE OF CARD IS NOT FLIPPED(FALSE) DISPLAY QUESTION
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
                // ELSE IF CARD IS FLIPPED(TRUE) DISPLAY ANSWER, AND RIGHT/WRONG BUTTONS
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