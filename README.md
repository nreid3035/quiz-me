# Quiz Me

## Description

Client side code for the Quiz Me application. Quiz Me is an application that allows users to make their own flashcards and group them together as quizzes to be taken at any time. Perfect for students looking for a convienient way to study during small periods of free time throughout the day. Or maybe you have some talking points you would like to refresh yourself on for a meeting during your commute. Use cases are endless just visit quiz-me.vercel.app to sign up as a user

## Usage

The Signup form is required to make an account and save your flashcards and quizzes on the Quiz Me database. All fields shown are required and you will be directed to the login page if your signup is successful

insert image of signup form

The Login form allows users who have already properly signed up to Login with their username and password to access their data, On success generates JSON Web Token to be added to local storage and navigates the user to the homepage

insert image of login form

If you have logged in and do not see your name in the home page greeting, I encourage you to login again to be able to save and access your data properly

insert image of home page with no name

The Add Flashcard button on the home page is used to get to the add flashcard form. This form will perform a POST request adding the flashcard to the database and redirecting back to the list of flashcards

insert image of add flashcard form here

The Make Quiz button on the home page will direct users to the make quiz form. This form allows users to select flashcards from their list of questions and group them together under a name. Submission of this form will perform a POST request for the quiz to the database

insert image of make quiz form here

If the Add Flashcard form, or the Make Quiz form fail to submit your request your login has most likely timed out and I would encourage you to navigate back to the login page to continue

insert image of error?

The Flashcards button will bring us to the Flashcards List, performing a GET request for all the users flashcards, authenticated by jwt

insert image of flashcards list

The Quizzes button on the home page will bring us to the Quizzes List, performing a GET request for all the users quizzes, authenticated by jwt

insert image of quizzes list

If either the flashcards or the quizzes list fails to load you have most likely timed out of your login, I would encourage you to navigate back to the login page and submit that again to solve the issue

insert image of list failing

Clicking on a flashcard allows you to view the card and its content. The question will be displayed first with the option to flip over and view the answer available as well. A back button is present allowing users to go to back to the last page in the app they had visited. A delete button is present as well and will delete the flashcard from the database on click, even if the flashcard was accessed from within a quiz.

insert image of the flashcard active page

Clicking View Quiz on any quiz in the quiz list will allow the user to view the name of the quiz and the flashcards assigned to that quiz as well

insert image of view quiz page

Clicking on take quiz will bring you to the quiz start page where you will see some basic info about the quiz you are about to begin including the quiz name and how many questions are in the quiz

insert image of quiz start page

Starting the quiz will bring you to the first question, You will have the option to flip from the question, revealing the answer at which point you can click the "correct" button or the "wrong" button depending on how you answered, The next question will then be generated and the app will keep track of your score behind the scenes

insert images of quizactive

Once the last question has been answered, the results of the quiz will be generated revealing your overall score and giving you the option to either retake the quiz, or navigate to the home page.

## Installation

To install and add on to the project clone the repository to your local environment using git bash (or your prefered method) 

'''bash
git clone (repo link here) 
'''

run npm install to install dependencies from project

'''bash
npm install
'''

run npm start to have project run on your local computer

'''bash
npm start
'''

This should start the project on your local environment, connected to the deployed api for requests

## License
MIT License

Copyright (c) [2021] [Nicholas Reid]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.