import React from 'react'
import Flashcard from '../Flashcard/Flashcard'
import QuizMeContext from '../QuizMeContext'

class ViewQuiz extends React.Component {
    static contextType = QuizMeContext

    constructor(props) {
        super(props)
    }

    render() {
        const quizId = Number(this.props.match.params.quizId)
        console.log(quizId)
        const { flashcards=[] } = this.context
        const { quizzes=[] } = this.context
        console.log(quizzes)
        const quiz = quizzes[quizId - 1]
        const quizFlashcards = flashcards.filter(card => quiz.flashcardIds.includes(card.cardId))
        console.log(quizFlashcards)
        const flashcardElements = quizFlashcards.map((card, i) => {
            return <li>
                <Flashcard card={card} key={i}/>
            </li>
        })
        return (
            <div>
                <h1>{quiz.name}</h1>
                <ul>
                    {flashcardElements}
                </ul>
                <button>Take Quiz</button>
            </div>
        )
    }
}

export default ViewQuiz