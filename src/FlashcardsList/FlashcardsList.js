import React from 'react' 
import { Link } from 'react-router-dom'
import Flashcard from '../Flashcard/Flashcard'
import QuizMeContext from '../QuizMeContext'

class FlashcardsList extends React.Component {
    static contextType = QuizMeContext

    render() {
        const { flashcards=[] } = this.context
        const flashcardComps = flashcards.map((card, i) => {
            return <Flashcard card={card} key={i}/>  
        })
        return (
            <div>
              <h1>Flashcards</h1>
              {flashcardComps}
              <Link to="/add-flashcard">
              <button>Add Flashcard</button>              
              </Link>
            </div>           
        )
    }
}

export default FlashcardsList