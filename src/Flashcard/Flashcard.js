import React from 'react'
import { Link } from 'react-router-dom'
import './Flashcard.css'

// FLASHCARD COMPONENT OF THE QUIZ ME APP
// RENDERED BY FLASHCARDLIST OR VIEWQUIZ

class Flashcard extends React.Component {
    render() {
        if (this.props.cardQuestion) {
          return (
            <div className="flashcard">
              <h3 className="flash-question">{this.props.cardQuestion}</h3>
            </div>
          )
        }
        return (
            // ROUTES TO FLASHCARDACTIVE, DISPLAYS QUESTION
            <Link to={`/flashcard/${this.props.card.cardId}`} className="flash-link">
              <div className="flashcard">
                <h3 className="flash-question">{this.props.card.question}?</h3> 
              </div>
            </Link>
            
        )
    }
}

export default Flashcard