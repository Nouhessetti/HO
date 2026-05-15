import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Pdfviewer from '@/components/kata/Pdfviewer';
import './Train.css';

export default function Train() {

  // =========================================
  // RECEIVE NAVIGATION STATE
  // =========================================
  const location = useLocation();

  const state = location.state || {};

  const {
    subject = 'Math',
    topic = 'Algebra',
    level = 'Beginner',
    id = 1
  } = state;

  // =========================================
  // PDF FILE PATH
  // =========================================
  const fileUrl = `/assets/Pdfs/${subject}/${topic}/${level}/${id}.pdf`;

  // =========================================
  // QUESTIONS DATA
  // =========================================
  const questions = [
    {
      id: 1,
      question: 'What is 2 + 2 ?',
      choices: ['1', '2', '4', '8'],
      correct: '4'
    },

    {
      id: 2,
      question: 'What is the square root of 49 ?',
      choices: ['5', '6', '7', '9'],
      correct: '7'
    },

    {
      id: 3,
      question: 'Solve: 2x = 10',
      choices: ['2', '5', '10', '20'],
      correct: '5'
    },

    {
      id: 4,
      question: 'Which number is prime ?',
      choices: ['4', '6', '9', '11'],
      correct: '11'
    }
  ];

  // =========================================
  // STORE USER ANSWERS
  // =========================================
  const [answers, setAnswers] = useState({});

  // =========================================
  // STORE SCORE
  // =========================================
  const [score, setScore] = useState(null);

  // =========================================
  // CURRENT QUESTION SLIDER INDEX
  // =========================================
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // =========================================
  // CURRENT QUESTION
  // =========================================
  const currentQuestion = questions[currentQuestionIndex];

  // =========================================
  // HANDLE ANSWER SELECTION
  // =========================================
  const handleAnswerChange = (questionId, choice) => {

    setAnswers((prev) => ({
      ...prev,
      [questionId]: choice
    }));

  };

  // =========================================
  // HANDLE SUBMIT
  // =========================================
  const handleSubmit = () => {

    let total = 0;

    questions.forEach((question) => {

      if (answers[question.id] === question.correct) {
        total++;
      }

    });

    setScore(total);
  };

  // =========================================
  // COMPONENT UI
  // =========================================
  return (

    <div className="train-page">

      {/* =====================================
          PDF VIEWER
      ===================================== */}
      <div className="pdf-section">

        <Pdfviewer fileUrl={fileUrl} />

      </div>
      <div className='container-block'>
      {/* =====================================
          PAGE INFO
      ===================================== */}
      <div className="train-info">
        
        <h1 className="train-title">
          Training Page
        </h1>

        <div className='train-header'>

          <p>
            <strong>Subject:</strong> {subject}
          </p>

          <p>
            <strong>Topic:</strong> {topic}
          </p>

          <p>
            <strong>Level:</strong> {level}
          </p>

        </div>

      </div>

      {/* =====================================
          QUESTIONS SECTION
      ===================================== */}
      <div className="questions-container">

        <h2 className="questions-title">
          Practice Questions
        </h2>

        {/* =====================================
            SLIDER BLOCK
        ===================================== */}
        <div className='question-block'>

          {/* QUESTION CARD */}
          <div className="question-card">

            {/* QUESTION COUNTER */}
            <div className="question-counter">

              Question {currentQuestionIndex + 1} / {questions.length}

            </div>

            {/* QUESTION TEXT */}
            <h3 className="question-text">

              {currentQuestion.id}. {currentQuestion.question}

            </h3>

            {/* CHOICES */}
            <div className="choices-container">

              {currentQuestion.choices.map((choice, index) => (

                <label
                  key={index}
                  className="choice-label"
                >

                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={choice}
                    checked={answers[currentQuestion.id] === choice}
                    onChange={() =>
                      handleAnswerChange(
                        currentQuestion.id,
                        choice
                      )
                    }
                  />

                  <span>
                    {choice}
                  </span>

                </label>

              ))}

            </div>

          </div>

          {/* =====================================
              SLIDER CONTROLS
          ===================================== */}
          <div className="slider-controls">

            {/* PREVIOUS BUTTON */}
            <button
              className="nav-btn"
              disabled={currentQuestionIndex === 0}
              onClick={() =>
                setCurrentQuestionIndex((prev) => prev - 1)
              }
            >
              Previous
            </button>

            {/* NEXT BUTTON */}
            <button
              className="nav-btn"
              disabled={
                currentQuestionIndex === questions.length - 1
              }
              onClick={() =>
                setCurrentQuestionIndex((prev) => prev + 1)
              }
            >
              Next
            </button>
            
          </div>
        
        </div>
     
        {/* =====================================
            SUBMIT BUTTON
        ===================================== */}
        <button
          className="submit-btn"
          onClick={handleSubmit}
        >
          Submit Answers
        </button>
       </div>
        {/* =====================================
            SCORE DISPLAY
        ===================================== */}
        {score !== null && (

          <div className="score-box">

            <h3>
              Your Score: {score} / {questions.length}
            </h3>

          </div>

        )}

      </div>

    </div>
  );
}