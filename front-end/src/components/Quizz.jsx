import React, { useState } from 'react';
import questions from "../social/quizQuestions/questionsJavaB";
import "../styles/Quizz.css";
const Quizz = ()=>{
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    return(
        <div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					 <h1>{`${score} Respuesta(s) Correctas De ${questions.length}`}</h1>
                     <p>{score >= questions.length*.60 ? "Felicidades has completado el curso, Pero recuerda seguir Practicando :)":"No cuentas con los conocimientos necesarios para completar el curso, te recomendamos tomarlo de nuevo"}</p>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Pregunta {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className={`boton`} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    );
}

export default Quizz;