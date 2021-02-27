import React from 'react'
import { Link } from 'react-router-dom'

// FLASHCARD COMPONENT OF THE QUIZ ME APP
// RENDERED BY FLASHCARDLIST OR VIEWQUIZ

class Flashcard extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            // ROUTES TO FLASHCARDACTIVE, DISPLAYS QUESTION
            <Link to={`/flashcard/${this.props.card.cardId}`}>
              <div>
                <h3>Question: {this.props.card.question}</h3> 
              </div>
            </Link>
            
        )
    }
}

export default Flashcard