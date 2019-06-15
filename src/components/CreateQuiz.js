import React, { useState } from 'react';
import Quiz from 'react-quiz-component';
import { Button, Icon } from 'semantic-ui-react';
import { SummaryBlock } from './SummaryBlock';
import { Link } from '@reach/router';
import { BASE_URL } from '../shared/constants';

export function CreateQuiz(props) {
	const [next, goNext] = useState(false);
	const [summary, setSummary] = useState(false);
	const onCompleteAction = obj => {
		fetch(`${BASE_URL}/update_ratings/`, {
			method: 'POST',
			body: JSON.stringify({
				student: 'student0',
				questions_list: props.questions_list,
				incorrect: obj.numberOfIncorrectAnswers,
				correct: obj.numberOfCorrectAnswers,
			}),
		}).then(response => {
			console.log(response);
		});
		goNext(true);
	};

	return (
		<div style={{ margin: 40 }}>
			<Quiz quiz={props.quiz} shuffle={true} showDefaultResult={false} onComplete={onCompleteAction} />
			{next ? (
				<Button onClick={() => setSummary(true)} style={{ margin: 10 }} color="black" animated>
					<Button.Content visible>Next</Button.Content>
					<Button.Content hidden>
						<Icon name="arrow right" />
					</Button.Content>
				</Button>
			) : (
				<div />
			)}
			{summary ? props.summary_Links.map(link => <SummaryBlock link={link} />) : <div />}
		</div>
	);
}
