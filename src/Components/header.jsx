import React, { useState, useEffect } from "react";
import TimerIcon from "@mui/icons-material/Timer"; 
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Header = () => {
  // Timer State
  const [time, setTime] = useState({
    hours: 1,
    minutes: 30,
    seconds: 0,
  });

  // Timer Effect
  useEffect(() => {
    const timerInterval = setInterval(() => {
      updateTime();
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, [time]);

  // Timer Update Logic
  const updateTime = () => {
    const { hours, minutes, seconds } = time;

    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(); // Stops the timer at 0
      return;
    }

    if (seconds > 0) {
      setTime({ hours, minutes, seconds: seconds - 1 });
    } else if (minutes > 0) {
      setTime({ hours, minutes: minutes - 1, seconds: 59 });
    } else if (hours > 0) {
      setTime({ hours: hours - 1, minutes: 59, seconds: 59 });
    }
  };

  // Format time to two digits
  const formatTime = (timeUnit) => String(timeUnit).padStart(2, "0");

  return (
    <div className="bg-gray-100 flex justify-between items-center p-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
          alt="Unstop Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* Center Section - Buttons */}
      <div className="flex-1 flex justify-center items-center">
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </ButtonGroup>
      </div>

      {/* Timer and Guidelines Section */}
      <div className="flex items-center">
        {/* Guidelines Button */}
        <button className="bg-white text-blue-600 px-4 py-2 border border-blue-500 rounded-md disabled:bg-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200 px-5 mx-5">
          Guidelines
        </button>

        {/* Timer Icon */}
        <TimerIcon sx={{ color: "#2196F3", fontSize: "24px" }} />

        {/* Timer Display */}
        <div className="text-gray-700 text-2xl font-medium px-2">
          Time Left:{" "}
          <span className="text-gray-900">
            {formatTime(time.hours)}:{formatTime(time.minutes)}:
            {formatTime(time.seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
