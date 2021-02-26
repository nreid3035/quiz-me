import React from 'react'
import QuizMeContext from '../QuizMeContext'

class AddFlashcard extends React.Component {
    static contextType = QuizMeContext

    handleSubmit = (e) => {
        e.preventDefault()
        const newFlashcard = {
            cardId: this.context.flashcards.length + 1,
            question: e.target['question'].value,
            answer: e.target['answer'].value
        }
        this.context.handleAddFlashcard(newFlashcard)
        this.props.history.push(`/flashcards-list`)
    }
    
    render() {
        return (
            <div>
                <h2>Add Flashcard</h2>
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