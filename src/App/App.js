import React from "react"
import { Route, Link } from 'react-router-dom'
import AddFlashcard from "../AddFlashcard/AddFlashcard";
import Home from "../Home/Home";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import MakeQuiz from '../MakeQuiz/MakeQuiz'
import QuizzesList from "../QuizzesList/QuizzesList";
import FlashcardsList from "../FlashcardsList/FlashcardsList";
import QuizMeContext from '../QuizMeContext'
import FlashcardActive from '../FlashcardActive/FlashcardActive'
import ViewQuiz from '../ViewQuiz/ViewQuiz'
import QuizStart from '../QuizStart/QuizStart'
import QuizActive from '../QuizActive/QuizActive'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: [],
      quizzes: []
    }
  }

  // SET QUIZZES IN CONTEXT FOR QUIZZESLIST
  setQuizzes = (quizzes) => {
    this.setState({
      quizzes: quizzes
    })
  }

  // ADD QUIZ FROM MAKE QUIZ RESPONSE
  setQuizFromPost = (quiz) => {
    this.setState({
      quizzes: [...this.state.quizzes, quiz]
    })
  }

  // SET FLASHCARDS IN CONTEXT FROM GET REQUEST
  setFlashcards = (flashcards) => {
    this.setState({
      flashcards: flashcards
    })
  }

  // ADD FLASHCARD EVENT HANDLER
  setFlashFromPost = (flashcard) => {
    this.setState({
      flashcards: [...this.state.flashcards, flashcard] 
    })
   }

  
  // MAIN ROUTES OF THE APP
  renderMainRoutes = () => {
      return <>
          <Route 
              exact
              path={'/'}
              component={LandingPage}
              />
          <Route 
              path={'/signup'}
              component={Signup}
              />
          <Route 
              path={'/login'}
              component={Login}
              />
          <Route 
              path={'/home'}
              component={Home}
              />
          <Route 
              path={'/add-flashcard'}
              component={AddFlashcard}
              />
          <Route 
              path={'/make-quiz'}
              component={MakeQuiz}
              />
          <Route 
              path={'/quizzes-list'}
              component={QuizzesList}
              />
          <Route 
              path={'/flashcards-list'}
              component={FlashcardsList}
              />
          <Route 
              path={'/flashcard/:cardId'}
              component={FlashcardActive}
              />
          <Route 
              path={'/quizzes/:quizId'}
              component={ViewQuiz}
              />
          <Route 
              path={'/quiz-start/:quizId'}
              component={QuizStart}
              />
          <Route 
              path={'/quiz-active/:quizId'}
              component={QuizActive}
              />
      </>
  }

  render() {
    // VALUES TO BE ADDED TO CONTEXT
    const value = {
      flashcards: this.state.flashcards,
      quizzes: this.state.quizzes,
      setFlashFromPost: this.setFlashFromPost,
      setFlashcards: this.setFlashcards,
      setQuizzes: this.setQuizzes,
      setQuizFromPost: this.setQuizFromPost
    }
    return (
      <QuizMeContext.Provider value={value}>
      <div className="app-container">
        <header>
          <Link to={'/home'} className="title-link">
            <h1 className="title">Quiz Me!</h1>          
          </Link>
          <Link to="/home" className="home-link">
            <button className="home-button">Home</button>
          </Link>
        </header>
        <main>
          {this.renderMainRoutes()}  
        </main>
        <footer>
          <h4>&copy;Nicholas Reid</h4>
        </footer>
        </div>

      </QuizMeContext.Provider>
    )
  }
}

export default App;
