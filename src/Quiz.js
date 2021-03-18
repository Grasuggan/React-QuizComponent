import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'

let quizData = require('./quiz_data.json')

class Quiz extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            quiz_position: 1
        }
    }
    render()
    {
        return (<div> <QuizQuestion className="QuizQuestion" quiz_question={quizData.quiz_questions[this.props.quiz_position - 1]}>{quizData.quiz_questions[0].instruction_text}</QuizQuestion> </div>)
    }
}

export default Quiz