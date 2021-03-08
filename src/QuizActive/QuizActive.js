import React from 'react'
import QuizMeContext from '../QuizMeContext'
import QuizResults from '../QuizResults/QuizResults'
import './QuizActive.css'

class QuizActive extends React.Component {
    static contextType = QuizMeContext
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            questionIdx: 0,
            flipped: false
        }
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
        const { quizzes=[] } = this.context
        const { flashcards=[] } = this.context
        const quizId = Number(this.props.match.params.quizId)
        const quiz = quizzes[quizId - 1]
        const flashcardId = quiz.flashcardIds[this.state.questionIdx]
        const flashcard = flashcards[flashcardId - 1]
        console.log(quiz)
        console.log(flashcard, flashcardId)
        
        if (!flashcardId) {
            return (
                <div className="quiz-active-results-container">
                    <QuizResults stats={{
                        quiz: quiz,
                        score: this.state.counter,
                        numOfQuestions: quiz.flashcardIds.length,
                        handleRestart: this.handleRestart
                    }} />
                </div>
            )
        }

            if (this.state.flipped === false) {
                return (
                    <div className="quiz-active-card-container">
                      <div className="quiz-active-card">
                        <h2>{flashcard.question}?</h2>
                      </div>
                        <button onClick={() => this.handleFlip()} className="quiz-active-flip">FLIP</button>
                    </div>
                )
            } else {
                return (
                    <div className="quiz-active-card-container">
                      <div className="quiz-active-card">
                          <h2>{flashcard.answer}</h2>
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