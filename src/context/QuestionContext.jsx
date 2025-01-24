// src/context/QuestionContext.js
import React, { createContext, useState, useContext } from "react";

// JSON Data for Questions
const questions = [
  {
    id: 1,
    difficulty: "easy",
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    difficulty: "easy",
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    id: 3,
    difficulty: "easy",
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    id: 4,
    difficulty: "easy",
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "1997"],
    answer: "1995",
  },
  {
    id: 5,
    difficulty: "easy",
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<script>", "<css>", "<link>"],
    answer: "<style>",
  },
];

// Create the Context
const QuestionContext = createContext();

// Create a Provider Component
export const QuestionProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Index of current question

  // Function to get current question
  const currentQuestion = questions[currentIndex];

  // Function to navigate to the next question
  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to navigate to the previous question
  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        currentIndex,
        currentQuestion,
        nextQuestion,
        prevQuestion,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

// Custom hook to use the Question Context
export const useQuestion = () => useContext(QuestionContext);
