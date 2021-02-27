import React from 'react'
import QuizMeContext from '../QuizMeContext'
import QuizResults from '../QuizResults/QuizResults'

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
                <div>
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
                    <div>
                        <h2>{flashcard.question}</h2>
                        <button onClick={() => this.handleFlip()}>FLIP</button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h2>{flashcard.answer}</h2>
                        <button onClick={() => this.handleCorrect()}>Correct</button>
                        <button onClick={() => this.handleWrong()}>Wrong</button>
                        <button onClick={() => this.handleFlip()}>FLIP</button>
                    </div>
                )
            }
        }
    
}

export default QuizActive