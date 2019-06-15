import React, { Component } from 'react';
import { BASE_URL } from '../shared/constants';
import { CreateQuiz } from './CreateQuiz';
import { Card, Icon, List, Image } from 'semantic-ui-react';
import { hidden } from 'ansi-colors';
import topic_cover from '../images/topic_science.png';
import './Quiz.css'
class QuizUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions_list: [],
			questions: [],
			loaded: false,
			quiz: {
				quizTitle: 'React Quiz Component Demo',
				quizSynopsis:
					'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim',
				questions: [
					{
						question: 'How can you access the state of a component from inside of a member function?',
						questionType: 'text',
						answers: ['this.getState()', 'this.prototype.stateValue', 'this.state', 'this.values'],
						correctAnswer: '3',
						messageForCorrectAnswer: 'Correct answer. Good job.',
						messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
						explanation:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
					},
					{
						question: 'ReactJS is developed by _____?',
						questionType: 'text',
						answers: ['Google Engineers', 'Facebook Engineers'],
						correctAnswer: '2',
						messageForCorrectAnswer: 'Correct answer. Good job.',
						messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
						explanation:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
					},
					{
						question: 'ReactJS is an MVC based framework?',
						questionType: 'text',
						answers: ['True', 'False'],
						correctAnswer: '2',
						messageForCorrectAnswer: 'Correct answer. Good job.',
						messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
						explanation:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
					},
					{
						question: 'Which of the following concepts is/are key to ReactJS?',
						questionType: 'text',
						answers: ['Component-oriented design', 'Event delegation model', 'Both of the above'],
						correctAnswer: '3',
						messageForCorrectAnswer: 'Correct answer. Good job.',
						messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
						explanation:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
					},
					{
						question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
						questionType: 'photo',
						answers: [
							'https://dummyimage.com/600x400/000/fff&text=A',
							'https://dummyimage.com/600x400/000/fff&text=B',
							'https://dummyimage.com/600x400/000/fff&text=C',
							'https://dummyimage.com/600x400/000/fff&text=D',
						],
						correctAnswer: '1',
						messageForCorrectAnswer: 'Correct answer. Good job.',
						messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
						explanation:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
					},
				],
			},
		};
	}

	componentDidMount() {
		fetch(`${BASE_URL}/show_questions/`, {
			method: 'POST',
			body: JSON.stringify({
				student: 'student0',
			}),
		})
			.then(response => response.json())
			.then(data => {
				this.setState({
					questions_list: data.questions,
				});
			});
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.questions_list !== this.state.questions_list) {
			this.state.questions_list.map((question, i) => {
				return fetch(`${BASE_URL}/question/${question}`)
					.then(response => response.json())
					.then(data => {
						this.setState(prevState => {
							return { questions: [...prevState.questions, data] };
						});
						console.log(this.state.questions);
					});
			});
		}
	}

	gotoQuiz() {
		// console.log(this.state)
		let question_array = this.state.questions.map(question => {
			return {
				question: question.question,
				questionType: 'text',
				answers: [question['option1'], question['option2'], question['option3'], question['option4']],
				correctAnswer: question.correct[6],
			};
		});
		this.setState({
			quiz: {
				quizTitle: 'Science Human Body Quiz',
				quizSynopsis: 'Topics for Quiz include - Cells , Tissues, Organs ',
				questions: question_array,
			},
			loaded: true,
		});

		console.log(this.state.quiz);
	}

	render() {
		return (
			<div className='quiz'>
				{this.state.loaded ? (
					<CreateQuiz
						style={{ visibility: hidden }}
						questions_list={this.state.questions_list}
						quiz={this.state.quiz}
					/>
				) : (
					<Card onClick={() => this.gotoQuiz()}>
						<Image src={topic_cover} wrapped ui={false} />
						<Card.Content>
							<Card.Header>The Human Body</Card.Header>
							<Card.Meta>Class V - Science</Card.Meta>
							<Card.Description>
								<List bulleted>
									<List.Item>Our Body</List.Item>
									<List.Item>Cells</List.Item>
									<List.Item>Types of Cells</List.Item>
									<List.Item>Tissues</List.Item>
									<List.Item>Organs</List.Item>
								</List>
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<Icon name="arrow alternate circle right" />
							Start Quiz
						</Card.Content>
					</Card>
				)}
			</div>
		);
	}
}
export default QuizUp;
