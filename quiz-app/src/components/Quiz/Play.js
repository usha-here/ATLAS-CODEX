import React, { Component, Fragment} from "react";
import { Helmet } from 'react-helmet';
import { useState } from 'react'
import { quiz } from '../../questions'

const Play = () =>{

    const [activeQuestion,setActiveQuestion] =useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        skippedQuestions: 0,
    })

    const { questions } = quiz
    const { question, choices, correctAnswer } = questions[activeQuestion]

    const addLeadingZero = (number) => (number > 9 ? number :`0${number}`)
    const onAnswerSelected = (answer,index) => {
        setSelectedAnswerIndex(index)
        if(answer === correctAnswer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }
    
    const onClickNext = () => {
        if(selectedAnswerIndex === null){
            setResult((prev) =>{
                return{
                    ...prev,
                    skippedQuestions: prev.skippedQuestions +1,
                };
            }
            )
        } else{
            setSelectedAnswerIndex(null)
            setResult((prev) =>
                selectedAnswer
                    ?{
                        ...prev,
                        score: prev.score + 4,
                        correctAnswers: prev.correctAnswers + 1,
                    }
                    :{
                        ...prev,
                        score: prev.score -1,
                        wrongAnswers: prev.wrongAnswers +1,
                    }
            )
        }
        
        if(activeQuestion !== questions.length-1){
            setActiveQuestion((prev) => prev + 1)
        } 
        else{
            setActiveQuestion(0)
            setShowResult(true)
        }
        
    }

    return(
        <Fragment>
            <Helmet><title>Quiz Page</title></Helmet>
            <div className="quiz-container">
                {!showResult ?(
                    <div>
                    <div><h1>Quiz</h1></div>
                    <div>
                        <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
                        <span className="total-questions">/{addLeadingZero(questions.length)}</span>

                    </div>
                    <h2>{question}</h2>
                    <ul>
                        {choices.map((answer,index) =>(
                            <li 
                                onClick={() => onAnswerSelected(answer,index)}
                                key={answer}
                                className={selectedAnswerIndex === index ?'selected-answer' : null}>
                                {answer}
                            </li>
                        ))}
                    </ul>
                    <div className ="flex-right">
                        <button onClick={onClickNext} >
                        {selectedAnswerIndex === null ? 'Skip' : `${activeQuestion === questions.length-1 ? 'Finish' : 'Next'}` }
                        </button>
                    </div>
                </div>
                ) : (
                    <div className="result">
                        <h3>Result</h3>
                        <p>
                            Total Questions: <span>{questions.length}</span>
                        </p>
                        <p>
                            Total Score: <span>{result.score}</span>
                        </p>
                        <p>
                            Skipped Questions:<span> {result.skippedQuestions}</span>
                        </p>
                        <p>
                            Correct Answers:<span> {result.correctAnswers}</span>
                        </p>
                        <p>
                            Wrong Answers:<span> {result.wrongAnswers}</span>
                        </p>
                    </div>

                )
            }
            </div>
        </Fragment>
    )
}

export default Play;