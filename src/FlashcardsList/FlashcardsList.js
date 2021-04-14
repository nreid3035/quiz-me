import React from 'react' 
import { Link } from 'react-router-dom'
import API_BASE_URL from '../config'
import config from '../config'
import Flashcard from '../Flashcard/Flashcard'
import QuizMeContext from '../QuizMeContext'
import './FlashcardsList.css'

// FLASHCARDS LIST COMPONENT OF QUIZ ME APP

class FlashcardsList extends React.Component {
    // DECLARE CONTEXT TYPE
    static contextType = QuizMeContext 
    
    // MOUNTED GET REQUEST TO API/FLASHCARDS
    componentDidMount() {
      fetch(`${API_BASE_URL}/flashcards`, {
        headers: {
          'session_token': localStorage.getItem('session_token')
        }
      })
      .then(response => response.json())
      .then(responseJson => {
        // SET STATE USING FETCH RESPONSE
        this.context.setFlashcards(responseJson)
      })
    }


    render() { 

        // ARRAY OF LIST ELEMENTS CONTAINING FLASHCARD COMPONENTS
        const flashcardComps = this.context.flashcards.map((card, i) => {
            return (
                <li className="flashcard-li">
                  <Flashcard card={card} key={i}/>  
                </li>
            )
        })
        return (
            <div className="flashcard-list-container">
              <h2 className="flashcard-list-title">Flashcards</h2>
              <ul className="flashcard-list">
                {flashcardComps}
              </ul>
              <Link to="/add-flashcard">
                <button className="add-flashcard-button">Add Flashcard</button>              
              </Link>
            </div>           
        )
    }
}

export default FlashcardsList