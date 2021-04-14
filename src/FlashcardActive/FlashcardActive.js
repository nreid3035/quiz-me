import React from 'react'
import config from '../config'
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
            flipped: false,
            question: '',
            answer: ''
        }
    }

    // SET STATE TO HOLD THE FLASHCARD QUESTION AND ANSWER
    handleQAChange = (flashcard) => {
        this.setState({
          question: flashcard.question,
          answer: flashcard.answer
        })
    }

    // MOUNT A FETCH REQUEST TO GET THE FLASHCARD BY ID 
    componentDidMount() {
      fetch(`${config.API_BASE_URL}/flashcards/${this.props.match.params.cardId}`, {
        headers: {
          'session_token': localStorage.getItem('session_token')
        }
      })
      .then(response => response.json())
      .then(responseJson => {
        // PASS RESPONSE TO QA HANDLER
        return this.handleQAChange(responseJson)
      })
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

    // DELETE FLASHCARD BY ID HANDLER
    handleDeleteClick = (flashcardId) => {
        // DELETE FETCH REQUEST
        fetch(`${config.API_BASE_URL}/flashcards/${flashcardId}`, {
          method: 'DELETE',
          headers: {
            'session_token': localStorage.getItem('session_token')
          }
        })
        .then(response => response.json())
        .then(responseJson => {
          return responseJson
        })
        // REROUTE BACK TO THE HOME PAGE ON COMPLETION
        this.props.history.push('/home')
    }

    render() {
        // INDEX IS THE CARD ID -1 CARD ID COMES FROM URL ROUTE
        const cardId = Number(this.props.match.params.cardId)
        const question = this.state.question
        const answer = this.state.answer

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