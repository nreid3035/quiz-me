import React from 'react'
import QuizMeContext from '../QuizMeContext'
import './FlashcardActive.css'

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

    handleDeleteClick = (flashcardId) => {
        this.context.handleFlashcardDelete(flashcardId)
        this.props.history.push('/home')
    }

    render() {
        // FLASHCARDS ARRAY FROM CONTEXT
        const { flashcards=[] } = this.context

        // INDEX IS THE CARD ID -1 CARD ID COMES FROM URL ROUTE
        const cardId = Number(this.props.match.params.cardId)
        const flashcard = flashcards.filter(card => card.cardId === cardId)
        console.log(flashcard)
        const question = flashcard[0].question
        const answer = flashcard[0].answer

        // IF THE STATE OF FLIPPED IS FALSE RENDER WITH THE QUESTION
        if (this.state.flipped === false) {
            return (
            <div className="flashcard-active-container">

              <div className="flashcard-buttons">
                <button className="flashcard-button"
                  onClick={() => this.props.history.goBack()}>Back</button>
                <button className="flashcard-button"
                  onClick={() => this.handleDeleteClick(cardId)}>Delete</button>
              </div>
            
        
              <div className="card" id="front">
                <h2>{question}</h2>
              </div>
                <button onClick={this.handleFlip} className="flip-button">FLIP</button>
            </div>

            )
            // ELSE RENDER USING THE ANSWER
        } else {
            return (
                <div className="flashcard-active-container">
                  <div className="flashcard-buttons">
                    <button className="flashcard-button"
                      onClick={() => this.props.history.goBack()}>Back</button>
                    <button className="flashcard-button"
                      onClick={() => this.handleDeleteClick(cardId)}>Delete</button>
                  </div>
                  <div className="card" id="back">
                    <h2>{answer}</h2>
                  </div>
                  <button onClick={this.handleFlip} className="flip-button">FLIP</button>
                </div>


            )  
        }
        
    }
}

export default FlashcardActive