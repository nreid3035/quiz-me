import React from 'react'
import QuizMeContext from '../QuizMeContext'
import './AddFlashcard.css'

// ADD FLASHCARD FORM FOR QUIZ ME APP CURRENTLY MAKING NO REQUESTS

class AddFlashcard extends React.Component {
    // DECLARE CONTEXT TYPE
    static contextType = QuizMeContext

    // HANDLE SUBMIT FUNCTION FOR ADD FLASHCARD FORM
    handleSubmit = (e) => {
        // PREVENT DEFAULT REFRESH OF PAGE
        e.preventDefault()
        
        // CREATE FLASHCARD OBJECT TO ADD TO STATE
        const newFlashcard = {
            cardId: this.context.flashcards.length + 1,
            question: e.target['question'].value,
            answer: e.target['answer'].value
        }

        // USE HANDLE ADD FLASHCARD FUNCTION FROM CONTEXT
        this.context.handleAddFlashcard(newFlashcard)

        // REROUTE BACK TO FLASHCARDS LIST
        this.props.history.push(`/flashcards-list`)
    }
    
    render() {
        return (
            <div className="add-flashcard-container">
                <h2 className="add-flashcard-title">Add Flashcard</h2>
                {/* ADD FLASHCARD FORM */}
                <form onSubmit={(e) => this.handleSubmit(e)} className="add-flashcard-form">
                    <label htmlFor="question" className="add-flash-label">Question</label>
                    <input type="text" name="question" id="question" className="add-flash-input" required/>
                    <label htmlFor="answer" className="add-flash-label">Answer</label>
                    <input type="text" name="answer" id="answer" className="add-flash-input" required/>
                    <button type="submit" className="add-flash-submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFlashcard