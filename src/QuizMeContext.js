import React from 'react'

export default React.createContext({
    userInfo: {},
    flashcards: [],
    quizzes: [],
    handleAddFlashcard: () => {},
    handleAddQuiz: () => {},
    handleBack: () => {},
    handleFlashcardDelete: () => {},
    handleQuizDelete: () => {},
    setUserInfo: () => {},
    setFlashFromPost: () => {},
    setFlashcards: () => {},
    setQuizzes: () => {},
    setQuizFromPost: () => {}
})