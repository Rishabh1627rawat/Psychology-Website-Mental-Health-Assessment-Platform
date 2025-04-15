import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import testImage1 from './assets/img-1-anixity.jpg';
import testImage2 from './assets/img-2-anixity.jpg';
import testImage3 from './assets/img-3-anixity.jpg';

const AnxietyTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(3).fill(''));
  const [testStarted, setTestStarted] = useState(false);
  const [showConsent, setShowConsent] = useState(true);
  const [testCompleted, setTestCompleted] = useState(false);
  const [showUserForm, setShowUserForm] = useState(true);
  const [userInfo, setUserInfo] = useState({ name: '', age: '' });

  const questions = [
    {
      id: 1,
      image: testImage1,
      question: 'What do you immediately notice in this image?',
      description: 'Describe your first impression',
    },
    {
      id: 2,
      image: testImage2,
      question: 'What emotions does this image evoke?',
      description: 'Select all that apply',
    },
    {
      id: 3,
      image: testImage3,
      question: 'How does this image make you feel physically?',
      description: 'Notice any bodily reactions',
    },
  ];

  useEffect(() => {
    if (testCompleted) {
      const existingResults = JSON.parse(localStorage.getItem('anxietyTestResults')) || [];
      const newResult = {
        user: userInfo,
        date: new Date().toISOString(),
        answers: answers,
        analysis: analyzeResults(answers),
      };
      localStorage.setItem('anxietyTestResults', JSON.stringify([...existingResults, newResult]));
    }
  }, [testCompleted, answers, userInfo]);

  const handleConsent = (consent) => {
    setShowConsent(false);
    if (!consent) navigate('/');
  };

  const handleAnswerChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTestCompleted(true);
      showResults();
    }
  };

  const showResults = () => {
    const result = analyzeResults(answers);
    alert(`Test Complete!\n\n${result}\n\nConsider consulting a professional for full assessment.`);
    navigate('/');
  };

  const analyzeResults = (answers) => {
    const anxietyIndicators = answers.filter(answer =>
      answer.toLowerCase().includes('anxious') ||
      answer.toLowerCase().includes('stress') ||
      answer.toLowerCase().includes('fear') ||
      answer.toLowerCase().includes('tense')
    ).length;

    return anxietyIndicators >= 2
      ? 'Your responses suggest some anxiety tendencies.'
      : 'Your responses appear balanced.';
  };

  const handleFormChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const submitUserForm = () => {
    if (userInfo.name && userInfo.age) {
      setShowUserForm(false);
      setTestStarted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  // ======================= UI =======================

  if (showConsent) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Help Improve Our Accuracy</h2>
          <p className="text-gray-600 mb-6">
            Your anonymous responses will help us improve mental health assessments.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => handleConsent(false)}
              className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              No Thanks
            </button>
            <button
              onClick={() => handleConsent(true)}
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showUserForm) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center px-4">
        <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-8 shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tell us about yourself</h2>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleFormChange}
            placeholder="Full Name"
            className="w-full p-3 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            name="age"
            value={userInfo.age}
            onChange={handleFormChange}
            placeholder="Age"
            className="w-full p-3 rounded-lg border border-gray-300 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={submitUserForm}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Information
          </button>
        </div>
      </div>
    );
  }

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Anxiety Perception Test</h2>
        <p className="text-gray-300 mb-6 max-w-md">
          This visual perception test aims to gauge your emotional responses to different imagery.
        </p>
        <button
          className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          onClick={() => setTestStarted(true)}
        >
          Begin Test
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
        <div className="text-right text-sm text-gray-500 mb-4">
          Question {currentQuestion + 1} of {questions.length}
        </div>

        <img
          src={questions[currentQuestion].image}
          alt="Test Visual"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h3 className="text-xl font-semibold text-gray-800 mb-2">{questions[currentQuestion].question}</h3>
        <p className="text-gray-500 mb-4">{questions[currentQuestion].description}</p>

        <textarea
          value={answers[currentQuestion]}
          onChange={handleAnswerChange}
          placeholder="Type your response here..."
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
        />

        <button
          onClick={nextQuestion}
          disabled={!answers[currentQuestion].trim()}
          className={`w-full py-3 rounded-lg font-medium transition ${
            answers[currentQuestion].trim()
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {currentQuestion === questions.length - 1 ? 'Submit Test' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default AnxietyTest;
