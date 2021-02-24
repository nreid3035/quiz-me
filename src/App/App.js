import React from "react"
import { Route, Link } from 'react-router-dom'
import AddFlashcard from "../AddFlashcard/AddFlashcard";
import Home from "../Home/Home";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import MakeQuiz from '../MakeQuiz/MakeQuiz'
import Quizzes from "../Quizzes/Quizzes";
import Flashcards from "../Flashcards/Flashcards";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: [
        {
          question: "2 + 2",
          answer: "4",
          folderId: null
        },
        {
          question: "Who was the first president of the United States",
          answer: "George Washington",
          folderId: null
        }
      ],
      quizzes: [
        
      ]
    }
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
              path={'/quizzes'}
              component={Quizzes}
              />
          <Route 
              path={'/flashcards'}
              component={Flashcards}
              />
      </>
  }

  render() {
    return (
      <div>
        <header>
          <Link to={'/'}>
          <h1>Quiz Me!</h1>          
          </Link>
        </header>
        <main>
          {this.renderMainRoutes()}  
        </main>
        <footer>
          <h4>&copy;Nicholas Reid</h4>
        </footer>
      </div>
    )
  }
}

export default App;
