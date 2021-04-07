import React from "react"
import { Link } from "react-router-dom"
import config from "../config"
import './Home.css'

// HOME PAGE FOR THE QUIZ ME APP

class Home extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        firstName: ''
      }
    }

    setFirstName = (fetchResponse) => {
        this.setState({
          firstName: fetchResponse.first_name
        })
    }

   // MOUNT A COMPONENT TO FETCH USERINFO FOR GREETING
    componentDidMount() {
      fetch(`${config.API_BASE_URL}/users/username-lookup`, {
        headers: {
          'session_token': localStorage.getItem('session_token')
        }
      })
      .then(response => response.json())
      .then(responseJson => {
        this.setFirstName(responseJson)
        console.log(responseJson)
      })
    }
    
    render() {
        console.log(this.state)
        return (
            <div className="home-container">
                <h2>Hello, {this.state.firstName}</h2>
                {/*NAVIGATION*/}
                <nav className="home-nav">
                    <ul className="nav-list">
                          <Link to={'/quizzes-list'} className="nav-link">
                            <li className="nav-li">
                              Quizzes
                            </li>
                          </Link>
                        
                          <Link to={'/flashcards-list'} className="nav-link">
                            <li className="nav-li">
                              Flashcards                        
                            </li>
                          </Link>
                    </ul>
                </nav>
                {/* LINK TO ADD FLASHCARD ROUTE */}
                <p>Access Quizzes and Flashcards you have made above, or add more with the buttons below</p>
                <Link to={'/add-flashcard'}>
                <button className="action-button">Add Flashcard</button>                
                </Link>
                {/* LINK TO MAKE QUIZ ROUTE */}
                <Link to={'/make-quiz'}>
                <button className="action-button">Make Quiz</button>                
                </Link>
            </div>
        )
    }
}

export default Home