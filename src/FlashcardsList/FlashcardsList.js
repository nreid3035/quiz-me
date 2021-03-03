import React from 'react' 
import { Link } from 'react-router-dom'
import Flashcard from '../Flashcard/Flashcard'
import QuizMeContext from '../QuizMeContext'
import './FlashcardsList.css'

// FLASHCARDS LIST COMPONENT OF QUIZ ME APP

class FlashcardsList extends React.Component {
    // DECLARE CONTEXT TYPE
    static contextType = QuizMeContext

    render() {
        // FLASHCARDS ARRAY FROM CONTEXT
        const { flashcards=[] } = this.context

        // ARRAY OF LIST ELEMENTS CONTAINING FLASHCARD COMPONENTS
        const flashcardComps = flashcards.map((card, i) => {
            return (
                <li className="flashcard-li">
                  <Flashcard card={card} key={i}/>  
                </li>
            )
        })
        return (
            <div>
              <h1>Flashcards</h1>
              <ul className="flashcard-list">
                {flashcardComps}
              </ul>
              <Link to="/add-flashcard">
                <button>Add Flashcard</button>              
              </Link>
            </div>           
        )
    }
}

export default FlashcardsList