import React,{Component ,Fragment} from "react";
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Rules = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions</title></Helmet>
                <head>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>Quiz Instructions</title>
                </head>
                <body>

                <div id="quiz-instructions">
                    <h1>Welcome to the Quiz!</h1>
                    <div id="marking-scheme">
                        <h2>Marking Scheme:</h2>
                        <p>+4 for every correct answer</p>
                        <p>-1 for every wrong answer</p>
                        <p>No penalty for skipping</p>
                    </div>

                    <div id="quiz-details">
                        <h2>Quiz Details:</h2>
                        <p><strong>Total Number of Questions:</strong> 10</p>
                        <p><strong>Total Time:</strong> 15 minutes</p>
                    </div>
                    <div id="buttons">
                        <button id="start-quiz-btn"><Link to="/play/quiz" >Start</Link></button>
                        <button id="start-quiz-btn"><Link to="/" >Back</Link></button>
                    </div>
                </div>

                </body>
    </Fragment>
);

export default Rules;