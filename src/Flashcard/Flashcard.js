import React from 'react'
import { Link } from 'react-router-dom'

class Flashcard extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <Link to={`/flashcard/${this.props.card.cardId}`}>
              <div>
                <h3>Question: {this.props.card.question}</h3> 
              </div>
            </Link>
            
        )
    }
}

export default Flashcard