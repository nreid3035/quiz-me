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
      flashcards: [
        {
          cardId: 1,
          question: "2 + 2",
          answer: "4",
          isChecked: false
        },
        {
          cardId: 2,
          question: "Who was the first president of the United States",
          answer: "George Washington",
          isChecked: false
        }
      ],
      quizzes: [
        {
          quizId: "1",
          name: 'First Quiz',
          flashcardIds: [1, 2]
        }
      ]
    }
  }

  handleAddFlashcard = (flashcard) => {
    this.setState({
      flashcards: [
        ...this.state.flashcards,
        flashcard
      ]
    })
  }

  handleAddQuiz = (newQuiz) => {
    this.setState({
      quizzes: [
        ...this.state.quizzes,
        newQuiz
      ]
    })
  }

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
    const value = {
      flashcards: this.state.flashcards,
      quizzes: this.state.quizzes,
      handleAddFlashcard: this.handleAddFlashcard,
      handleAddQuiz: this.handleAddQuiz
    }
    return (
      <QuizMeContext.Provider value={value}>
      <>
        <header>
          <Link to={'/home'}>
            <h1>Quiz Me!</h1>          
          </Link>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </header>
        <main>
          {this.renderMainRoutes()}  
        </main>
        <footer>
          <h4>&copy;Nicholas Reid</h4>
        </footer>
      </>
      </QuizMeContext.Provider>
    )
  }
}

export default App;
