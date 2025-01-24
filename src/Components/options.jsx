import React from "react";
import { useQuestion } from "../context/QuestionContext.jsx";

const Choices = () => {
  const { currentQuestion, nextQuestion, prevQuestion } = useQuestion(); // Access current question and navigation functions

  return (
    <div className="h-full p-4 bg-white rounded-md shadow-md mt-4 flex flex-col justify-between">
      <h3 className="text-lg font-semibold mb-4">Choices:</h3>
      <ul className="list-disc pl-5 space-y-2 flex-1">
        {currentQuestion.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>

      <div className="mt-4 flex justify-between">
        <button
          className="bg-gray-300 px-4 py-2 rounded-md"
          onClick={prevQuestion}
          disabled={currentQuestion.id === 1}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={nextQuestion}
          disabled={currentQuestion.id === 5}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Choices;
