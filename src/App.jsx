import React from "react";
import Header from "./Components/header.jsx"; 
import Question from "./Components/question.jsx"; 
import Choices from "./Components/options.jsx";  
import { QuestionProvider } from "./context/QuestionContext"; 

const App = () => {
  return (
    <QuestionProvider> 
      <div className="h-screen flex flex-col"> {/* Use full screen height */}
      <Header />
      <div className="flex w-full h-full"> {/* Full width and height */}
        <div className="bg-blue-200 w-1/2 h-full">  {/* 50% width and full height for Question */}
          <Question />
        </div>
        <div className="w-1/2 h-full">  {/* 50% width and full height for Choices */}
          <Choices />
        </div>
      </div>
    </div>

    </QuestionProvider>
  );
};

export default App;
