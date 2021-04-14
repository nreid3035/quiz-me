import React from 'react'

export default React.createContext({
    flashcards: [],
    quizzes: [],
    setFlashFromPost: () => {},
    setFlashcards: () => {},
    setQuizzes: () => {},
    setQuizFromPost: () => {}
})