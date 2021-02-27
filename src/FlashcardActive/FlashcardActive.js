import React from 'react'
import QuizMeContext from '../QuizMeContext'

// ACTIVE FLASHCARD COMPONENT FOR QUIZ ME APP 
// DISPLAYS QUESTION
// FLIPS ON CLICK
// DISPLAYS ANSWER

class FlashcardActive extends React.Component {
    // DECLARE CONTEXT TYPE
    static contextType = QuizMeContext
    constructor(props) {
        super(props)
        // USE STATE TO TRACK IF CARD IS FLIPPED OR NOT
        // FALSE IS QUESTION SIDE
        this.state = {
            flipped: false
        }
    }

    // USE ON CLICK OF FLIP BUTTON TO FLIP FROM QUESTION TO ANSWER
    // OR VICE VERSA
    handleFlip = () => {
        // IF THE STATE OF FLIPPED IS FALSE SET STATE TO TRUE
        if (this.state.flipped === false) {
            this.setState({
                flipped: true
            })
            // ELSE SET STATE OF FLIPPED TO FALSE
        } else {
            this.setState({
                flipped: false
            })
        }
        
    }

    render() {
        // FLASHCARDS ARRAY FROM CONTEXT
        const { flashcards=[] } = this.context

        // INDEX IS THE CARD ID -1 CARD ID COMES FROM URL ROUTE
        let index = Number(this.props.match.params.cardId) - 1
        
        const question = flashcards[index].question
        const answer = flashcards[index].answer

        // IF THE STATE OF FLIPPED IS FALSE RENDER WITH THE QUESTION
        if (this.state.flipped === false) {
            return (
            <div>
                <h2>{question}</h2>
                <button onClick={this.handleFlip}>FLIP</button>
            </div>
            )
            // ELSE RENDER USING THE ANSWER
        } else {
            return (
                <div>
                    <h2>{answer}</h2>
                    <button onClick={this.handleFlip}>FLIP</button>
                </div>
            )  
        }
        
    }
}

export default FlashcardActive