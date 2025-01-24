import React from 'react'
import { useQuestion } from "../context/QuestionContext.jsx";

const question = () => {
    const { currentQuestion } = useQuestion();
  return (
    <div className='bg-blue-200 flex'>
         <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>
         <p className="text-gray-500">Difficulty: {currentQuestion.difficulty}</p>
    </div>
  )
}

export default question