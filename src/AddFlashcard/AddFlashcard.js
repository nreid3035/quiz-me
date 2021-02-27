import React from 'react'
import QuizMeContext from '../QuizMeContext'

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
            <div>
                <h2>Add Flashcard</h2>
                {/* ADD FLASHCARD FORM */}
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="question">Question</label>
                    <input type="text" name="question" id="question"/>
                    <label htmlFor="answer">Answer</label>
                    <input type="text" name="answer" id="answer"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFlashcard