import React from 'react'

export default React.createContext({
    flashcards: [],
    quizzes: [],
    handleAddFlashcard: () => {},
    handleAddQuiz: () => {}
})