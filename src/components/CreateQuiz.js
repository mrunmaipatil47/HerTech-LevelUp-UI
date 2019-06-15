import React from 'react'
import { Input, Button, Icon } from 'semantic-ui-react'
import Quiz from 'react-quiz-component'
import {Link} from '@reach/router'
import { BASE_URL } from '../shared/constants';

export function CreateQuiz(props) {
    const onCompleteAction = (obj) => {
        console.log(obj);

        fetch(`${BASE_URL}/update_ratings/`, {
            method: 'POST',
            body: JSON.stringify({
                student: "student0",
                questions_list: props.questions_list,
                incorrect: obj.numberOfIncorrectAnswers,
                correct : obj.numberOfCorrectAnswers
            })
        })
            .then(response => {
            console.log(response)
        })
      }
    return (
        <div style={ { margin: 40 } }>
            <Quiz quiz={ props.quiz } shuffle={ true } showDefaultResult={ false } onComplete={onCompleteAction}/>
        </div>
    )
}