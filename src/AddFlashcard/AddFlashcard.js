import React from 'react'
import API_BASE_URL from '../config'
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
            question: e.target['question'].value,
            answer: e.target['answer'].value,
        }

        // POST FETCH REQUEST TO API/FLASHCARDS ENDPOINT
        fetch(`${API_BASE_URL}/flashcards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'session_token': localStorage.getItem('session_token')

            },
            body: JSON.stringify(newFlashcard)
        })
        .then(response => response.json())
        .then(responseJson => {
            // ADD TO STATE OF FLASHCARDS LIST
            this.context.setFlashFromPost(responseJson)
        })

        // REROUTE BACK TO FLASHCARDS LIST
        this.props.history.push(`/flashcards-list`)
    }
    
    render() {
        return (
            <div className="add-flashcard-container">
                <div className="page-header-container">
                    <button className="back-button"
                    onClick={() => this.props.history.goBack()}>Back</button>
                    <h2 className="add-flashcard-title">Add Flashcard</h2>
                </div>
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