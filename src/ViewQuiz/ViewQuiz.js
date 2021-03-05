import React from 'react'
import { Link } from 'react-router-dom'
import Flashcard from '../Flashcard/Flashcard'
import QuizMeContext from '../QuizMeContext'
import './ViewQuiz.css'

class ViewQuiz extends React.Component {
    static contextType = QuizMeContext

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        const quizId = Number(this.props.match.params.quizId)
        const { flashcards=[] } = this.context
        const { quizzes=[] } = this.context
        const quiz = quizzes[quizId - 1]
        const quizFlashcards = flashcards.filter(card => quiz.flashcardIds.includes(card.cardId))
        const flashcardElements = quizFlashcards.map((card, i) => {
            return <li className="view-quiz-flash-li">
                <Flashcard card={card} key={i}/>
                   </li>
        })
        console.log(quiz)
        console.log(quizFlashcards)
        console.log(flashcardElements)
        return (
            <div className="view-quiz-container">
                <h2 className="view-quiz-name">{quiz.name}</h2>
                <ul className="view-quiz-flash-list">
                    {flashcardElements}
                </ul>
                <Link to={`/quiz-start/${quiz.quizId}`}>
                  <button className="take-quiz-button">Take Quiz</button>                
                </Link>
            </div>
        )
    }
}

export default ViewQuiz