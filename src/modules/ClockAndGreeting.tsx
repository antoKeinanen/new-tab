import React, { useState, useEffect } from "react";
import "./ClockAndGreeting.css"

const greetings: String[] = [
  "Good morning!",
  "Good afternoon!",
  "Good evening!",
  "Go to Sleep!",
];

function ClockAndGreeting() {
  const [d, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  var hour: number = d.getHours();
  var g: String;
  if (hour >= 23 || hour < 5) {
    g = greetings[3];
  } else if (hour >= 6 && hour < 12) {
    g = greetings[0];
  } else if (hour >= 12 && hour < 17) {
    g = greetings[1];
  } else {
    g = greetings[2];
  }

  const [greeting, setGreeting] = useState(g);

  useEffect(() => {
    var timer = setInterval(() => {
      var hour: number = d.getHours();
      var g: String;
      if (hour >= 23 || hour < 5) {
        g = greetings[3];
      } else if (hour >= 6 && hour < 12) {
        g = greetings[0];
      } else if (hour >= 12 && hour < 17) {
        g = greetings[1];
      } else {
        g = greetings[2];
      }
      setGreeting(g);
    }, 60000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="timeBlock">
      <div className="clock">
        <div className="hour">{d.getHours()}</div>
        <div className="separator"> : </div>
        <div className="minute">{d.getMinutes() < 10 ? "0" + d.getMinutes().toString() : d.getMinutes()}</div>
      </div>
      <div className="greeting">{greeting}</div>
    </div>
  );
}

export default ClockAndGreeting;
