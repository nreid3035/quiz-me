import React from 'react'
import Flashcard from '../Flashcard/Flashcard'
import QuizMeContext from '../QuizMeContext'

class MakeQuiz extends React.Component {
    static contextType = QuizMeContext
    constructor(props) {
        super(props)
        this.state = {
            flashcardsForQuizId: []
        }
    }

    handleMakeQuiz = (e) => {
        e.preventDefault()
        const newQuiz = {
            name: e.target['quiz-name'].value,
            flashcardIds: [
                ...this.state.flashcardsForQuizId
            ]
        }
        this.context.handleAddQuiz(newQuiz)
        this.props.history.push('/home')
    }

    handleCheckboxChange = (e) => {
        console.log(e)
        if (e.target.checked === true) {
            this.setState({
                flashcardsForQuizId: [
                    ...this.state.flashcardsForQuizId,
                    e.target.id
                ]
            })
        } else {
            if (this.state.flashcardsForQuizId.length > 1) {
                this.setState({
                    flashcardsForQuizId: [
                        ...this.state.flashcardsForQuizId.splice(e.target.id - 1, 1)
                    ]
                })
            } else {
                this.setState({
                    flashcardsForQuizId: []
                })
            }
            
            }
        }
        
     

    render() {
        console.log(this.state)
        const { flashcards=[] } = this.context
        const flashcardCheckboxes = flashcards.map((card, i) => {
            return (
                <>
                    <label htmlFor="checkbox">
                        <Flashcard card={card} key={i} />
                    </label>
                    <input type="checkbox" name="checkbox" id={i + 1} value={card.cardId} 
                           onChange={(e) => this.handleCheckboxChange(e)}/>
                </>
            )
            
        })
        return (
            <>
            <h1>Make Quiz</h1>
            <form onSubmit={(e) => this.handleMakeQuiz(e)}>
                <label htmlFor="quiz-name">Quiz Name</label>
                <input type="text" name="quiz-name" id="quiz-name"/>
                {flashcardCheckboxes}
                <button type="submit">Submit</button>
            </form>
            </>
        )
    }
}

export default MakeQuiz