import React from 'react'
import { Route } from 'react-router-dom'
import QuizMeContext from '../QuizMeContext'

class FlashcardActive extends React.Component {
    static contextType = QuizMeContext
    constructor(props) {
        super(props)
        this.state = {
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

    render() {
        const { flashcards=[] } = this.context
        let index = Number(this.props.match.params.cardId) - 1
        console.log(index)
        const question = flashcards[index].question
        const answer = flashcards[index].answer
        console.log(question)
        console.log(this.props)
        console.log(flashcards)
        let render
        if (this.state.flipped === false) {
            return (
            <div>
                <h2>{question}</h2>
                <button onClick={this.handleFlip}>FLIP</button>
            </div>
            )
        } else {
            return (
                <div>
                    <h2>{answer}</h2>
                    <button>Correct</button>
                    <button>Wrong</button>
                    <button onClick={this.handleFlip}>FLIP</button>
                </div>
            )  
        }
        
    }
}

export default FlashcardActive