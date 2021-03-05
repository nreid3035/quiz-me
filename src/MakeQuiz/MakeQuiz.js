import React from 'react'
import Flashcard from '../Flashcard/Flashcard'
import QuizMeContext from '../QuizMeContext'
import './MakeQuiz.css'

// MAKE QUIZ COMPONENT OF QUIZ ME APP CURRENTLY MAKING NO REQUESTS

class MakeQuiz extends React.Component {
    // DECLARE CONTEXT TYPE
    static contextType = QuizMeContext

    constructor(props) {
        super(props)
        // STATE HOLDS CHECKED FLASHCARD IDS
        this.state = {
            flashcardsForQuizId: []
        }
    }

    // HANDLES SUBMIT OF THE MAKE QUIZ FORM
    handleMakeQuiz = (e) => {
        // PREVENT DEFAULT ACTION (REFRESH)
        e.preventDefault()

        // MAKE NEW QUIZ OBJECT TO PUSH TO STATE
        const newQuiz = {
            quizId: this.context.quizzes.length + 1,
            name: e.target['quiz-name'].value,
            flashcardIds: [
                ...this.state.flashcardsForQuizId
            ]
        }

        // USE HANDLE ADD QUIZ TO PUSH NEW QUIZ TO STATE
        this.context.handleAddQuiz(newQuiz)

        // REROUTE TO QUIZZES LIST
        this.props.history.push('/quizzes-list')
    }

    // HANDLES THE CHANGING OF A CHECKBOX, ADDS OR REMOVES THE ID OF THE FLASHCARD TO THE STATE
    handleCheckboxChange = (e) => {
        // E IS THE CLICKING OF THE BOX, TARGET IS THE ASSOCIATED FLASHCARD

        // IF CHECKBOX IS CHECKED ADD ID TO STATE
        if (e.target.checked === true) {
            this.setState({
                flashcardsForQuizId: [
                    ...this.state.flashcardsForQuizId,
                    Number(e.target.id)
                ]
            })
            // ELSE REMOVE ID FROM THE STATE
        } else {
            // IF THE LENGTH OF IDS ARRAY IS GREATER THAN 1 SPLICE
            if (this.state.flashcardsForQuizId.length > 1) {
                this.setState({
                    flashcardsForQuizId: [
                        ...this.state.flashcardsForQuizId.splice(e.target.id - 1, 1)
                    ]
                })
                // ELSE RETURN EMPTY ARRAY
            } else {
                this.setState({
                    flashcardsForQuizId: []
                })
            }
            
            }
        }
        
     

    render() {
        // FLASHCARDS ARRAY FROM CONTEXT
        const { flashcards=[] } = this.context

        // ARRAY OF CHECKBOX ELEMENTS MAPPED FROM FLASHCARDS ARRAY
        const flashcardCheckboxes = flashcards.map((card, i) => {
            return (
                <div className="flashcard-checkbox-container">
                    <input type="checkbox" className="flashcard-checkbox-input" name="checkbox" id={i + 1} value={card.cardId}
                           /* ON CHANGE USE HANDLE CHECKBOX CHANGE FUNCTION, PASS IN EVENT */ 
                           onChange={(e) => this.handleCheckboxChange(e)}/>
                    <label htmlFor="checkbox" className="flashcard-checkbox-label">
                        <Flashcard card={card} key={i} />
                    </label>
                    
                </div>

        )
            
        })
        return (
            <div className="make-quiz-container">
              <h1>Make Quiz</h1>
              {/* ON SUBMIT OF MAKE QUIZ FORM USE HANDLE MAKE QUIZ FUNCTION, PASS IN EVENT */}
            <form onSubmit={(e) => this.handleMakeQuiz(e)} className="make-quiz-form">
                <label htmlFor="quiz-name" className="quiz-name-label">Quiz Name</label>
                <input type="text" name="quiz-name" id="quiz-name" className="quiz-name-input" required/>
                {flashcardCheckboxes}
                <button type="submit" className="make-quiz-submit">Submit</button>
            </form>
            </div>

        )
    }
}

export default MakeQuiz